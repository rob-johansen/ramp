import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import type React from 'react'

export const metadata: Metadata = {
  title: 'Ramp',
  description: 'Rob Johansen - Ramp Interview',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
