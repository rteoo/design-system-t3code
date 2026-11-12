# DESIGN.md — T3 Code Default Appearance

> Implementation reference reconstructed from T3 Code 0.1.8, build commit `bf469bb19669`, inspected 2026-11-11. This is an independent reference, not an official T3 Tools design specification.

## 1. Design intent

T3 Code is a workspace for coding agents: users switch between projects, threads, code, terminals, and settings. The interface prioritizes sustained work and quick scanning. **Inferred principles:** quiet neutral planes, compact information density, blue highlights, focus indicators, and primary buttons, and context-rich controls rather than decorative branding. Light and dark share the same hierarchy; follow the system appearance unless a user chooses otherwise.

## 2. Semantic tokens

**Selected dark sidebar variation (2026-11-11):** For the HTML guide and workspace examples, use canvas `#000000`, sidebar `#0a0a0a`, and selected sidebar row `#1e1e1e`, matching the user-provided `t3-code-copy` theme. The source palette tables below continue to describe the installed default theme and must not be silently rewritten as this variation.

### Selected accent and status colors

These user-selected colors are the active design decisions for the guide and new implementations. The accent and primary button fills match the historical T3 Code accent below; status choices may differ. Keep syntax-highlighting colors in `SYNTAX.md` independent.

| Role | Light | Dark | Usage |
|---|---|---|---|
| `accent` / `focus` | `#1b4ed8` | `#346bf1` | Links, highlights and focus indicators |
| `button.primary.background` | `#1b4ed8` | `#346bf1` | Primary action fill |
| `button.primary.hover` | `#3160db` | `#3061d9` | Hovered primary action fill |
| `button.primary.foreground` | `#ffffff` | `#ffffff` | Text and icons on primary action fill |
| `status.success` | `#047857` | `#34d399` | Completed, connected and healthy states |
| `status.info` | `#6d28d9` | `#a78bfa` | Informational, queued or in-progress states |

Use status labels or icons in addition to color. Choose status color by meaning, not by workflow stage:

| Status role | Meaning | Examples |
|---|---|---|
| Success / green | Completed or healthy | Reviewed, done, connected |
| Information / violet | Neutral state without a required intervention | In progress, queued |
| Warning / amber | Attention or a decision is required | Needs review, action required |
| Error / red | A failure has occurred or an operation cannot proceed | Failed, unable to connect |

Use warning foreground `#bb4d00` light / `#ffb900` dark and error foreground `#c10007` light / `#ff6467` dark. Check all text and UI boundaries on their actual surfaces. Primary button text is white in both modes. White on dark `#346bf1` is 4.65:1, leaving little margin above the 4.5:1 normal-text target.

### Original T3 Code reference palette

The values below are the bundled T3 Code base palette, corroborated by the Create theme editor's advanced controls. Runtime contrast, opacity, custom themes, and compositing can alter rendered values. `message.surface` is an exception: the built-in default adds a separate override; the theme editor draft shows `#f4f4f5` / `#141414`. Preserve the default override shown below when reproducing the built-in appearance, and check the actual rendered surface when transparency or color mixing applies.

