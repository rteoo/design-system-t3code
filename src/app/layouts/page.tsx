import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { LayoutExamples } from '@/components/layout-examples'

export const metadata: Metadata = { title: 'Layout playground' }

export default function LayoutsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <SiteHeader current="layouts" />
      <main id="main" tabIndex={-1} className="flex flex-col gap-6 py-8 sm:gap-8 sm:py-12">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Layouts in action.</h1>
          <p className="max-w-prose leading-relaxed text-muted-foreground">Try the conversation, change review, and settings layouts. Demo changes reset when you leave this page.</p>
        </header>
        <LayoutExamples />
      </main>
    </div>
  )
}
