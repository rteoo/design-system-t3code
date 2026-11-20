# T3 Code design system

- The repository root is the canonical showcase. Use the strict TypeScript, npm, Next.js 16 App Router, Tailwind 4, and owned shadcn/ui stack from `default-stacks.md`. The HTML pages and the nested Vite showcase are source references.
- The guide is `src/app/page.tsx` and the playground is `src/app/layouts/page.tsx`. Keep their shadcn/ui components and theme tokens shared.
- This content showcase builds to a static site. It has no database, authentication, payments, or persistent demo data. The export can be hosted as static assets and has no server runtime requirement.
- Use `npm ci`, `npm run dev`, `npm run typecheck`, `npm run lint`, and `npm run build` from the repository root.
