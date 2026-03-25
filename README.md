# citedhealth-embed

[![npm](https://img.shields.io/npm/v/citedhealth-embed)](https://www.npmjs.com/package/citedhealth-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/citedhealth-embed)
[![Size](https://img.shields.io/badge/size-~8KB-green)](https://bundlephobia.com/package/citedhealth-embed)

Embed evidence-based health widgets across all health topics — hair, sleep, gut, immune, brain, weight, heart, and skin on any website. **Zero dependencies**, Shadow DOM style isolation, 3 built-in themes (light, dark, clinical), and peer-reviewed research data from the [Cited Health](https://citedhealth.com) database.

Every widget includes a medical disclaimer and "Powered by Cited Health" backlink — ensuring your readers are directed to the full evidence base.

> **Try the interactive widget builder at [widget.citedhealth.com](https://widget.citedhealth.com)**

For the hub, use the `data-site` attribute to route widgets to a specific organ site:

```html
<!-- Route to hair health context -->
<div data-citedhealth="evidence" data-slug="biotin" data-site="hair"></div>
```

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-citedhealth="evidence" data-slug="vitamin-d" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/citedhealth-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches evidence data from the Cited Health API and renders it with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `evidence` | `<div data-citedhealth="evidence" data-slug="..."></div>` | Evidence summary card — grade, effect size, study count |
| `ingredient` | `<div data-citedhealth="ingredient" data-slug="..."></div>` | Supplement ingredient profile — benefits, dosage, safety |
| `condition` | `<div data-citedhealth="condition" data-slug="..."></div>` | Health condition overview — symptoms, treatments, evidence |
| `paper` | `<div data-citedhealth="paper" data-slug="..."></div>` | Research paper citation — authors, journal, findings |
| `figure` | `<div data-citedhealth="figure" data-slug="..."></div>` | Study figure or chart with caption |
| `search` | `<div data-citedhealth="search" data-slug="..."></div>` | Search box linking to the full database |
| `safety` | `<div data-citedhealth="safety" data-slug="..."></div>` | Safety grade badge — A/B/C/D/F rating with tooltip |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-citedhealth` | evidence, ingredient, condition, paper, figure, search, safety | required | Widget type |
| `data-slug` | e.g. "vitamin-d", "insomnia" | — | Entity slug from the Cited Health database |
| `data-theme` | light, dark, clinical | light | Visual theme |
| `data-style` | modern, clinical, research | modern | Widget design style |
| `data-size` | default, compact | default | Widget size |
| `data-placeholder` | any string | "Search All Health Topics…" | Search box placeholder |
| `data-site` | hair, sleep, gut, immune, brain, weight, heart, skin | — | Organ-specific routing (hub only) |

## Themes

```html
<!-- Light (default) -->
<div data-citedhealth="evidence" data-slug="vitamin-d" data-theme="light"></div>

<!-- Dark -->
<div data-citedhealth="evidence" data-slug="vitamin-d" data-theme="dark"></div>

<!-- Clinical (white, clean, medical) -->
<div data-citedhealth="evidence" data-slug="vitamin-d" data-theme="clinical"></div>
```

## Examples

### Evidence Summary Card

```html
<div data-citedhealth="evidence" data-slug="vitamin-d" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/citedhealth-embed@1/dist/embed.min.js"></script>
```

### Ingredient Profile

```html
<div data-citedhealth="ingredient" data-slug="magnesium" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/citedhealth-embed@1/dist/embed.min.js"></script>
```

### Safety Grade Badge (compact)

```html
<div data-citedhealth="safety" data-slug="melatonin" data-size="compact"></div>
<script src="https://cdn.jsdelivr.net/npm/citedhealth-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-citedhealth="search" data-placeholder="Search All Health Topics…"></div>
<script src="https://cdn.jsdelivr.net/npm/citedhealth-embed@1/dist/embed.min.js"></script>
```

### Research Paper Citation

```html
<div data-citedhealth="paper" data-slug="example-paper-slug" data-theme="research"></div>
<script src="https://cdn.jsdelivr.net/npm/citedhealth-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/citedhealth-embed@1/dist/embed.min.js"></script>
```

### R2 CDN (citedhealth.com hosted)

```html
<script src="https://cdn.citedhealth.com/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install citedhealth-embed
```

```javascript
import 'citedhealth-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **System fonts**: No Google Fonts request — loads instantly
- **CORS**: Cited Health API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **Medical disclaimer**: Auto-injected on every widget — educational content, not medical advice
- **Bundle size**: ~8KB gzipped

## Learn More About All Health Topics

Visit [citedhealth.com](https://citedhealth.com) — Cited Health is a comprehensive evidence-based health reference with peer-reviewed research, supplement profiles, and clinical condition summaries.

- **API docs**: [citedhealth.com/developers/](https://citedhealth.com/developers/)
- **Widget builder**: [widget.citedhealth.com](https://widget.citedhealth.com)
- **npm package**: [npmjs.com/package/citedhealth-embed](https://www.npmjs.com/package/citedhealth-embed)

## CITED Health Network

Part of [Cited Health](https://citedhealth.com) — Evidence-based health information.

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| **Cited Health** | [citedhealth.com](https://citedhealth.com) | All health topics — supplements, conditions, evidence | **[npm](https://www.npmjs.com/package/citedhealth-embed)** |
| HairCited | [haircited.com](https://haircited.com) | Hair growth, loss, scalp health, DHT, biotin | [npm](https://www.npmjs.com/package/haircited-embed) |
| SleepCited | [sleepcited.com](https://sleepcited.com) | Sleep quality, insomnia, melatonin, circadian rhythm | [npm](https://www.npmjs.com/package/sleepcited-embed) |
| GutCited | [gutcited.com](https://gutcited.com) | Gut microbiome, probiotics, IBS, digestive health | [npm](https://www.npmjs.com/package/gutcited-embed) |
| ImmuneCited | [immunecited.com](https://immunecited.com) | Immune function, vitamin C, zinc, inflammation | [npm](https://www.npmjs.com/package/immunecited-embed) |
| BrainCited | [braincited.com](https://braincited.com) | Cognitive function, nootropics, mood, memory | [npm](https://www.npmjs.com/package/braincited-embed) |
| WeightCited | [weightcited.com](https://weightcited.com) | Weight management, metabolism, appetite, fat loss | [npm](https://www.npmjs.com/package/weightcited-embed) |
| HeartCited | [heartcited.com](https://heartcited.com) | Cardiovascular health, cholesterol, blood pressure | [npm](https://www.npmjs.com/package/heartcited-embed) |
| SkinCited | [skincited.com](https://skincited.com) | Skin health, collagen, acne, UV protection | [npm](https://www.npmjs.com/package/skincited-embed) |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [Cited Health Inc.](https://citedhealth.com). Not medical advice.
