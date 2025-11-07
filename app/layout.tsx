import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Majstor Naste Art - Contemporary Art Portfolio',
  description: 'Explore the contemporary art portfolio of Majstor Naste featuring paintings, sculptures, and mixed media works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
