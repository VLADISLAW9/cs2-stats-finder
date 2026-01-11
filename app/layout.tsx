import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';

import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import { MoonIcon } from 'lucide-react';
import { ROUTES } from '@/src/utils/constants';

export const metadata: Metadata = {
  title: 'CS2 Stats Finder'
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <body className='px-100 py-10'>
      <header className='mb-10 flex items-center justify-between'>
        <Link href={ROUTES.HOME} className='font-extrabold text-2xl'>
          CS 2 STATS FINDER
        </Link>
        <Button>
          <MoonIcon />
        </Button>
      </header>
      {children}
    </body>
  </html>
);

export default RootLayout;