| Semantic role | Light | Dark | Purpose |
|---|---|---|---|
| `canvas` | `#fcfcfc` | `#000000` | Main workspace background |
| `chrome`, `toolbar` | `#fcfcfc` | `#0a0a0a` | Frame and toolbar planes |
| `surface` | `#ffffff` | `#111111` | Cards and grouped content |
| `surface.raised` | `#fcfcfc` | `#111111` | Raised surfaces |
| `surface.overlay` | `#ffffff` | `#111111` | Menus and dialogs; actual opacity may vary |
| `text.primary` | `#27272a` | `#f5f5f5` | Main text |
| `text.muted` | `#71717b` | `#818181` | Secondary copy, placeholders and muted icons |
| `border` | `#e4e4e7` | `#191919` | Subtle separators and outlines |
| `input` | `#d4d4d8` | `#1e1e1e` | Input boundary color; verify actual control treatment |
| `focus`, `accent` | `#1b4ed8` | `#346bf1` | Focus and primary action signal |
| `accent.foreground` | `#ffffff` | `#ffffff` | Text on blue action |
| `secondary` | `#fafafa` | `#111111` | Quiet controls and supporting planes |
| `highlight.surface` | `#f4f4f5` | `#141414` | Hover and highlighted neutral surface |
| `message.surface` | `#ebebed` | `#1e1e1e` | Built-in default message treatment; see compositing note above |
| `message.text` | `#27272a` | `#f5f5f5` | Message text |
| `message.action` | `#1b4ed8` | `#346bf1` | Message action; hover `#3160db` / `#3061d9` |
| `code.surface` | `#ffffff` | `#111111` | Code block background |
| `sidebar` | `#fafafa` | `#000000` | Navigation background |
| `sidebar.control` | `#f4f4f5` | `#0a0a0a` | Sidebar controls |
| `sidebar.hover` | `#fcfcfc` | `#131313` | Hovered row |
| `sidebar.active` | `#ffffff` | `#1a1b1b` | Active row |
| `sidebar.selected` | `#ffffff` | `#111111` | Selected row |
| `sidebar.text` | `#27272a` | `#f1f3f7` | Sidebar primary text |
| `sidebar.text.muted` | `#71717b` | `#a3a3a3` | Sidebar supporting text |
| `terminal.background` | `#fcfcfc` | `#0a0a0a` | Terminal plane |
| `terminal.text` | `#27272a` | `#f5f5f5` | Terminal foreground |
| `terminal.cursor` | `#26384e` | `#b4cbff` | Terminal cursor |
| `terminal.selection` | `#d0d6dd` | `#343a47` | Selected terminal content |
| `search.match` | `#ffde8b` | `#8c6c1f` | Other search matches; foreground `#21180a` / `#f5f5f5` |
| `search.current` | `#eea52b` | `#eea52b` | Current match; foreground `#21180a` |
| `error` | `#fb2c36` | `#fb414a` | Error signal, not automatically safe as text |
| `error.text` / `error.surface` | `#c10007` / `#fcebec` | `#ff6467` / `#301214` | Readable error messaging |
| `warning` | `#fe9a00` | `#fe9a00` | Warning signal, not automatically safe as text |
| `warning.text` / `warning.surface` | `#bb4d00` / `#fcf4e8` | `#ffb900` / `#312108` | Readable warning messaging |
| `update.text` / `update.surface` | `#1b4ed8` / `#e0e6f7` | `#51a2ff` / `#121b34` | Informational update state; validate pairing in context |

### Color hierarchy

Organize the guide by purpose: **Surfaces** (canvas, sidebar, panels, message and terminal), **Text & boundaries** (text, dividers, inputs, selection), **Action** (accent and focus), and **Status** (success, informational, warning and error). Use each status with a label or icon. The simplified HTML color table shows the active light and dark design-system values. All 61 unaltered historical T3 source roles are recorded below.

### Complete source palette

Every named entry in the bundled `Pt` (light) and `Ft` (dark) base palette is listed below, using the source names to make auditing and implementation possible. These are base palette definitions, not a claim that every rendered pixel uses a flat opaque color. Built-in default overrides are listed separately immediately after the table. Syntax-highlighting themes and per-component utility colors are separate systems and are not included in this palette.

