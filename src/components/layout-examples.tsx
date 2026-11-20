"use client"

import { useRef, useState, type FormEvent } from 'react'
import { ArrowUp, CircleCheck, CircleX, FileCode, Info, MessageSquare, Settings2, TriangleAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const threads = [
  { name: 'Workspace notes', updated: 'Just now', question: 'Can you summarize the changes to the preview panel?', answer: 'The file name and display controls stay visible while the content remains the main focus.' },
  { name: 'Preview panel', updated: 'Yesterday', question: 'What changed in the preview panel?', answer: 'The file context stays visible while the content remains the main focus.' },
]

const statuses = {
  warning: { label: 'Needs review', icon: TriangleAlert, color: 'text-warning' },
  info: { label: 'In progress', icon: Info, color: 'text-info' },
  success: { label: 'Reviewed', icon: CircleCheck, color: 'text-success' },
  error: { label: 'Failed', icon: CircleX, color: 'text-destructive' },
}

const files = [
  { name: 'README.md', description: 'Project overview', status: 'warning', title: 'Project notes', summary: 'A lightweight place to keep the team aligned.', steps: ['Choose a workspace', 'Open a file to preview', 'Review the changes'] },
  { name: 'tokens.css', description: 'Color tokens', status: 'info', source: ':root {\n  --accent: #1b4ed8;\n  --success: #047857;\n  --info: #6d28d9;\n}' },
  { name: 'layout.md', description: 'Layout guidance', status: 'success', title: 'Layout', summary: 'Keep navigation visible beside the primary task. Use compact controls and clear status labels.' },
  { name: 'build.log', description: 'Build output', status: 'error', source: 'Build failed\n\nError: Unable to compile the project.\nCheck the build output and try again.' },
] as const

export function ConversationWorkspace({ workspaceName = 'Interface kit' }: { workspaceName?: string }) {
  const [thread, setThread] = useState(0)
  const [notes, setNotes] = useState<Record<number, string[]>>({})
  const [drafts, setDrafts] = useState<Record<number, string>>({})
  const draft = drafts[thread] ?? ''
  const active = threads[thread]

  function sendNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const note = draft.trim()
    if (!note) return
    setNotes(previous => ({ ...previous, [thread]: [...(previous[thread] ?? []), note] }))
    setDrafts(previous => ({ ...previous, [thread]: '' }))
  }

  return (
    <section aria-labelledby="conversation-title" className="min-w-0 overflow-hidden rounded-xl border bg-card">
      <header className="flex flex-wrap justify-between gap-2 border-b px-4 py-3 text-sm">
        <h2 id="conversation-title" className="font-semibold">Conversation workspace</h2>
        <p className="text-xs text-muted-foreground">Local notes</p>
      </header>
      <div className="grid min-w-0 sm:grid-cols-[12rem_minmax(0,1fr)]">
        <aside aria-label="Example threads" className="flex flex-wrap gap-1 border-b bg-sidebar p-3 sm:flex-col sm:border-r sm:border-b-0">
          <p className="w-full px-2 text-xs text-muted-foreground">Threads</p>
          {threads.map((item, index) => (
            <Button key={item.name} variant={thread === index ? 'secondary' : 'ghost'} aria-pressed={thread === index} onClick={() => setThread(index)} className="h-auto justify-start py-2 text-left">
              <span>{item.name}<small className="block text-muted-foreground">{item.updated}</small></span>
            </Button>
          ))}
        </aside>
        <div className="min-w-0">
          <div className="border-b px-4 py-3 text-sm wrap-anywhere text-muted-foreground">{workspaceName} / <strong className="text-foreground">{active.name}</strong></div>
          <div className="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-6 sm:px-8 sm:py-8">
            <div aria-live="polite" className="flex min-w-0 flex-col gap-4 text-sm leading-relaxed [overflow-wrap:anywhere]">
              <p className="max-w-[85%] self-end rounded-lg bg-muted p-3">{active.question}</p>
              <p><strong className="block">Assistant</strong>{active.answer}</p>
              {(notes[thread] ?? []).map((note, index) => <p key={index} className="max-w-[85%] self-end rounded-lg bg-muted p-3 whitespace-pre-wrap">{note}</p>)}
            </div>
            <form onSubmit={sendNote} className="flex flex-col gap-2 rounded-lg border border-input bg-background p-3 focus-within:ring-2 focus-within:ring-ring">
              <textarea className="min-h-12 w-full resize-y bg-transparent text-base outline-none focus-visible:outline-none md:text-sm" rows={2} value={draft} onChange={event => {
                const value = event.target.value
                setDrafts(previous => ({ ...previous, [thread]: value }))
              }} maxLength={1000} aria-label="Write a note" placeholder="Write a note for this example…" />
              <Button type="submit" size="icon-lg" className="self-end rounded-full" aria-label="Add note" disabled={!draft.trim()}><ArrowUp /></Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChangeReview({ compact, wrap, notifications }: { compact: boolean; wrap: boolean; notifications: boolean }) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState<string>(files[0].name)
  const [reviewed, setReviewed] = useState<ReadonlySet<string>>(() => new Set(['layout.md']))
  const [announcement, setAnnouncement] = useState('')
  const searchInput = useRef<HTMLInputElement>(null)
  const statusFilter = useRef<HTMLSelectElement>(null)
  const visible = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(search.trim().toLowerCase())
    const matchesStatus = filter === 'all' || reviewed.has(file.name) === (filter === 'reviewed')
    return matchesSearch && matchesStatus
  })
  const file = visible.find(item => item.name === selected) ?? visible[0]
  const status = file ? statuses[reviewed.has(file.name) ? 'success' : file.status] : undefined
  const StatusIcon = status?.icon
  const padding = compact ? 'p-3' : 'p-5'

  return (
    <section aria-labelledby="review-title" className="min-w-0 overflow-hidden rounded-xl border bg-card">
      <header className="flex flex-col gap-3 border-b p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="review-title" className="font-semibold">Change review</h2>
          <p role="status" className="text-xs text-muted-foreground tabular-nums">{visible.length} of {files.length} files</p>
        </div>
        <div className="grid items-end gap-3 sm:grid-cols-[minmax(0,18rem)_10rem]">
          <Field>
            <FieldLabel htmlFor="file-search">Find a file</FieldLabel>
            <Input ref={searchInput} id="file-search" type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search files" />
          </Field>
          <Field>
            <FieldLabel htmlFor="review-filter">Status</FieldLabel>
            <select ref={statusFilter} id="review-filter" value={filter} onChange={event => setFilter(event.target.value)} className="min-h-8 w-full rounded-lg border border-input bg-card px-2.5 text-base md:text-sm">
              <option value="all">All files</option>
              <option value="open">Needs review</option>
              <option value="reviewed">Reviewed</option>
            </select>
          </Field>
        </div>
      </header>
      <div className={cn('grid', file && 'sm:grid-cols-[13rem_minmax(0,1fr)]')}>
        {file && <aside aria-label="Files to review" className="flex flex-wrap gap-1 border-b bg-sidebar p-3 sm:flex-col sm:border-r sm:border-b-0">
          {visible.map(item => (
            <Button key={item.name} variant={item.name === file?.name ? 'secondary' : 'ghost'} aria-pressed={item.name === file?.name} onClick={() => setSelected(item.name)} className="h-auto justify-start py-2 text-left">
              <FileCode data-icon="inline-start" />
              <span>{item.name}<small className="block text-muted-foreground">{item.description}</small></span>
            </Button>
          ))}
        </aside>}
        {file && status && StatusIcon ? (
          <div className="flex min-w-0 flex-col">
            <div className={cn('flex flex-wrap justify-between gap-3 border-b', padding)}>
              <div>
                <h3 className="font-semibold">{file.name}</h3>
                <p className={cn('flex items-center gap-1.5 text-sm', status.color)}><StatusIcon className="size-4" />{status.label}</p>
              </div>
            </div>
            {'source' in file ? (
              <pre className={cn('min-h-40 overflow-auto text-sm', padding, wrap && 'whitespace-pre-wrap wrap-anywhere')}><code>{file.source}</code></pre>
            ) : (
              <Tabs defaultValue="preview" className={cn('min-h-40', padding)}>
                <TabsList aria-label="File display"><TabsTrigger value="preview">Preview</TabsTrigger><TabsTrigger value="source">Source</TabsTrigger></TabsList>
                <TabsContent value="preview" className="flex flex-col gap-2 py-3 text-sm">
                  <h4 className="font-semibold">{file.title}</h4>
                  <p>{file.summary}</p>
                  {'steps' in file && <ul className="list-disc pl-5">{file.steps.map(step => <li key={step}>{step}</li>)}</ul>}
                </TabsContent>
                <TabsContent value="source" className="py-3">
                  <pre className={cn('overflow-auto text-sm', wrap && 'whitespace-pre-wrap wrap-anywhere')}><code>{[`# ${file.title}`, file.summary, ...('steps' in file ? file.steps.map(step => `- ${step}`) : [])].join('\n\n')}</code></pre>
                </TabsContent>
              </Tabs>
            )}
            <div className={cn('mt-auto flex flex-wrap items-center justify-between gap-2 border-t', padding)}>
              <p className="text-xs text-muted-foreground">Example data only</p>
              <Button variant="outline" disabled={reviewed.has(file.name) || file.status === 'error'} onClick={() => {
                if (filter === 'open') statusFilter.current?.focus()
                setReviewed(previous => new Set([...previous, file.name]))
                if (notifications) setAnnouncement(`${file.name} marked reviewed.`)
              }}>
                {reviewed.has(file.name) ? 'Reviewed' : file.status === 'error' ? 'Resolve issue first' : 'Mark reviewed'}
              </Button>
            </div>
          </div>
        ) : (
          <div className={cn('flex min-h-40 flex-col items-start justify-center gap-3', padding)}>
            <p className="text-sm text-muted-foreground">No files match your filters.</p>
            <Button variant="outline" onClick={() => { searchInput.current?.focus(); setSearch(''); setFilter('all') }}>Clear filters</Button>
          </div>
        )}
      </div>
      <p role="status" className="sr-only">{notifications ? announcement : ''}</p>
    </section>
  )
}

