import Link from 'next/link'
import { ComponentGuide } from '@/components/component-guide'
import { ConversationWorkspace } from '@/components/layout-examples'
import { SiteHeader } from '@/components/site-header'
import { GuideActions, SourceLink } from '@/components/site-links'

const repository = 'https://github.com/rteoo/design-system-t3code'

export default function GuidePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <SiteHeader current="guide" />
      <main id="main" tabIndex={-1} className="flex flex-col gap-12 pb-16 sm:gap-16">
        <div id="overview" className="flex flex-col gap-8 sm:gap-10">
          <section className="grid items-end gap-5 pt-10 sm:pt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
            <h1 className="max-w-[20ch] text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.045em] text-pretty">The T3 Code look, made to build with.</h1>
            <div className="flex flex-col gap-5">
              <p className="max-w-[40ch] text-base leading-relaxed text-muted-foreground sm:text-lg">A practical design system inspired by T3 Code’s default appearance, with a few small opinions of my own.</p>
              <GuideActions />
            </div>
          </section>
          <ConversationWorkspace />
        </div>
        <div className="grid min-w-0 gap-8 border-t pt-8 md:grid-cols-[10rem_minmax(0,1fr)]">
          <nav aria-label="Guide sections" className="flex flex-wrap gap-1 self-start text-sm md:sticky md:top-8 md:flex-col">
            {[
              ['color', 'Color & surfaces'], ['components', 'Components'], ['type', 'Typography'],
              ['layouts', 'Layouts'], ['code', 'Code & syntax'], ['previews', 'File previews'],
              ['accessibility', 'Accessibility'],
            ].map(([id, label]) => (
              <a key={id} href={'#' + id} data-slot="nav-link" className="inline-flex items-center rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground">{label}</a>
            ))}
          </nav>
          <div className="flex min-w-0 flex-col gap-12">
            <ComponentGuide />
            <section id="type" className="scroll-mt-6 border-t pt-6">
              <h2 className="text-2xl font-semibold tracking-tight">Type &amp; rhythm</h2>
              <p className="mt-2 text-muted-foreground">Inter and system sans-serif keep the interface readable at compact sizes. Monospace distinguishes paths, commands, and code.</p>
              <dl className="mt-4 divide-y overflow-hidden rounded-lg border bg-card">
                <div className="grid gap-1 p-4 sm:grid-cols-[7rem_1fr] sm:items-baseline"><dt className="text-xs text-muted-foreground">Heading</dt><dd className="text-xl font-semibold tracking-tight">Workspace notes</dd></div>
                <div className="grid gap-1 p-4 sm:grid-cols-[7rem_1fr] sm:items-baseline"><dt className="text-xs text-muted-foreground">Interface</dt><dd className="text-sm">Choose a file to review.</dd></div>
                <div className="grid gap-1 p-4 sm:grid-cols-[7rem_1fr] sm:items-baseline"><dt className="text-xs text-muted-foreground">Code</dt><dd className="wrap-anywhere"><code className="text-sm">src/components/ui/button.tsx</code></dd></div>
              </dl>
            </section>
            <section id="layouts" className="scroll-mt-6 border-t pt-6">
              <h2 className="text-2xl font-semibold tracking-tight">Layouts in context</h2>
              <p className="mt-2 text-muted-foreground">Keep navigation, the selected item, and task feedback visible in conversation, change review, and settings.</p>
              <Link className="mt-3 inline-block underline" href="/layouts/" prefetch={false}>Open the layout playground</Link>
            </section>
            <section id="code" className="scroll-mt-6 border-t pt-6">
              <h2 className="text-2xl font-semibold tracking-tight">Code &amp; syntax</h2>
              <p className="mt-2 text-muted-foreground">Use distinct syntax colors for keywords, strings, constants, and comments while keeping code legible in both themes.</p>
              <pre className="mt-4 overflow-auto rounded-lg border bg-card p-4 text-sm"><code><span className="text-info">const</span>{' workspace = '}<span className="text-success">{'"Interface kit"'}</span>{'\n'}<span className="text-muted-foreground">{'// Keep the file and its context together.'}</span></code></pre>
              <div className="mt-4"><SourceLink href={repository + '/blob/main/SYNTAX.md'}>Read the syntax reference</SourceLink></div>
            </section>
            <section id="previews" className="scroll-mt-6 border-t pt-6">
              <h2 className="text-2xl font-semibold tracking-tight">File previews</h2>
              <p className="mt-2 text-muted-foreground">Keep the filename, review status, and source or preview controls visible alongside the file.</p>
            </section>
            <section id="accessibility" className="scroll-mt-6 border-t pt-6">
              <h2 className="text-2xl font-semibold tracking-tight">Accessibility</h2>
              <p className="mt-2 text-muted-foreground">Keep keyboard focus visible and pair status color with a label and an icon. The shared tokens include larger targets for coarse pointers and respect reduced motion.</p>
            </section>
          </div>
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t py-6 text-sm text-muted-foreground">
        <p>Made by Teô. An independent reference inspired by T3 Code.</p>
        <SourceLink href={repository}>Source on GitHub</SourceLink>
      </footer>
    </div>
  )
}
