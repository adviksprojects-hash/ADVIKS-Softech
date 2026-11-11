'use client';

import { SessionProvider } from 'next-auth/react';
import { EmployeeAuthProvider } from '@/context/EmployeeAuthContext';

export default function AuthProvider({ children }) {
  return (
    <SessionProvider>
      <EmployeeAuthProvider>
        {children}
      </EmployeeAuthProvider>
    </SessionProvider>
  );
}
