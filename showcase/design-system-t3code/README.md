# T3 Code design-system showcase

This React showcase uses shadcn/ui components based on Base UI, the project’s light and dark tokens, and Hugeicons. The design-system guide lives outside this package.

## Develop

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm test
npm run lint
npm run build
```

The build writes a pre-rendered, hydratable page and assets to `dist/`, with paths rooted at `/design-system-t3code/`. Deploy the contents of `dist/` at that path. The parent `showcase/robots.txt` and `showcase/sitemap.xml` are root-level drafts; reconcile them with the host site before deployment.

The workspace uses in-memory example data. Notes and settings are not sent or persisted.
