import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@/lib/analytics';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Providers } from '@/components/providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://example-portfolio.vercel.app'),
  title: {
    default: 'DataCraft Studio | Power BI, Automation, Trading Bot Architecture, Analytics',
    template: '%s | DataCraft Studio'
  },
  description:
    'Premium data services: Power BI dashboards, Python automation, customized trading bot architecture, and advanced analytics engagements.',
  openGraph: {
    title: 'DataCraft Studio',
    description:
      'Premium data services for decision-ready reporting, reliable automation, and measurable analytical outcomes.',
    url: 'https://example-portfolio.vercel.app',
    siteName: 'DataCraft Studio',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataCraft Studio',
    description: 'Premium data services for BI, automation, trading systems, and analytics.',
    images: ['/og-image.svg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
