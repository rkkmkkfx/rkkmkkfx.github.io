import './ui/styles/global.css';

import { type ReactNode } from 'react';
import Header from './ui/components/header';
import Footer from './ui/components/footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
