import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vish-studio.github.io/nxt-pax-packs'),
  title: {
    default: 'PaxPacks | Bio Packaging Products for Businesses',
    template: '%s | PaxPacks',
  },
  description: 'PaxPacks supplies biodegradable bags, cups, mailers, and takeaway containers for businesses replacing everyday plastic packaging.',
  keywords: [
    'biodegradable packaging',
    'bio packaging supplier',
    'compostable bags',
    'eco cups',
    'takeaway containers',
    'mailer packaging',
    'food packaging supplier',
  ],
  applicationName: 'PaxPacks',
  authors: [{ name: 'PaxPacks' }],
  creator: 'PaxPacks',
  publisher: 'PaxPacks',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/nxt-pax-packs/logo.png',
    shortcut: '/nxt-pax-packs/logo.png',
    apple: '/nxt-pax-packs/logo.png',
  },
  manifest: '/nxt-pax-packs/site.webmanifest',
  openGraph: {
    title: 'PaxPacks | Bio Packaging Products for Businesses',
    description: 'Biodegradable bags, cups, mailers, and takeaway containers for retail, food service, ecommerce, and delivery teams.',
    url: 'https://vish-studio.github.io/nxt-pax-packs',
    siteName: 'PaxPacks',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'PaxPacks | Bio Packaging Products for Businesses',
    description: 'Biodegradable bags, cups, mailers, and takeaway containers for businesses replacing everyday plastic packaging.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
