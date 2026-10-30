import { NextResponse } from 'next/server';

// If Clerk keys are provided, use Clerk middleware/proxy; otherwise, allow graceful browsing during initial setup
const hasClerkKeys =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('your_clerk_publishable_key');

let proxyHandler;

if (hasClerkKeys) {
  try {
    const { clerkMiddleware, createRouteMatcher } = require('@clerk/nextjs/server');
    const isPublicRoute = createRouteMatcher([
      '/',
      '/about(.*)',
      '/services(.*)',
      '/portfolio(.*)',
      '/contact(.*)',
      '/sign-in(.*)',
      '/sign-up(.*)',
      '/api/leads(.*)',
    ]);

    proxyHandler = clerkMiddleware(async (auth, req) => {
      if (!isPublicRoute(req)) {
        await auth.protect();
      }
    });
  } catch (err) {
    console.warn('Clerk proxy fallback:', err.message);
    proxyHandler = () => NextResponse.next();
  }
} else {
  proxyHandler = () => NextResponse.next();
}

export function proxy(req, ev) {
  return proxyHandler(req, ev);
}

export default proxyHandler;

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

