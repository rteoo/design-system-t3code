import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/site-header'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Teô T3 Code Design System', template: '%s · Teô T3 Code Design System' },
  description: 'An independent design-system guide inspired by T3 Code, with interactive layouts and shadcn/ui components.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
