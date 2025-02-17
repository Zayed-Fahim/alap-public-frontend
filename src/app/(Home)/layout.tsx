import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../../styles/globals.css';
import { Footer, Header } from '@/components/layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Alap',
  description: 'Builting by Zayed'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="container mx-auto max-w-[1280px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
