import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
