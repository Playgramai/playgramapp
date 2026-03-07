# Frontend UI Library Selection: Playgram Next.js App

*Research conducted: March 7, 2026*

## TL;DR

**We're going with Mantine v8.** Playgram's UI requires a command palette, rich text editing, code highlighting, date pickers, file drag-and-drop, notifications, and modals — on top of the standard inputs, dropdowns, and layout components.

Mantine is the only library that ships all of these as first-party packages. Its Styles API (CSS Modules + CSS variables + per-selector overrides) gives us pixel-level control over every internal element of every component, which is critical since we're reproducing an existing design rather than starting from a blank canvas.

The styling approach (CSS Modules + PostCSS, no CSS-in-JS runtime) is the most compatible with Next.js App Router and React Server Components. At ~1.35M weekly downloads and the fastest growth rate in the React ecosystem, it's a defensible long-term choice.

---

## Context

Playgram is a multi-model AI chat platform being migrated from Bubble.io to Next.js. The frontend needs to be a pixel-perfect reproduction of the existing application (with Figma designs available as reference). The app uses a custom dark theme with teal accents, Inter typography, and a power-user-oriented interface with extensive keyboard shortcuts. The project will use Feature-Sliced Design for its architecture.

---

## UI Requirements Derived from the Existing App

| Category | Components Needed |
|---|---|
| **Chat interface** | Streaming message list, rich text input (currently Quill), code blocks with syntax highlighting (currently CodeMirror + Highlight.js), message actions (copy, regenerate, save to memory) |
| **Navigation** | Collapsible sidebar (252px), nested project/chat lists with hover states, workspace switcher |
| **Command palette** | Cmd+K trigger, 20+ keyboard shortcuts across navigation, chat actions, feature toggles, message navigation |
| **Overlays** | Modals (settings, project creation, image preview, confirmations), tooltips, context menus, floating panels (memory/knowledge, library, workspace settings) |
| **Forms** | Text inputs, multiline inputs, dropdowns, autocomplete/search dropdowns, checkboxes, radio buttons, sliders, date pickers, file uploaders, image uploaders |
| **Feedback** | Alerts (info/success/warning), toast notifications |
| **File handling** | Drag-and-drop upload, paste-to-upload, file type indicators |
| **Media** | Image gallery (library panel), image preview modal |
| **Theming** | Dark theme primary (`#1B1B1D` base, `#2A2A2D` surfaces), light mode toggle, teal accent scale (`#245662` / `#80BDCB`), Inter font at 12/14/16/24px, 200ms transitions |
| **Responsive** | 768px primary breakpoint, mobile views |

---

## Libraries Evaluated

### 1. Mantine v8

| Metric | Value |
|---|---|
| **Weekly downloads** | ~1.35M (grew from 900K in 6 months) |
| **Components** | 120+ styled components + 70 hooks |
| **Styling approach** | CSS Modules + PostCSS (zero runtime CSS) |
| **Bundle size** | ~180KB min+gzip |
| **Next.js RSC support** | Full (no CSS-in-JS runtime) |
| **License** | MIT |

**Feature coverage against Playgram requirements:**

| Requirement | Mantine Package | Notes |
|---|---|---|
| Command palette (Cmd+K) | `@mantine/spotlight` | Configurable shortcuts, search, action groups |
| Rich text editor | `@mantine/tiptap` | Tiptap-based (more extensible than Quill) |
| Code highlighting | `@mantine/code-highlight` | Themed to match app colors |
| Date pickers | `@mantine/dates` | Date inputs, date ranges, calendars |
| File drag-and-drop | `@mantine/dropzone` | Full dropzone component |
| Notifications | `@mantine/notifications` | Toast-style, positioned, auto-dismiss |
| Modal management | `@mantine/modals` | Centralized modal manager, confirm dialogs |
| Dark/light mode | Built-in | `ColorSchemeScript` for SSR-safe theming, PostCSS `@dark`/`@light` mixins |
| Forms | `@mantine/core` | Input, Textarea, Select, MultiSelect, Autocomplete, Checkbox, Radio, Slider, Switch |
| Layout | `@mantine/core` | AppShell with collapsible Navbar, responsive breakpoints |
| Tooltips/popovers | `@mantine/core` | Tooltip, Popover, HoverCard, Menu |

**Customization depth (Styles API):**

Every Mantine component exposes named selectors for all internal elements. For example, `Button` exposes `root`, `inner`, `label`, `section`. These can be targeted via:

1. **Theme-level** `classNames` and `styles` — apply globally to all instances of a component type
2. **Component-level** `classNames` and `styles` props — per-instance overrides
3. **CSS Modules** targeting internal selectors — standard `.css` file approach
4. **CSS variables** for all design tokens — colors, spacing, radius, fonts set once in theme
5. **`varsResolver`** — component-specific CSS variable overrides

