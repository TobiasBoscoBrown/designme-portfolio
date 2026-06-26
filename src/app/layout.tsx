import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webflow & Design Portfolio | Premium Web Development',
  description: 'Expert Webflow developer delivering premium, responsive websites for tech startups. Performance-optimized, pixel-perfect, and built to convert.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise-bg">{children}</body>
    </html>
  )
}
