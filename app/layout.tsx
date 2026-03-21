import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/GraphikLC-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GraphikLC-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-graphik',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'EASA Ukraine',
  description:
    'EASA Ukraine is a non-profit independent organization that promotes informal peer-to-peer education in the field of architecture and urban planning. EASA Ukraine is a national chamber of the European Architecture Student Assembly (EASA).',
  keywords: 'EASA, architecture, students, festival, workshop, university, Ukraine',
  openGraph: {
    title: 'EASA Ukraine',
    siteName: 'EASA Ukraine',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icons/icon-57.png', sizes: '57x57' },
      { url: '/icons/icon-72.png', sizes: '72x72' },
      { url: '/icons/icon-114.png', sizes: '114x114' },
      { url: '/icons/icon-144.png', sizes: '144x144' },
    ],
    apple: [
      { url: '/icons/icon-57.png', sizes: '57x57' },
      { url: '/icons/icon-72.png', sizes: '72x72' },
      { url: '/icons/icon-114.png', sizes: '114x114' },
      { url: '/icons/icon-144.png', sizes: '144x144' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${graphik.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
