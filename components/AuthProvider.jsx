import { ClerkProvider } from '@clerk/nextjs';

export default function AuthProvider({ children }) {
  const hasClerkKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('your_clerk_publishable_key');

  if (hasClerkKey) {
    return <ClerkProvider>{children}</ClerkProvider>;
  }

  // Graceful fallback for local development before Clerk keys are configured
  return <>{children}</>;
}
