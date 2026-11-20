<h1 align="center">Teo T3 Code Design System</h1>

<p align="center">
  <a href="https://github.com/rteoo/design-system-t3code/releases/latest"><img src="https://img.shields.io/github/v/release/rteoo/design-system-t3code" alt="Latest release"></a>
  <a href="https://github.com/rteoo/design-system-t3code/stargazers"><img src="https://img.shields.io/github/stars/rteoo/design-system-t3code" alt="GitHub stars"></a>
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/rteoo/design-system-t3code" alt="License"></a>
</p>

**I'm not Theo, I'm Teô!**

This is a design system I ~~copied~~ *created* based on the default theme of [T3 Code](https://github.com/pingdotgg/t3code). I liked its quiet surfaces, compact controls, and clear visual hierarchy, so I documented them as a reference for building other interfaces.

**Light and dark themes · Blue accents · Interactive layouts**

**[View the showcase](https://rteoo.com/design-system-t3code/)**

| Light | Dark |
| --- | --- |
| ![Conversation layout in light mode](assets/preview-light.png) | ![Conversation layout in dark mode](assets/preview-dark.png) |

I've made a few small tweaks and opinionated choices for more consistent general use, including a clearer dark surface hierarchy, semantic status colors, and guidelines for components and layouts. The original blue accent is used for highlights, focus, and primary actions.

This is an independent project, not affiliated with Theo. It's not an official T3 Code design system or a pixel-perfect specification of every T3 Code screen.

It was reconstructed from T3 Code v0.1.8, after some UI improvements made by the T3 Code team.

## Run the merged showcase

The repository root is the Next.js 16 App Router project. The guide at `/` and the layout playground at `/layouts/` share Tailwind 4, the T3 theme, and the owned shadcn/ui components in `src/components/ui`.

Use Node 24 or newer and npm:

```sh
npm ci
npm run dev
```

Run `npm run lint`, `npm run typecheck`, and `npm run build` to verify changes. The production build writes a static site to `out/`. Set `T3CODE_BASE_PATH=/design-system-t3code` before building when hosting under that path.

The dev and build scripts use Next.js’s Webpack option because Turbopack’s CSS worker failed to start on the Windows development host. Recheck Turbopack on this host before switching the scripts back.

The conversation, review, and settings examples use in-memory demo state. The theme selection carries across the guide and layouts during client navigation.

## Explore the source references

- [Original HTML guide](index.html) and [layout playground](layouts.html) are source references for the merged routes.
- [Original React showcase](showcase/design-system-t3code) supplied interaction patterns and shadcn/ui components. Run the merged site from the repository root.
- [Design guidelines](DESIGN.md) — tokens, component rules, accessibility considerations, and the original T3 Code palette for reference.
- [Syntax reference](SYNTAX.md) — syntax highlighting and file preview details.

## Credits

Inspired by [T3 Code](https://github.com/pingdotgg/t3code) and its default theme. Interface icons use [Lucide](https://github.com/lucide-icons/lucide), the icon family configured for the shadcn/ui showcase.

<details>
<summary>Lucide license notice</summary>

ISC License

Copyright (c) 2026 Lucide Icons and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---

The following Lucide icons are derived from the Feather project:

airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out

The MIT License (MIT) (for the icons listed above)

Copyright (c) 2013-present Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details>
