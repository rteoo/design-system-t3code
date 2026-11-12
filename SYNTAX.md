# T3 Code — syntax highlighting reference

> Reconstructed from T3 Code 0.1.8, build `bf469bb19669`; generated from the installed Pierre Zed theme bundles and the T3 light-theme adjustment. This is not an official specification.

The shared highlighter resolves **`t3-light`** in light mode and **`pierre-dark`** in dark mode for the inspected chat/diff path. The `t3-light` palette starts from `pierre-light` and darkens each six-digit syntax color until the bundled contrast function reaches 4.5; source colors `#1ca1c7`, `#636363`, and `#1a85d4` use a threshold of 6. The function uses a fixed `.74` numerator and repeated `floor(channel × 0.96)`; it is not a measurement against every actual surface. Language grammars and token scope precedence decide which role is used; custom appearance and syntax settings may change results.

Below, light values are the resulting `t3-light` values, not raw Pierre Light. Dark values are Pierre Dark. `—` indicates no explicit color in that role: inherit from the surrounding token/renderer. Font weights and italics are explicit theme attributes. These are token colors, not a full mapping of all TextMate scopes or third-party syntax themes.

| Syntax role | Light adjusted | Dark | Theme style |
|---|---|---|---|
| `comment` | `#5c5c5c` | `#737373` | normal/inherit |
| `comment.doc` | `#5c5c5c` | `#737373` | normal/inherit |
| `string` | `#106a2b` | `#5ecc71` | normal/inherit |
| `string.escape` | `#0b685b` | `#61d5c0` | normal/inherit |
| `string.regex` | `#0d6971` | `#64d1db` | normal/inherit |
| `string.special` | `#0b685b` | `#61d5c0` | normal/inherit |
| `string.special.symbol` | `#735b02` | `#ffd452` | normal/inherit |
| `number` | `#0b5267` | `#68cdf2` | normal/inherit |
| `constant` | `#735b02` | `#ffd452` | normal/inherit |
| `boolean` | `#0b5267` | `#68cdf2` | normal/inherit |
| `keyword` | `#b12251` | `#ff678d` | normal/inherit |
| `keyword.operator` | `#006781` | `#08c0ef` | normal/inherit |
| `function` | `#693acf` | `#9d6afb` | normal/inherit |
| `function.method` | `#693acf` | `#9d6afb` | normal/inherit |
| `function.builtin` | `#693acf` | `#9d6afb` | normal/inherit |
| `function.special.definition` | `#693acf` | `#9d6afb` | normal/inherit |
| `function.call` | `#693acf` | `#9d6afb` | normal/inherit |
| `type` | `#912ba7` | `#d568ea` | normal/inherit |
| `type.builtin` | `#912ba7` | `#d568ea` | normal/inherit |
| `constructor` | `#912ba7` | `#d568ea` | normal/inherit |
| `variable` | `#8f4e17` | `#ffa359` | normal/inherit |
| `variable.builtin` | `#7e540e` | `#ffab16` | normal/inherit |
| `variable.member` | `#8f4e17` | `#ffa359` | normal/inherit |
| `variable.parameter` | `#4b4b4b` | `#a3a3a3` | normal/inherit |
| `variable.special` | `#7e540e` | `#ffab16` | normal/inherit |
| `property` | `#8f4e17` | `#ffa359` | normal/inherit |
| `property.css` | `#00609f` | `#009fff` | normal/inherit |
| `property.definition` | `#00609f` | `#009fff` | normal/inherit |
| `property_name` | `#00609f` | `#009fff` | normal/inherit |
| `value` | `#0b5267` | `#68cdf2` | normal/inherit |
| `constant.css` | `#735b02` | `#ffd452` | normal/inherit |
| `string.plain` | `#0b5267` | `#68cdf2` | normal/inherit |
| `plain_value` | `#0b5267` | `#68cdf2` | normal/inherit |
| `tag.css` | `#a43d23` | `#ff855e` | normal/inherit |
| `tag_name` | `#a43d23` | `#ff855e` | normal/inherit |
| `class` | `#0e6944` | `#60d199` | normal/inherit |
| `class_name` | `#0e6944` | `#60d199` | normal/inherit |
| `selector.class` | `#0e6944` | `#60d199` | normal/inherit |
| `selector.id` | `#693acf` | `#9d6afb` | normal/inherit |
| `id_name` | `#693acf` | `#9d6afb` | normal/inherit |
| `selector.pseudo` | `#006781` | `#08c0ef` | normal/inherit |
| `pseudo_class_selector` | `#006781` | `#08c0ef` | normal/inherit |
| `pseudo_element_selector` | `#006781` | `#08c0ef` | normal/inherit |
| `keyword.directive` | `#b12251` | `#ff678d` | normal/inherit |
| `at_keyword` | `#b12251` | `#ff678d` | normal/inherit |
| `variable.scss` | `#8f4e17` | `#ffa359` | normal/inherit |
| `variable.css` | `#8f4e17` | `#ffa359` | normal/inherit |
| `property.custom` | `#8f4e17` | `#ffa359` | normal/inherit |
| `unit` | `#0b5267` | `#68cdf2` | normal/inherit |
| `number.unit` | `#0b5267` | `#68cdf2` | normal/inherit |
| `color` | `#735b02` | `#ffd452` | normal/inherit |
| `constant.color` | `#735b02` | `#ffd452` | normal/inherit |
| `keyword.important` | `#b12251` | `#ff678d` | normal/inherit |
| `variable.language` | `#7e540e` | `#ffab16` | normal/inherit |
| `this` | `#7e540e` | `#ffab16` | normal/inherit |
| `self` | `#7e540e` | `#ffab16` | normal/inherit |
| `type.class` | `#912ba7` | `#d568ea` | normal/inherit |
| `property.object` | `#8f4e17` | `#ffa359` | normal/inherit |
| `property_identifier` | `#8f4e17` | `#ffa359` | normal/inherit |
| `shorthand_property_identifier` | `#8f4e17` | `#ffa359` | normal/inherit |
| `shorthand_property_identifier_pattern` | `#8f4e17` | `#ffa359` | normal/inherit |
| `method_definition` | `#693acf` | `#9d6afb` | normal/inherit |
| `function.method.call` | `#693acf` | `#9d6afb` | normal/inherit |
| `string.template` | `#106a2b` | `#5ecc71` | normal/inherit |
| `template_string` | `#106a2b` | `#5ecc71` | normal/inherit |
| `tag.jsx` | `#a43d23` | `#ff855e` | normal/inherit |
| `tag.component` | `#912ba7` | `#d568ea` | normal/inherit |
| `punctuation` | `#4b4b4b` | `#636363` | normal/inherit |
| `punctuation.bracket` | `#4b4b4b` | `#636363` | normal/inherit |
| `punctuation.delimiter` | `#4b4b4b` | `#636363` | normal/inherit |
| `punctuation.list_marker` | `#4b4b4b` | `#636363` | normal/inherit |
| `punctuation.special` | `#b12251` | `#ff678d` | normal/inherit |
| `operator` | `#006781` | `#08c0ef` | normal/inherit |
| `tag` | `#a43d23` | `#ff855e` | normal/inherit |
| `attribute` | `#0e6944` | `#60d199` | normal/inherit |
| `label` | `#7e540e` | `#ffab16` | normal/inherit |
| `namespace` | `#7e540e` | `#ffab16` | normal/inherit |
| `decorator` | `#0d4c7d` | `#69b1ff` | normal/inherit |
| `attribute.builtin` | `#0d4c7d` | `#69b1ff` | normal/inherit |
| `embedded` | `#0a0a0a` | `#fafafa` | normal/inherit |
| `preproc` | `#b12251` | `#ff678d` | normal/inherit |
| `text.literal` | `#106a2b` | `#5ecc71` | normal/inherit |
| `markup.heading` | `#a43d23` | `#ff855e` | weight 700 |
| `markup.bold` | `#735b02` | `#ffd452` | weight 700 |
| `markup.italic` | `#b12251` | `#ff678d` | italic |
| `markup.strikethrough` | `#5c5c5c` | `#737373` | normal/inherit |
| `markup.link.url` | `#00609f` | `#009fff` | normal/inherit |
| `markup.link.text` | `#693acf` | `#9d6afb` | normal/inherit |
| `markup.quote` | `#5c5c5c` | `#737373` | italic |
| `markup.list` | `#a43d23` | `#ff855e` | normal/inherit |
| `markup.list.numbered` | `#a43d23` | `#ff855e` | normal/inherit |
| `markup.list.unnumbered` | `#a43d23` | `#ff855e` | normal/inherit |
| `markup.raw` | `#106a2b` | `#5ecc71` | normal/inherit |
| `markup.raw.inline` | `#106a2b` | `#5ecc71` | normal/inherit |
| `markup.raw.block` | `#106a2b` | `#5ecc71` | normal/inherit |
| `diff.plus` | `#0e6944` | `#07c480` | normal/inherit |
| `diff.minus` | `#b3242c` | `#ff2e3f` | normal/inherit |
| `diff.delta` | `#735b02` | `#ffca00` | normal/inherit |
| `link_text` | `#00609f` | `#009fff` | normal/inherit |
| `link_uri` | `#b12251` | `#ff678d` | normal/inherit |
| `emphasis` | — | — | italic |
| `emphasis.strong` | — | — | weight 700 |
| `primary` | `#00609f` | `#009fff` | normal/inherit |
| `title` | `#a43d23` | `#ff855e` | weight 700 |
| `predictive` | `#5c5c5c` | `#636363` | italic |
| `selector` | `#a43d23` | `#ff855e` | normal/inherit |
| `enum` | `#912ba7` | `#d568ea` | normal/inherit |
| `hint` | `#5c5c5c` | `#737373` | normal/inherit |
| `variant` | `#735b02` | `#ffd452` | normal/inherit |

## Contrast and surfaces

Against the app dark code surface `#111111`, 10 named dark-theme roles fall below 4.5:1 when evaluated as opaque normal text. Unique failing colors and ratios: `#636363` 3.14:1, `#737373` 3.98:1. Some roles are bold, but do not assume bold qualifies as large text. Improve the actual token/background pairing for accessible implementations; preserve original values only when fidelity is the goal and the limitation is accepted. Recheck selected text, line highlights, diff backgrounds, and composited or custom surfaces.

The raw Pierre metadata specifies editor background/foreground `#ffffff` / `#0a0a0a` in light and `#0a0a0a` / `#fafafa` in dark. T3 surfaces can override these; the app code-background roles are `#ffffff` / `#111111`. Pierre also defines active-line fills `#dfebff8c` / `#19283c8c`, cursor `#009fff`, and selections `#009fff2e` / `#009fff4d` (last two hex digits are alpha). Verify actual use in each renderer.

Sources inside `server.asar`: `apps/server/dist/client/assets/pierre-light-BvcXQJIj.js`, `pierre-dark-fPlffE7i.js`, `diffRendering-C6YZJF7J.js`, and `ChatMarkdown-CkTR1bqT.js`. Static build inspection; rendered token scopes and all editor states have not been tested.