| Source role | Light | Dark |
|---|---|---|
| `searchMatchBackground` | `#ffde8b` | `#8c6c1f` |
| `searchMatchForeground` | `#21180a` | `#f5f5f5` |
| `searchMatchActiveBackground` | `#eea52b` | `#eea52b` |
| `searchMatchActiveForeground` | `#21180a` | `#21180a` |
| `canvas` | `#fcfcfc` | `#0a0a0a` |
| `chrome` | `#fcfcfc` | `#0a0a0a` |
| `toolbar` | `#fcfcfc` | `#0a0a0a` |
| `toolbarForeground` | `#27272a` | `#f5f5f5` |
| `toolbarBorder` | `#e4e4e7` | `#191919` |
| `toolbarControl` | `#ffffff` | `#111111` |
| `toolbarControlForeground` | `#27272a` | `#f5f5f5` |
| `toolbarControlHover` | `#f4f4f5` | `#141414` |
| `surface` | `#ffffff` | `#111111` |
| `surfaceRaised` | `#fcfcfc` | `#111111` |
| `surfaceOverlay` | `#ffffff` | `#111111` |
| `text` | `#27272a` | `#f5f5f5` |
| `textMuted` | `#71717b` | `#818181` |
| `border` | `#e4e4e7` | `#191919` |
| `input` | `#d4d4d8` | `#1e1e1e` |
| `focus` | `#1b4ed8` | `#346bf1` |
| `accent` | `#1b4ed8` | `#346bf1` |
| `accentForeground` | `#ffffff` | `#ffffff` |
| `secondary` | `#fafafa` | `#111111` |
| `secondaryForeground` | `#27272a` | `#f5f5f5` |
| `muted` | `#fafafa` | `#111111` |
| `mutedForeground` | `#71717b` | `#818181` |
| `placeholder` | `#71717b` | `#818181` |
| `secondaryLabel` | `#71717b` | `#818181` |
| `iconMuted` | `#71717b` | `#818181` |
| `error` | `#fb2c36` | `#fb414a` |
| `errorForeground` | `#c10007` | `#ff6467` |
| `errorSurface` | `#fcebec` | `#301214` |
| `warning` | `#fe9a00` | `#fe9a00` |
| `warningForeground` | `#bb4d00` | `#ffb900` |
| `warningSurface` | `#fcf4e8` | `#312108` |
| `update` | `#1b4ed8` | `#346bf1` |
| `updateForeground` | `#1b4ed8` | `#51a2ff` |
| `updateSurface` | `#e0e6f7` | `#121b34` |
| `accentSurface` | `#f4f4f5` | `#141414` |
| `accentSurfaceForeground` | `#18181b` | `#f5f5f5` |
| `messageSurface` | `#f4f4f5` | `#141414` |
| `messageForeground` | `#27272a` | `#f5f5f5` |
| `messageAction` | `#1b4ed8` | `#346bf1` |
| `messageActionForeground` | `#ffffff` | `#ffffff` |
| `messageActionHover` | `#3160db` | `#3061d9` |
| `codeBackground` | `#ffffff` | `#111111` |
| `codeForeground` | `#27272a` | `#f5f5f5` |
| `sidebar` | `#fafafa` | `#000000` |
| `sidebarForeground` | `#27272a` | `#f1f3f7` |
| `sidebarMutedForeground` | `#71717b` | `#a3a3a3` |
| `sidebarControlSurface` | `#f4f4f5` | `#0a0a0a` |
| `sidebarRowHover` | `#fcfcfc` | `#131313` |
| `sidebarRowActive` | `#ffffff` | `#1a1b1b` |
| `sidebarRowSelected` | `#ffffff` | `#111111` |
| `sidebarBorder` | `#e4e4e7` | `#141414` |
| `terminalBackground` | `#fcfcfc` | `#0a0a0a` |
| `terminalForeground` | `#27272a` | `#f5f5f5` |
| `terminalCursor` | `#26384e` | `#b4cbff` |
| `terminalSelection` | `#d0d6dd` | `#343a47` |
| `terminalScrollbar` | `#d6d6d6` | `#222222` |
| `terminalScrollbarHover` | `#bdbdbd` | `#363636` |

Built-in default overrides in the bundled theme resolver: dark `canvas` is `#000000`; `messageSurface` is `#ebebed` in light and `#1e1e1e` in dark. The base definitions remain listed above for traceability. CSS color mixing and user settings may change the actual rendered color.

Additional CSS scrollbar defaults: light `#d9d9d9` / hover `#bfbfbf`; dark `#ffffff14` / hover `#ffffff1f` (8-digit hex, alpha included). These app scrollbar values are distinct from the terminal scrollbar roles above.

### Typography

The selected code font is **Cascadia Mono**, a dedicated non-ligature monospace face for code blocks, diffs, source/file previews, and terminal text. Use `"Cascadia Mono", Consolas, "SF Mono", "Liberation Mono", ui-monospace, monospace`. Cascadia Mono was verified installed on the reference Windows machine; it is not bundled, so other devices fall back to an available face. Keep the code font and size configurable.

For provenance, the installed T3 build uses the interface stack `-apple-system, BlinkMacSystemFont, "Inter Variable", "Segoe UI", system-ui, sans-serif` and a different system-first monospace stack. The inspected Windows settings showed Inter Variable at 16px and Consolas at 13px; these are observed device settings, not proof of universal defaults.

| Scale | Size / line height | Typical use (inferred) |
|---|---|---|
| `2xs` | 11px / inherited | Very compact metadata; line height is not defined by this token |
| `xs` | 12 / 16px | Metadata |
| `sm` | 14 / 20px | Compact labels and controls |
| `base` | 16 / 24px | Body and composer |
| `lg` | 18 / 28px | Prominent copy |
| `xl` | 20 / 28px | Section title |
| `2xl` | 24 / 32px | Page heading |
| `3xl` | 30 / 36px | Empty-state headline |
| `4xl` | 36 / 40px | Large display heading |

