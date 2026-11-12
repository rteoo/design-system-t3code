import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen, within } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { hydrateRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import App from './App'

afterEach(() => { cleanup(); document.documentElement.classList.remove('dark') })

describe('showcase', () => {
  it('keeps notes in the selected example thread', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Preview panel/ }))
    await user.type(screen.getByRole('textbox', { name: 'Write a note' }), 'A local note')
    await user.click(screen.getByRole('button', { name: 'Add note' }))
    expect(screen.getByText('A local note')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Workspace notes/ }))
    expect(screen.queryByText('A local note')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Preview panel/ }))
    expect(screen.getByText('A local note')).toBeInTheDocument()
  })

  it('switches the token theme and renders the supplied input', async () => {
    const user = userEvent.setup()
    document.documentElement.classList.add('dark')
    render(<App />)
    expect(screen.getByRole('textbox', { name: 'Project name' })).toHaveValue('Workspace notes')
    await user.click(screen.getByRole('button', { name: /Light/ }))
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(screen.getByRole('button', { name: /Dark/ }))
    expect(document.documentElement).toHaveClass('dark')
  })

  it('opens and closes the dialog in the overlay examples', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Dialogs & menus' }))
    await user.click(screen.getByRole('button', { name: /New workspace/ }))
    expect(await screen.findByRole('dialog', { name: 'Create a workspace' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the workspace menu and handles an action', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Dialogs & menus' }))
    await user.click(screen.getByRole('button', { name: /Workspace actions/ }))
    await user.click(await screen.findByRole('menuitem', { name: /Settings/ }))
    expect(screen.getByText('Workspace settings selected.')).toBeInTheDocument()
  })

  it('opens files and keeps their review state', async () => {
    const user = userEvent.setup()
    render(<App />)
    const review = screen.getByRole('region', { name: 'Change review' })
    await user.click(within(review).getByRole('button', { name: /tokens.css/ }))
    expect(within(review).getByText(/--accent: #1b4ed8/)).toBeInTheDocument()
    expect(within(review).getByText('In progress')).toHaveClass('info')
    await user.click(within(review).getByRole('button', { name: /build.log/ }))
    expect(within(review).getByText('Failed')).toHaveClass('error')
    expect(within(review).getByText(/Unable to compile/)).toBeInTheDocument()
    expect(within(review).getByRole('button', { name: 'Resolve issue first' })).toBeDisabled()
    await user.click(within(review).getByRole('button', { name: /tokens.css/ }))
    expect(within(review).getByText('In progress')).toBeInTheDocument()
    await user.click(within(review).getByRole('button', { name: 'Mark reviewed' }))
    expect(within(review).getByRole('button', { name: 'Reviewed' })).toBeDisabled()
    await user.click(within(review).getByRole('button', { name: /README.md/ }))
    expect(within(review).getByRole('button', { name: 'Mark reviewed' })).toBeEnabled()
    await user.click(within(review).getByRole('button', { name: /tokens.css/ }))
    expect(within(review).getByRole('button', { name: 'Reviewed' })).toBeDisabled()
  })

  it('edits and saves session-only workspace settings', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Settings' }))
    const name = screen.getByRole('textbox', { name: 'Workspace name' })
    await user.clear(name)
    await user.type(name, 'Design studio')
    await user.click(screen.getByRole('checkbox', { name: /Review notifications/ }))
    await user.click(screen.getByRole('button', { name: 'Save settings' }))
    expect(screen.getByText('Settings saved for this example.')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: 'Change review' }))
    await user.click(screen.getByRole('tab', { name: 'Settings' }))
    expect(screen.getByRole('textbox', { name: 'Workspace name' })).toHaveValue('Design studio')
    expect(screen.getByRole('checkbox', { name: /Review notifications/ })).not.toBeChecked()
  })

  it('toggles compact spacing in the review layout', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Settings' }))
    const compact = screen.getByRole('switch', { name: 'Compact review layout' })
    expect(compact).not.toBeChecked()
    await user.click(compact)
    expect(compact).toBeChecked()
    await user.click(screen.getByRole('tab', { name: 'Change review' }))
    expect(screen.getByRole('region', { name: 'Change review' }).querySelector('.review-layout')).toHaveClass('is-compact')
    await user.click(screen.getByRole('tab', { name: 'Settings' }))
    await user.click(screen.getByRole('switch', { name: 'Compact review layout' }))
    await user.click(screen.getByRole('tab', { name: 'Change review' }))
    expect(screen.getByRole('region', { name: 'Change review' }).querySelector('.review-layout')).not.toHaveClass('is-compact')
  })

  it('hydrates the pre-rendered showcase without a mismatch', async () => {
    const container = document.createElement('div')
    document.body.append(container)
    container.innerHTML = renderToString(<App />)
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    let root: ReturnType<typeof hydrateRoot> | undefined
    try {
      await act(async () => { root = hydrateRoot(container, <StrictMode><App /></StrictMode>) })
      expect(error).not.toHaveBeenCalled()
    } finally {
      await act(async () => { root?.unmount() })
      error.mockRestore()
      container.remove()
    }
  })
})