export function LayoutExamples() {
  const [preferences, setPreferences] = useState({ name: 'Interface kit', notifications: true, compact: false, wrap: true })
  const [draft, setDraft] = useState(preferences)
  const [notice, setNotice] = useState('')
  const dirty = draft.name !== preferences.name || draft.notifications !== preferences.notifications || draft.compact !== preferences.compact || draft.wrap !== preferences.wrap

  function saveSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = draft.name.trim()
    if (!name || !dirty) return
    const next = { ...draft, name }
    setPreferences(next)
    setDraft(next)
    setNotice('Settings saved for this example.')
  }

  return (
    <Tabs defaultValue="conversation" className="min-w-0 gap-4">
      <TabsList aria-label="Layout examples" variant="line" className="group-data-[orientation=horizontal]/tabs:h-auto max-w-full flex-wrap justify-start border-b pb-1">
        <TabsTrigger value="conversation" className="min-h-9 px-2 sm:px-3"><MessageSquare className="hidden sm:block" />Conversation</TabsTrigger>
        <TabsTrigger value="review" className="min-h-9 px-2 sm:px-3"><FileCode className="hidden sm:block" />Change review</TabsTrigger>
        <TabsTrigger value="settings" className="min-h-9 px-2 sm:px-3"><Settings2 className="hidden sm:block" />Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="conversation" keepMounted><ConversationWorkspace workspaceName={preferences.name} /></TabsContent>
      <TabsContent value="review" keepMounted><ChangeReview compact={preferences.compact} wrap={preferences.wrap} notifications={preferences.notifications} /></TabsContent>
      <TabsContent value="settings" className="rounded-xl border bg-card p-5 sm:p-8">
        <form onSubmit={saveSettings} className="grid gap-6 md:grid-cols-[1fr_1.6fr] md:gap-10">
          <div>
            <h2 className="font-semibold">Workspace settings</h2>
            <p className="mt-1 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">These preferences apply to the conversation and change review examples on this page.</p>
          </div>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="settings-name">Workspace name</FieldLabel>
              <Input id="settings-name" value={draft.name} onChange={event => { setDraft({ ...draft, name: event.target.value }); setNotice('') }} maxLength={80} required />
            </Field>
            <div className="divide-y rounded-lg border px-3 sm:px-4">
              {([
                ['notifications', 'Review announcements', 'Announce review confirmations to screen readers.'],
                ['wrap', 'Wrap source lines', 'Keep long lines within the file preview.'],
                ['compact', 'Compact review layout', 'Reduce spacing in the change review example.'],
              ] as const).map(([key, title, description]) => (
                <Field key={key} orientation="horizontal" className="items-center justify-between py-3">
                  <div>
                    <FieldLabel htmlFor={`setting-${key}`}>{title}</FieldLabel>
                    <FieldDescription id={`setting-${key}-help`}>{description}</FieldDescription>
                  </div>
                  <Switch id={`setting-${key}`} aria-describedby={`setting-${key}-help`} checked={draft[key]} onCheckedChange={value => { setDraft({ ...draft, [key]: value }); setNotice('') }} />
                </Field>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4">
              <p role="status" className="text-sm text-muted-foreground">{notice || (dirty ? 'Unsaved changes' : 'Settings reset when you leave this page.')}</p>
              <Button type="submit" disabled={!dirty || !draft.name.trim()}>Save settings</Button>
            </div>
          </FieldGroup>
        </form>
      </TabsContent>
    </Tabs>
  )
}