Weights in the bundle: 400, 500, 600, 700. The role assignments above are inferred guidance, not an exhaustive component inventory.

### Space, shape, elevation

- Base spacing unit: `0.25rem` (4px at a 16px root). Use 4, 8, 12, 16, 24 and 32px for a coherent rhythm; the role assignments are inferred.
- Base radius `0.5rem`: `sm` = base − 4px; `md` = base − 2px; `lg` = base; `xl` = base + 4px; `2xl` = base + 8px. At a 16px root these are 4, 6, 8, 12 and 16px.
- Bundle drop shadows: small `0 1px 2px #00000026`, medium `0 3px 3px #0000001f`. These are available effects, not verified as the default shadow for every overlay. Prefer subtle borders and plane changes; use shadow selectively.

### Implementation map and guardrails

- Shared appearance tokens, primary actions and pointer feedback live in `styles.css`. The guide's page-specific roles and layout are in `index.html`; the interactive examples and their page-specific roles are in `layouts.html`. `SYNTAX.md` records syntax colors independently.
- The guide adapts at 900px and 600px; the layout examples adapt at 800px and 560px. These are implementation breakpoints, not claims about T3 Code itself. Both use coarse-pointer adjustments for larger targets.
- Avoid using accent blue as normal text on dark `#111111`: its 4.06:1 contrast falls short of 4.5:1. Use primary text for readable copy, and check the actual surfaces behind focus rings and controls.
- Avoid using status color alone, reusing search highlights as action colors, or applying code syntax colors to general interface controls. Do not assume source palette borders meet contrast requirements.
- Before shipping a new implementation, check both themes at desktop and narrow widths, keyboard focus and accessible names, actual color pairings, and reduced-motion behavior. The examples are references, not evidence of conformance in another product.

## 3. Components

- **Actions:** Blue denotes focus, highlights and primary actions; secondary controls use quiet neutral surfaces and borders. Buttons and icon buttons need accessible names, visible focus, hover, disabled and pressed states. Use destructive styling only for destructive actions. Verify contrast after any opacity or hover change.
- **Surfaces:** Group settings in bordered rounded containers with rows and separators. Use the surface roles rather than arbitrary grays. The observed settings screen uses a compact sidebar, a breadcrumb/header, then clearly separated sections.
- **Inputs:** Pair labels with input, select and switch controls. The bundled input group uses a border, 0.5rem control radius, a 3px inset focus ring, and a distinct invalid border/ring; the text area uses a 14px font at `sm` and above and 16px below it. Use supporting text for meaning; show focus and error in more than color. Controls may be compact, but provide at least 44×44 CSS px targets where practical for new interfaces.
- **Conversation and composer:** Keep the composer visually distinct from the canvas with a rounded, subtly bordered plane; preserve room for attachment, model and send controls. Use a circular, icon-only send button with the primary action colors and an accessible name. The layout example uses a 36 × 36px button and expands it to at least 44 × 44px on coarse pointers. Message surfaces use their own token; code and terminal retain separate surface and monospace roles.
- **Navigation:** Keep project/thread navigation in a persistent sidebar at desktop sizes. Differentiate hover, active and selected rows; include text or accessible state in addition to color.
- **Search:** Use a separate current-match treatment from other matches, with readable foregrounds. Do not rely on yellow alone to communicate current position.
- **Status:** Use green for success, violet for neutral information or progress, amber for attention such as “Needs review,” and red for failures. Include text or an icon alongside the color. Original T3 diff colors are historical reference; evaluate actual composited surfaces.

The theme editor explicitly identifies foundation, brand/content, search, context, and status roles. The component guidance above combines those labels with observed settings and workspace UI; it is not a complete audit of every screen or state.

### Icons