This gives pixel-level control without forking or ejecting components.

**Strengths:** Widest first-party component coverage of any library. Neutral default aesthetics (not opinionated like Material or Ant) means less to override for custom designs. CSS Modules approach is the most Next.js-friendly in 2026. Excellent TypeScript support. Official Next.js templates for both App and Pages router. Growth trajectory signals strong long-term viability.

**Weaknesses:** Larger nominal bundle than headless alternatives (~180KB vs ~0 for unstyled), though Mantine is fully tree-shakeable — only imported components and hooks are included in the final bundle. Default styling must still be overridden for pixel-perfect work, though the Styles API makes this systematic rather than painful.

---

### 2. shadcn/ui (Radix + Tailwind)

| Metric | Value |
|---|---|
| **Weekly downloads** | N/A (copy-paste into codebase, not installed as dependency) |
| **Components** | ~50 primitives |
| **Styling approach** | Tailwind CSS utility classes |
| **Bundle size** | Only what you use |
| **Next.js RSC support** | Full |
| **License** | MIT |

**Strengths:** Full code ownership — components live in your repo. Built on Radix primitives (excellent accessibility). Tailwind gives maximum styling control. Most popular approach in the React ecosystem right now. Note: Tailwind v4 has moved to a CSS-native engine (no JS runtime), so the RSC story is now fully clean for styling — this narrows the gap with Mantine on the styling-approach axis.

**Weaknesses for Playgram:** Missing critical specialized components. No command palette, rich text editor, code highlighting, date picker, file dropzone, or notification system — each requires finding, evaluating, and integrating a separate third-party library. The copy-paste model means no upstream bugfixes or security patches. Significant assembly and integration cost for a feature-rich app like Playgram. Component count (~50) is less than half of what Mantine offers.

---

### 3. MUI (Material UI v6)

| Metric | Value |
|---|---|
| **Weekly downloads** | ~1.4M (most popular) |
| **Components** | 100+ |
| **Styling approach** | Emotion (CSS-in-JS) |
| **Bundle size** | ~90KB core + Emotion runtime |
| **Next.js RSC support** | Partial (Emotion is problematic with RSC; Pigment CSS zero-runtime alternative is still experimental) |
| **License** | MIT |

**Strengths:** Largest ecosystem, most battle-tested, extensive documentation, proven at enterprise scale.

**Weaknesses for Playgram:** Material Design's visual opinions (ripple effects, elevation system, specific spacing rhythm) are pervasive and hard to override for a non-Material design. Achieving Playgram's dark chat aesthetic means fighting these defaults at every component. Emotion CSS-in-JS creates friction with Next.js App Router and RSC. Missing command palette, rich text editor, code highlighting, and file dropzone. The ongoing transition away from Emotion creates uncertainty about the styling story.

---

### 4. Chakra UI v3

| Metric | Value |
|---|---|
| **Weekly downloads** | ~587K (declining relative share) |
| **Components** | ~60 |
| **Styling approach** | Emotion (CSS-in-JS), style props |
| **Bundle size** | ~85KB |
| **Next.js RSC support** | Partial (Emotion-based) |
| **License** | MIT |

**Strengths:** Clean style-props API, good developer experience, solid accessibility.

**Weaknesses for Playgram:** Fewer components than alternatives, missing most specialized ones (no spotlight, rich text, code highlight, dates, dropzone). Same Emotion/RSC concerns as MUI. v3 migration was disruptive to the community, and growth has stalled relative to Mantine and shadcn/ui.

---

### 5. Ant Design v5

| Metric | Value |
|---|---|
| **Weekly downloads** | ~1.1M |
| **Components** | 70+ |
| **Styling approach** | CSS-in-JS with CSS variables |
| **Bundle size** | ~350KB+ min+gzip (heaviest) |
| **Next.js RSC support** | Partial |
| **License** | MIT |

**Strengths:** Enterprise-grade data components (Table, Tree, TreeSelect), strong for admin dashboards and internal tools.

**Weaknesses for Playgram:** Largest aesthetic mismatch — Ant Design's corporate/admin dashboard look is the furthest from Playgram's sleek dark chat UI. Heaviest bundle of all options. Alibaba-centric ecosystem. Customizing to match a modern consumer-facing chat interface would mean overriding the library's visual identity at nearly every level.

---

### 6. Radix Primitives + Custom Styling

| Metric | Value |
|---|---|
| **Weekly downloads** | ~5M+ (widely used as foundation) |
| **Components** | ~30 headless primitives |
| **Styling approach** | Bring your own |
| **Bundle size** | Minimal (behavior only) |
| **Next.js RSC support** | Full |
| **License** | MIT |

**Strengths:** Maximum style control (no opinions to override), excellent accessibility, zero styling overhead.

