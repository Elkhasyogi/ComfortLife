'use client';

import { SidebarProvider } from '@/components/DashboardLayout/sidebar/sidebar-context';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light">
        <Toaster />
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
