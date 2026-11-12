import { readFile, writeFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const markup = renderToString(createElement(App))
  const path = new URL('../dist/index.html', import.meta.url)
  const html = await readFile(path, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error('Missing root element in built page')
  await writeFile(path, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`))
} finally {
  await server.close()
}
