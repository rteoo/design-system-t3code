"use client"

import { createContext, useContext, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'

const ThemeContext = createContext({ dark: true, toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true)

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    setDark(next)
  }

  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>
}

export function SiteHeader({ current }: { current: 'guide' | 'layouts' }) {
  const { dark, toggle } = useContext(ThemeContext)
  const ThemeIcon = dark ? Sun : Moon

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-card focus:p-3">
        Skip to content
      </a>
      <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b py-4">
        <Link href="/" className="text-sm font-semibold">Teô<span className="text-primary">.</span> / T3 Code</Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-2">
          <Link href="/" data-slot="button" className={buttonVariants({ variant: current === 'guide' ? 'secondary' : 'ghost' })} aria-current={current === 'guide' ? 'page' : undefined}>Guide</Link>
          <Link href="/layouts/" prefetch={false} data-slot="button" className={buttonVariants({ variant: current === 'layouts' ? 'secondary' : 'ghost' })} aria-current={current === 'layouts' ? 'page' : undefined}>Layouts</Link>
          <Button variant="outline" className="min-w-18" onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}><ThemeIcon data-icon="inline-start" />{dark ? 'Light' : 'Dark'}</Button>
        </nav>
      </header>
    </>
  )
}
