'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { EmployeeAuthProvider } from '@/context/EmployeeAuthContext';

export default function AuthProvider({ children }) {
  const hasClerkKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('your_clerk_publishable_key');

  const content = <EmployeeAuthProvider>{children}</EmployeeAuthProvider>;

  if (hasClerkKey) {
    return <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>{content}</ClerkProvider>;
  }

  // Fallback with full EmployeeAuthContext active
  return content;
}
