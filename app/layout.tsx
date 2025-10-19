import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Analytics Dashboard',
  description: 'A modern analytics dashboard built with Next.js and Tailwind CSS',
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