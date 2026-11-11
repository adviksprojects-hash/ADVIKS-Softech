import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { query } from '@/lib/neon';
import { INITIAL_TEAM_MEMBERS } from '@/lib/teamData';
import { INITIAL_CLIENTS } from '@/lib/clientData';

// Hardcoded authorized admin emails from company leadership
const AUTHORIZED_ADMIN_EMAILS = new Set([
  'advikssoftech@gmail.com',
  'vivekpawar932564@gmail.com',
  'kaustubhronge25@gmail.com',
  'dipakpawars19@gmail.com',
  'atharvmalvade@gmail.com',
  'dhirajgaikwad3399@gmail.com',
  'patilshindevijay@gmail.com',
  'shreyajagtap524@gmail.com',
  'payalkharat43@gmail.com',
  'admin@advikssoftech.com',
  ...INITIAL_TEAM_MEMBERS.map((m) => m.email?.toLowerCase().trim()).filter(Boolean),
]);

// Hardcoded authorized client emails from active SOWs
const AUTHORIZED_CLIENT_EMAILS = new Set([
  'director@parasbusinesspark.com',
  'ops@zenithlogistics.in',
  'contact@vyaparstock.in',
  'sales@aameenafurniture.com',
  'client@acme.com',
  ...INITIAL_CLIENTS.map((c) => c.email?.toLowerCase().trim()).filter(Boolean),
]);

/**
 * Check if an email is an authorized administrator
 */
export async function isAuthorizedAdminEmail(email) {
  if (!email) return false;
  const lower = email.toLowerCase().trim();

  // 1. Corporate domain check
  if (lower.endsWith('@advikssoftech.com')) return true;

  // 2. Predefined leadership email whitelist
  if (AUTHORIZED_ADMIN_EMAILS.has(lower)) return true;

  // 3. Database check in Neon DB users table
  try {
    const res = await query(
      "SELECT id FROM users WHERE LOWER(email) = $1 AND role = 'ADMIN' LIMIT 1",
      [lower]
    );
    if (res && res.length > 0) return true;
  } catch (err) {
    console.warn('Neon DB admin lookup check:', err.message);
  }

  return false;
}

/**
 * Check if an email is an authorized client
 */
export async function isAuthorizedClientEmail(email) {
  if (!email) return false;
  const lower = email.toLowerCase().trim();

  // 1. Predefined active clients whitelist
  if (AUTHORIZED_CLIENT_EMAILS.has(lower)) return true;

  // 2. Database check in Neon DB users table
  try {
    const res = await query(
      "SELECT id FROM users WHERE LOWER(email) = $1 AND (role = 'CLIENT' OR role = 'ADMIN') LIMIT 1",
      [lower]
    );
    if (res && res.length > 0) return true;
  } catch (err) {
    console.warn('Neon DB client lookup check:', err.message);
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
        const isAdmin = await isAuthorizedAdminEmail(email);
        const isClient = await isAuthorizedClientEmail(email);

        if (!isAdmin && !isClient) {
          throw new Error('UNAUTHORIZED_EMAIL');
        }

        const role = isAdmin ? 'ADMIN' : 'CLIENT';

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

      // Check strict authorization
      const isAdmin = await isAuthorizedAdminEmail(email);
      const isClient = await isAuthorizedClientEmail(email);

      // BLOCK ALL UNAUTHORIZED EMAILS
      if (!isAdmin && !isClient) {
        console.warn(`[SECURITY BLOCKED] Unauthorized Google email attempted access: ${email}`);
        return false; // Automatically redirects user to /sign-in?error=AccessDenied
      }

      const assignedRole = isAdmin ? 'ADMIN' : 'CLIENT';
      user.role = assignedRole;

      // Sync verified authorized user to Neon DB
      try {
        const existingUsers = await query(
          'SELECT id, role, company_name FROM users WHERE LOWER(email) = $1 LIMIT 1',
          [email]
        );

        if (existingUsers && existingUsers.length > 0) {
          const dbUser = existingUsers[0];
          user.id = dbUser.id;
          user.role = dbUser.role || assignedRole;
          user.company = dbUser.company_name || '';

          if (user.image) {
            await query(
              'UPDATE users SET avatar_url = $1, full_name = COALESCE(full_name, $2) WHERE id = $3',
              [user.image, user.name || '', dbUser.id]
            );
          }
        } else {
          const insertRes = await query(
            `INSERT INTO users (email, full_name, role, avatar_url, provider)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING id, role`,
            [email, user.name || email.split('@')[0], assignedRole, user.image || null, account?.provider || 'google']
          );

          if (insertRes && insertRes.length > 0) {
            user.id = insertRes[0].id;
          }
        }
      } catch (err) {
        console.warn('Neon DB user record sync note:', err.message);
      }

      return true;
    },

    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.company = user.company || '';
        token.authorized = true;
      }

      if (trigger === 'update' && session) {
        token.role = session.role || token.role;
        token.name = session.name || token.name;
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