Use [Bootstrap Icons](https://github.com/twbs/icons) as the default icon family. Use an icon alone when its meaning is clear in context; otherwise pair it with a short label. Icon-only controls need an accessible name on the control, a visible keyboard focus state, and a practical touch target; decorative SVGs use `aria-hidden="true"`. Use consistent 16px icons that inherit `currentColor`; do not use color alone to communicate status.

Use Bootstrap `check-circle-fill` for completed, `info-circle` for neutral progress, `exclamation-triangle-fill` for warnings and review requests, and `x-circle-fill` for failures; keep the status label alongside the icon. Use `search`, `folder`, `chat-left-dots`, `file-earmark-code`, `gear`, `sliders`, and directional icons where they clarify the associated navigation or action. The conversation composer uses `arrow-up` for its icon-only add action. Keep the input programmatically labeled even when its visual label is omitted. Inline SVGs keep the icons local; the included `BOOTSTRAP-ICONS-LICENSE.txt` preserves the upstream MIT license.

### Syntax highlighting and component-specific color

See [SYNTAX.md](SYNTAX.md) for all extracted Pierre syntax roles, both appearances, the T3 light adjustment, and dark-mode contrast findings. Code and diff color roles are separate from the 61 theme-editor colors. Syntax color does not communicate meaning without its source text and grammar.

The bundled CSS defines additional status primitives as exact `oklch()` values, independent of the theme editor's palette. `success` is `oklch(69.6% .17 162.48)`; its foreground is `oklch(50.8% .118 165.612)` light and `oklch(76.5% .177 163.223)` dark. `info` is `oklch(62.3% .214 259.815)`; its foreground is `oklch(48.8% .243 264.376)` light and `oklch(70.7% .165 254.624)` dark. Guest signal is `oklch(66.7% .295 322.15)`, with foreground `oklch(59.1% .293 322.896)` light / `oklch(83.3% .145 321.434)` dark. These are CSS source values, not guaranteed opaque rendered colors or verified accessible pairs.

Diffs default to addition = `success` and deletion = `destructive` (which resolves to the error role). Addition icon foreground uses emerald-700 in light / emerald-400 in dark; deletion uses red-700 `oklch(50.5% .213 27.518)` / red-400 `oklch(70.4% .191 22.216)`. A blue/orange alternative is supported. The diff renderer mixes the addition/deletion color with `code-background`: normal line backgrounds are 50% code background in light / 70% in dark; number gutters use 35% / 60%; hover uses 85% and emphasis 80%. These are `color-mix(in srgb, ...)` formulas, not fixed hex. Signal additions and deletions with symbols and labels as well as color.

Chat code blocks use a rounded 8px bordered container, compact language/file header and configured monospace size. Fences use the app's code background/foreground when theme overrides apply; the block's inner `pre` is transparent. The default CSS block has a 70%-opacity border, `secondary` background and dark `input` at 32% opacity. Inline code uses `.85em` text and `.1em .35em` padding. Message paragraphs, lists, blockquotes, preformatted blocks and tables use `.65rem` vertical margins; code blocks can wrap or scroll according to user settings. These are implementation details, not proof that all states were visually tested.

### Guide polish and responsive behavior

- Keep section navigation available at every viewport. At narrow widths, the main guide uses horizontally scrollable navigation; the playground stacks its rail and keeps variation controls visible. Allow headers to wrap instead of clipping actions.
- The guide’s dark displayed swatches for muted text (`#a3a3a3`), border (`#292929`) and input (`#525252`) describe its rendered UI adjustments; the original T3 reference palette remains separately recorded.
- Review filtering must not leave an invisible file displayed as selected. Select the first matching file when necessary, or show a clear empty preview when none match; retain keyboard focus after selecting a file.
- Use visible keyboard focus, labeled controls, readable feedback, reduced-motion support, and at least 44px targets on coarse pointers. Keep frequent navigation immediate; do not add decorative motion to routine interactions.
- White on the dark blue primary button reaches 4.65:1 in its default state; check hover, opacity, and compositing separately before claiming conformance.

### Interactive layout variations

The guide links to `layouts.html`, a local-only demonstration of three related patterns that shares `styles.css` with the guide. Its data is illustrative and session-only; no messages, preferences, or reviews are sent or persisted.

- **Conversation:** keep thread selection, message history, and composer together. Switching threads changes the displayed history; adding a note updates the current example only.
- **Change review:** provide file search and status filtering, an explicit selected file, rendered/source controls, a clear empty-result message, and a reversible reviewed state. Preserve file identity when changing views.
- **Settings:** group labeled preferences into rows, provide explicit current values, and confirm local saving. Appearance controls update the current playground; word-wrap changes the source example.

At narrow widths, the guide keeps section links reachable and the playground stacks the sidebar and content while keeping each variation and file selection reachable by horizontal scrolling. Do not hide the only route to a task. The main guide's three static specimens are entry points to the interactive page, not live services. Use real buttons, labels, and status text, and give every control an observable result; avoid fake links or implied network actions.

## 4. Layout and motion

- Desktop: a compact, resizable navigation sidebar and a larger work area; settings open in a rounded dialog with a navigation column and scrollable content. The editor itself is a floating panel.
- Bundled workspace defaults: top bar 52px; chat content max width 46rem; thread details width 17.5rem; workspace gutter 0.75rem, increasing to 1.25rem at 40rem; sidebar content inset and control gap 0.5rem; sidebar row inset 0.625rem. These are CSS defaults, subject to runtime overrides and resizing; they are not universal fixed page dimensions.
- The dialog bundle uses a 2xl radius and border. Its standard body uses 1.5rem padding and 1rem vertical gaps; the narrow-screen variant changes to a bottom-sheet-like edge treatment. Verify the specific dialog variant in use.
- Glass tokens in the stylesheet: 80% opacity, 12px blur and 1.14 saturation in light; dark changes blur to 16px and saturation to 1.08. These are configurable rendering inputs, not opaque hex colors; verify the resulting composite and platform support.
- The bundle includes container scale 20, 24, 28, 32, 36, 42, 48, 56, 64 and 72rem. Choose based on content; these are available utilities, not mandated page widths. Narrow layouts should preserve readable content and access to navigation; mobile behavior is inferred and unverified.
- CSS default transition: 150ms, `cubic-bezier(.4, 0, .2, 1)`; `ease-out` is `cubic-bezier(0, 0, .2, 1)`. Use motion for state changes, not ornament. The bundle includes a reduced-motion rule that reduces transition and animation durations to zero. Respect the user's system preference.

### Inline file and document rendering

The file panel chooses a renderer by MIME type, extension and available context; source and rendered modes are distinct. The following describes the installed bundle's paths, not an exhaustive runtime test.

| Content | Rendering and recreation guidance |
|---|---|
| HTML / HTM | Rendered-page mode uses a lazy iframe; the inspected HTML renderer sets `sandbox="allow-scripts allow-forms"` and supports fullscreen. The file panel exposes “Show HTML source” / “Show rendered page”. Page-authored styles and scripts control its content, so it does not inherit the app's color system automatically. Treat iframe contents as active untrusted content and reproduce the isolation policy with explicit security review; sandboxing alone is not proof of safety. |
| Markdown / MD / MDX | Rendered Markdown mode or source view; chat Markdown has headings, lists, tables, links, inline code and fenced code. Code fences use the shared syntax highlighter, with a header and actions. The bundle supports Mermaid fences; a file preview exposes diagram/source modes when supported. Do not equate MDX filename recognition with execution of arbitrary MDX components. |
| CSV / TSV | Table renderer and source toggle are present; one registry parsing path defaults to 100 rows, 30 columns and 2,000 characters per cell and indicates truncation. Other table paths may have different limits. |
| Source and plain text | Read-only source renderer with syntax coloring where a language is recognized; large text has a separate viewer. Text decoding rejects NUL bytes and invalid UTF-8 in the inspected path and can report truncation. |
| PDF, image, audio and video | Specialized preview paths; PDF includes a viewer, images have preview controls, and media is rendered through dedicated components. Exact controls depend on context. |
| Notebook / office / rich documents / fonts | Dedicated components exist for notebooks, Office/OpenXML, rich documents and fonts. Notebook Markdown, code and output types are treated separately. Format availability, fidelity and limits vary by context; never assume full document editing or arbitrary content support. |

Preview chrome is separate from content: the registry's header is 40px high with a bottom border and 12px horizontal padding; inline mode has a 28px header and 12px bottom margin. Markdown file preview, chat messages, and fenced snippets are different surfaces. Retain a clear filename/type, source/rendered switch where supported, loading/error/truncated states, and legible focus. The embedded page or document may have its own typography, layout and color system.

## 5. Accessibility and verification

WCAG AA target: 4.5:1 for normal text, 3:1 for large text and essential non-text controls. Use keyboard-operable controls, visible focus, labels, semantic states and reduced-motion support. Check composited colors, transparency, hover/disabled states, resizing and real keyboard navigation in the target app.

Historical T3 palette checks (including the selected blue accent): primary text/canvas is 14.52:1 light and 19.26:1 dark; muted text/canvas is 4.71:1 light and 5.39:1 dark; muted on dark `#111111` is 4.85:1; white on action blue is 6.71:1 light and 4.65:1 dark. Error text/surface is 5.58:1 light and 5.95:1 dark; warning text/surface is 4.61:1 light and 9.02:1 dark. Dark inactive search match is approximately 4.50:1 before rounding. The light muted, dark blue action, light warning, and dark search pairs have little margin: do not reduce opacity or alter the background without rechecking. These calculations do not establish accessibility of every rendered state.


### Contrast audit: selected colors

Opaque sRGB calculations: white on light button `#1b4ed8` is 6.71:1; white on dark button `#346bf1` is 4.65:1. White on the light and dark hover fills `#3160db` and `#3061d9` is 5.49:1 and 5.47:1 respectively. Light success `#047857` and information `#6d28d9` on `#fafafa` are 5.25:1 and 6.81:1. Dark success `#34d399` and information `#a78bfa` on `#111111` are 9.82:1 and 6.94:1. The blue accent on `#fcfcfc` light is 6.54:1; on `#111111` dark it is 4.06:1, below the 4.5:1 normal-text target. These are pairwise measurements, not a full accessibility audit: recheck actual rendered hover, focus, disabled, alpha and adjacent surfaces.

### Contrast audit: historical T3 opaque pairs

Ratios use WCAG relative luminance on the listed hex colors, with no opacity or blending. A pass below concerns only that pair, not the rendered component.

| Pair | Light | Dark | Assessment |
|---|---:|---:|---|
| Search match text/background | 13.40:1 | 4.5006:1 | Pass; dark has effectively no margin |
| Current search text/background | 8.38:1 | 8.38:1 | Pass |
| Focus blue / canvas | 6.54:1 | 4.52:1 | Passes 3:1 color comparison before compositing; inspect actual focus indicator geometry |
| Border / canvas | 1.24:1 | 1.19:1 | Fails 3:1; decorative division only, not the sole indicator of an interactive boundary |
| Input boundary / canvas | 1.44:1 | 1.26:1 | Fails 3:1; add a sufficiently contrasting boundary or another conforming visual treatment |
| Update text / update surface | 5.38:1 | 6.46:1 | Pass |
| White / action hover blue | 5.49:1 | 5.47:1 | Pass for these opaque pairs |

The nominal focus comparison above does not validate the 24%-opacity ring: composite it with the actual adjacent surface and test the complete focus indicator. The source app's compact or low-contrast treatments are evidence of its appearance, not accessibility approval. Improve boundary contrast where needed when building a new interface.

## 6. Implementation map and provenance

| Evidence | Location / role |
|---|---|
| Installed build identity | `%LOCALAPPDATA%\Programs\t3code\resources\app.asar`, `package.json` |
| Palette, defaults and theme overrides | `server.asar`, `apps/server/dist/client/assets/themePalette-C1a67xEN.js` |
| CSS tokens, utilities and reduced motion | `server.asar`, `apps/server/dist/client/assets/main-DVSpUGJE.css` |
| UI verification | Settings → Appearance → Create theme → Advanced; both draft appearances inspected, no theme saved |
| Component and layout evidence | Running Windows app workspace and settings; compiled client bundles under `apps/server/dist/client/assets/` |
| Syntax, preview and extra colors | `SYNTAX.md`; `diffRendering-C6YZJF7J.js`, `contextPresentationRegistry-VcjXUuCc.js`, `FilePreviewPanel-BJF1nUWo.js`, `ChatMarkdown-CkTR1bqT.js` |

Archive paths and hashed filenames identify this installed version and may change on update. The theme editor draft colors are source palette values, while the built-in message-surface override and any CSS color mixing must be considered separately. Validate against the actual target runtime; the full application, all components, mobile layouts, and every accessibility state were not tested.

## 7. Agent instructions

1. Start with semantic roles and both appearances; do not copy a single screen's arbitrary color into unrelated controls.
2. Preserve quiet density, clear hierarchy, and the blue focus, highlight and primary action signal. Make responsive adaptations explicit rather than claiming unverified T3 behavior.
3. Keep default and custom theme values separate. Check rendered results when opacity, color mixing, user contrast settings, or theme overrides are active.
4. Recalculate contrast for each actual text/background and focus pairing; fix failures rather than assuming a palette guarantees accessibility.
5. Verify with real interaction, keyboard navigation, scaling, reduced motion, and relevant viewport sizes before shipping.
