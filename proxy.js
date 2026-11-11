import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET || 'adviks-softech-secret-encryption-key-32-chars-min';

export async function proxy(req) {
  const { pathname } = req.nextUrl;

  // Always allow NextAuth API endpoints, public static assets, logos, and public routes
  if (
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/api/leads') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/logo') ||
    pathname === '/sign-in' ||
    pathname.startsWith('/sign-in/') ||
    pathname === '/sign-up' ||
    pathname.startsWith('/sign-up/') ||
    pathname === '/' ||
    pathname.startsWith('/about') ||
    pathname.startsWith('/services') ||
    pathname.startsWith('/portfolio') ||
    pathname.startsWith('/contact')
  ) {
    return NextResponse.next();
  }

  // 1. Check NextAuth JWT Token
  const token = await getToken({ req, secret });

  // 2. Check local passkey session cookies
  const hasEmpCookie = req.cookies.get('adviks_emp_auth')?.value === 'true';
  const hasCltCookie = req.cookies.get('adviks_clt_auth')?.value === 'true';

  // 3. Strict Admin Portal Protection (/admin & /admin/*)
  if (pathname.startsWith('/admin')) {
    const isNextAuthAdmin = token && token.role === 'ADMIN';
    const isAuthorizedAdmin = isNextAuthAdmin || hasEmpCookie;

    if (!isAuthorizedAdmin) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('callbackUrl', pathname);
      signInUrl.searchParams.set('error', 'AdminAccessRequired');
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  }

  // 4. Strict Client Portal Protection (/dashboard & /dashboard/*)
  if (pathname.startsWith('/dashboard')) {
    const isNextAuthClient = token && (token.role === 'CLIENT' || token.role === 'ADMIN');
    const isAuthorizedClient = isNextAuthClient || hasCltCookie || hasEmpCookie;

    if (!isAuthorizedClient) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('callbackUrl', pathname);
      signInUrl.searchParams.set('error', 'ClientAccessRequired');
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