**Weaknesses for Playgram:** Only provides behavior — all visual styling must be built from scratch. Only ~30 primitives (no rich text, dates, code highlight, notifications, command palette). Highest development time of any option. Essentially choosing to build a custom component library.

---

## Comparison Matrix

| | Mantine v8 | shadcn/ui | MUI v6 | Chakra v3 | Ant Design v5 | Radix |
|---|---|---|---|---|---|---|
| **Component count** | 120+ | ~50 | 100+ | ~60 | 70+ | ~30 |
| **Command palette** | Yes | No | No | No | No | No |
| **Rich text editor** | Yes | No | No | No | No | No |
| **Code highlighting** | Yes | No | No | No | No | No |
| **Date pickers** | Yes | No (need 3rd party) | Yes (paid) | No | Yes | No |
| **File dropzone** | Yes | No | No | No | Yes | No |
| **Notifications** | Yes | No (need 3rd party) | No (need Notistack) | Yes | Yes | No |
| **RSC compatible** | Full | Full | Partial | Partial | Partial | Full |
| **Styling approach** | CSS Modules | Tailwind | CSS-in-JS | CSS-in-JS | CSS-in-JS | BYO |
| **Bundle** | ~180KB | Varies | ~90KB+runtime | ~85KB | ~350KB | Minimal |
| **Custom design fit** | High | Highest | Low | Medium | Low | Highest |
| **Assembly effort** | Low | High | Medium | High | Medium | Highest |
| **Growth trend** | Accelerating | Accelerating | Stable | Declining | Stable | Stable |

---

## Decision

**Mantine v8** is the best fit for Playgram's migration. The reasoning:

1. **Component coverage eliminates third-party sprawl.** Mantine is the only library where the command palette, rich text editor, code highlighting, date pickers, file dropzone, notifications, and modals are all first-party packages maintained by the same team. For every other option, we'd need to find, evaluate, integrate, and maintain 3-6 separate libraries to reach feature parity — each with its own theming system, update cadence, and breaking change risk.

2. **The Styles API is purpose-built for pixel-perfect reproduction.** Named selectors on every internal element, CSS variable design tokens, theme-level and instance-level overrides, and `varsResolver` for component-specific variables give systematic control over every visual detail. This is more maintainable than Tailwind class-string overrides and more predictable than CSS-in-JS theming.

3. **CSS Modules + PostCSS is the right styling strategy for Next.js in 2026.** No CSS-in-JS runtime means full RSC compatibility, no hydration mismatch risk, and zero styling overhead at runtime. MUI and Chakra are both navigating painful transitions away from Emotion for exactly this reason.

4. **Neutral default aesthetics reduce override surface area.** Unlike MUI (Material Design) or Ant Design, Mantine's defaults are visually neutral. Adapting them to Playgram's dark teal theme is additive customization (setting tokens and adding CSS) rather than subtractive (removing Material opinions).

5. **FSD compatibility is straightforward.** Mantine components are plain imports with no architectural constraints. A single `MantineProvider` at the app root is the only setup. Components can be freely used across FSD slices and layers.

### Supplementary library

For the code *editing* experience (CodeMirror in the current Bubble app), we'll pair Mantine with `@uiw/react-codemirror` — a well-maintained React wrapper for CodeMirror 6. Mantine's `@mantine/code-highlight` handles display/read-only code blocks, but the app also needs an interactive code editor, which is a specialized concern outside any component library's scope.

### Theme foundation

```typescript
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'teal',
  colors: {
    teal: [
      '#e6f5f8', '#c0e4eb', '#99d3de', '#73c2d1',
      '#4db1c4', '#338fa1', '#245662', '#1d4650',
      '#16363e', '#0f262c',
    ],
    dark: [
      '#C1C2C5', '#A6A7AB', '#909296', '#5C5F66',
      '#373A40', '#2C2E33', '#2A2A2D', '#1B1B1D',
      '#141417', '#101113',
    ],
  },
  defaultRadius: 'md',
  primaryShade: { light: 6, dark: 4 },
  components: {
    Button: {
      defaultProps: { radius: 'md' },
    },
    Modal: {
      defaultProps: {
        radius: 'md',
        overlayProps: { backgroundOpacity: 0.55, blur: 3 },
      },
    },
    Input: {
      defaultProps: { size: 'md' },
    },
  },
});
```

This theme object, combined with CSS Modules for per-component fine-tuning via the Styles API, provides the foundation for reproducing the Bubble app's design system.

> **Note:** The teal and dark color scales above are approximate starting points derived from the Bubble app's hex values (`#245662`, `#80BDCB`, `#1B1B1D`, `#2A2A2D`). The full 10-shade scales should be validated against the Figma designs and the Bubble export's style definitions (`bubble/playgram_split/styles/`) during implementation.
