"use client"

import { useState, type ReactNode } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckIcon, ChevronRightIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon, CircleXIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Panel({ title, description, children, id, wide = false }: {
  title: string; description: string; children: ReactNode; id: string; wide?: boolean
}) {
  return (
    <section id={id} aria-labelledby={id + '-title'} className={cn('min-w-0 scroll-mt-6 rounded-xl border bg-card text-card-foreground', wide && 'md:col-span-2')}>
      <header className="flex flex-col gap-1 border-b px-5 py-4">
        <h3 id={id + '-title'} className="text-sm font-semibold">{title}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
      </header>
      <div className="flex min-h-36 flex-col gap-4 p-5">{children}</div>
    </section>
  )
}

export function ComponentGuide() {
  const [name, setName] = useState('Workspace notes')
  const [draft, setDraft] = useState(name)
  const [open, setOpen] = useState(false)
  const [action, setAction] = useState('Choose an example action.')
  const [buttonStatus, setButtonStatus] = useState('Ready to save.')

  function saveName() {
    if (!draft.trim()) return
    setName(draft.trim())
    setOpen(false)
  }

  return (
    <div className="flex flex-col gap-8" id="foundations">
      <section id="color" aria-labelledby="color-heading" className="flex scroll-mt-6 flex-col gap-4">
        <h2 id="color-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Color &amp; surfaces</h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">Quiet surfaces. Compact controls. Blue accents. Neutral navigation and selected surfaces. A shared vocabulary for projects, threads, and focused work.</p>
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Canvas', 'bg-background'], ['Surface', 'bg-card'],
            ['Sidebar', 'bg-sidebar'], ['Action', 'bg-primary'],
            ['Navigation', 'bg-link'], ['Selection', 'bg-selection'],
          ].map(([label, color]) => (
            <div key={label} className="overflow-hidden rounded-lg border">
              <div aria-hidden="true" className={cn('h-14 border-b', color)} />
              <dt className="px-3 pt-2 text-xs font-medium">{label}</dt>
              <dd className="px-3 pb-3 pt-1 font-mono text-[10px] text-muted-foreground">{color}</dd>
            </div>
          ))}
        </dl>
      </section>
      <div id="components" className="grid scroll-mt-6 grid-cols-1 gap-4 md:grid-cols-2">
        <h2 className="text-2xl font-semibold tracking-tight md:col-span-2">Components</h2>
        <Panel title="Buttons" description="One primary action; neutral alternatives." id="buttons">
          <div className="flex flex-wrap items-center gap-2">
            <Button onClick={() => setButtonStatus('Changes saved for this example.')}><CheckIcon data-icon="inline-start" />Save changes</Button>
            <Button variant="outline" onClick={() => setButtonStatus('Secondary action selected.')}>Secondary</Button>
            <Button variant="ghost" onClick={() => setButtonStatus('Quiet action selected.')}>Quiet action</Button>
            <Button disabled>Unavailable</Button>
            <a href="#tabs" data-slot="button" className={buttonVariants({ variant: 'link' })}>View project tabs</a>
          </div>
          <p className="text-xs text-muted-foreground" role="status">{buttonStatus}</p>
        </Panel>
        <Panel title="Inputs" description="Persistent labels and associated help text." id="inputs">
          <FieldGroup><Field>
            <FieldLabel htmlFor="project-name">Project name</FieldLabel>
            <Input id="project-name" aria-describedby="project-name-help" value={name} onChange={e => setName(e.target.value)} />
            <FieldDescription id="project-name-help">Use a name you can recognize in the sidebar.</FieldDescription>
          </Field></FieldGroup>
        </Panel>
        <Panel title="Dialogs" description="A focused task with a clear way back." id="dialogs">
          <Dialog open={open} onOpenChange={next => { if (next) setDraft(name); setOpen(next) }}>
            <DialogTrigger render={<Button variant="outline" />}>Rename project</DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Rename project</DialogTitle><DialogDescription>Choose a name that makes this project easy to find.</DialogDescription></DialogHeader>
              <form id="rename-project" onSubmit={e => { e.preventDefault(); saveName() }}>
                <FieldGroup><Field>
                  <FieldLabel htmlFor="dialog-name">Project name</FieldLabel>
                  <Input id="dialog-name" aria-describedby="dialog-name-help" value={draft} onChange={e => setDraft(e.target.value)} required />
                  <FieldDescription id="dialog-name-help">A project name cannot be blank.</FieldDescription>
                </Field></FieldGroup>
              </form>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
                <Button type="submit" form="rename-project" disabled={!draft.trim()}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <p className="text-xs leading-relaxed text-muted-foreground">Escape cancels. Enter saves. Closing returns focus to the trigger.</p>
        </Panel>
        <Panel title="Dropdown menus" description="Related actions, grouped in context." id="menus">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>Actions<ChevronRightIcon data-icon="inline-end" /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Project examples</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setAction('Duplicate selected for this example.')}>Duplicate</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setAction('Export selected for this example.')}>Export</DropdownMenuItem>
                <DropdownMenuItem variant="destructive" onClick={() => setAction('Archive selected for this example.')}>Archive</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <p className="text-xs text-muted-foreground" role="status">{action}</p>
        </Panel>
        <Panel title="Tabs" description="Switch views while keeping the project in context." id="tabs" wide>
          <Tabs defaultValue="preview">
            <TabsList aria-label="Project views"><TabsTrigger value="preview">Preview</TabsTrigger><TabsTrigger value="source">Source</TabsTrigger><TabsTrigger value="activity">Activity</TabsTrigger></TabsList>
            <TabsContent value="preview" className="py-3"><p className="mb-2 text-xs text-muted-foreground">Current project</p><strong className="break-words">{name || 'Untitled project'}</strong></TabsContent>
            <TabsContent value="source" className="overflow-x-auto py-3"><code className="text-xs">const workspace = {JSON.stringify(name)}</code></TabsContent>
            <TabsContent value="activity" className="py-3"><p className="text-xs text-muted-foreground">No recent activity in this example.</p></TabsContent>
          </Tabs>
        </Panel>
      </div>
      <div className="flex flex-col gap-4 border-t pt-5">
        <ul aria-label="Status colors" className="flex flex-wrap gap-x-6 gap-y-3 text-xs">
          <li className="flex items-center gap-1.5 text-success"><CircleCheckIcon aria-hidden="true" className="size-4" />Completed</li><li className="flex items-center gap-1.5 text-info"><InfoIcon aria-hidden="true" className="size-4" />In progress</li>
          <li className="flex items-center gap-1.5 text-warning"><TriangleAlertIcon aria-hidden="true" className="size-4" />Needs review</li><li className="flex items-center gap-1.5 text-destructive"><CircleXIcon aria-hidden="true" className="size-4" />Failed</li>
        </ul>
    </div>
    </div>
  )
}
