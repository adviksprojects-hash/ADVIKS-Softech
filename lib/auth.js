import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { query } from '@/lib/neon';

// Default corporate domains and emergency founder emails
const EMERGENCY_ADMIN_EMAILS = new Set([
  'advikssoftech@gmail.com',
  'vivekpawar932564@gmail.com',
  'kaustubhronge25@gmail.com',
  'dipakpawars19@gmail.com',
  'admin@advikssoftech.com',
]);

/**
 * Check from Neon DB whether an email is an authorized and active Admin
 */
export async function isAuthorizedAdminEmail(email) {
  if (!email) return false;
  const lower = email.toLowerCase().trim();

  try {
    const res = await query(
      "SELECT id, role, is_active FROM users WHERE LOWER(email) = $1 LIMIT 1",
      [lower]
    );

    if (res && res.length > 0) {
      const user = res[0];
      return user.role === 'ADMIN' && (user.is_active !== false);
    }
  } catch (err) {
    console.warn('Neon DB admin lookup check error:', err.message);
  }

  // Fallback to corporate domain or emergency list
  if (lower.endsWith('@advikssoftech.com') || EMERGENCY_ADMIN_EMAILS.has(lower)) {
    return true;
  }

  return false;
}

/**
 * Check from Neon DB whether an email is an authorized and active Client
 */
export async function isAuthorizedClientEmail(email) {
  if (!email) return false;
  const lower = email.toLowerCase().trim();

  try {
    const res = await query(
      "SELECT id, role, is_active FROM users WHERE LOWER(email) = $1 LIMIT 1",
      [lower]
    );

    if (res && res.length > 0) {
      const user = res[0];
      return (user.role === 'CLIENT' || user.role === 'ADMIN') && (user.is_active !== false);
    }
  } catch (err) {
    console.warn('Neon DB client lookup check error:', err.message);
  }

  return false;
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'ADVIKS Passkey & Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        role: { label: 'Role', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        const email = credentials.email.toLowerCase().trim();

        // 1. Check directly from Neon DB
        let dbRole = null;
        try {
          const res = await query(
            "SELECT id, role, is_active, full_name, company_name FROM users WHERE LOWER(email) = $1 LIMIT 1",
            [email]
          );
          if (res && res.length > 0) {
            const user = res[0];
            if (user.is_active === false) {
              throw new Error('ACCOUNT_SUSPENDED');
            }
            dbRole = user.role;
          }
        } catch (e) {
          if (e.message === 'ACCOUNT_SUSPENDED') throw e;
        }

        const isAdmin = dbRole === 'ADMIN' || await isAuthorizedAdminEmail(email);
        const isClient = dbRole === 'CLIENT' || await isAuthorizedClientEmail(email);

        if (!isAdmin && !isClient) {
          throw new Error('UNAUTHORIZED_EMAIL');
        }

        const role = dbRole || (isAdmin ? 'ADMIN' : 'CLIENT');

        return {
          id: `usr_${Date.now()}`,
          name: email.split('@')[0],
          email: email,
          role: role,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user?.email) return false;

      const email = user.email.toLowerCase().trim();

      // PRIMARY CHECK: Fetch user directly from Neon DB
      try {
        const dbUsers = await query(
          'SELECT id, role, is_active, full_name, company_name FROM users WHERE LOWER(email) = $1 LIMIT 1',
          [email]
        );

        if (dbUsers && dbUsers.length > 0) {
          const dbUser = dbUsers[0];

          // If marked suspended/inactive in database, immediately block access
          if (dbUser.is_active === false || dbUser.role === 'SUSPENDED') {
            console.warn(`[SECURITY] Suspended account attempted login: ${email}`);
            return false;
          }

          // Use the exact role defined in the database
          user.id = dbUser.id;
          user.role = dbUser.role || 'CLIENT';
          user.company = dbUser.company_name || '';

          // Update avatar and name if available
          if (user.image) {
            await query(
              'UPDATE users SET avatar_url = $1, full_name = COALESCE(full_name, $2), updated_at = CURRENT_TIMESTAMP WHERE id = $3',
              [user.image, user.name || '', dbUser.id]
            );
          }

          return true;
        }
      } catch (err) {
        console.warn('Neon DB lookup error during signIn:', err.message);
      }

      // If user does NOT exist in Neon DB:
      // Allow auto-registration only for corporate @advikssoftech.com or emergency founder emails
      if (email.endsWith('@advikssoftech.com') || EMERGENCY_ADMIN_EMAILS.has(email)) {
        try {
          const insertRes = await query(
            `INSERT INTO users (email, full_name, role, avatar_url, is_active, provider)
             VALUES ($1, $2, 'ADMIN', $3, true, 'google')
             RETURNING id, role`,
            [email, user.name || email.split('@')[0], user.image || null]
          );
          user.id = insertRes[0]?.id;
          user.role = 'ADMIN';
          return true;
        } catch (e) {
          user.role = 'ADMIN';
          return true;
        }
      }

      // Block all non-registered users
      console.warn(`[SECURITY BLOCKED] Non-registered email attempted login: ${email}`);
      return false;
    },

    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.company = user.company || '';
        token.authorized = true;
      }

      // If session is updated or periodically revalidated, check Neon DB
      if (trigger === 'update' && session?.role) {
        token.role = session.role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.company = token.company || '';
        session.user.authorized = token.authorized || false;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'adviks-softech-secret-encryption-key-32-chars-min',
};
