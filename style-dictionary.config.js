/**
 * Style Dictionary v4 — compiles tokens/{base,light,dark}.json (DTCG)
 * into three outputs:
 *
 *   dist/tokens.css  — CSS custom properties scoped per theme
 *                       :root      ← base + light
 *                       .dark      ← dark overrides (shadcn convention)
 *                       .light     ← light re-declared (forced-light escape
 *                                    hatch below a .dark ancestor)
 *                       Plus an @theme block mapping color-* / radius-*
 *                       tokens to Tailwind v4 utility colors, mirroring
 *                       what `shadcn init` would write directly.
 *   dist/tokens.ts   — Plain TS objects for any-platform consumers (RN-safe)
 *   dist/tokens.d.ts — Type declarations
 *
 * Run with: `npm run build` (from this package's directory).
 */
import StyleDictionary from 'style-dictionary';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---- Shared helpers ----------------------------------------------------

function loadTokens(file) {
  return JSON.parse(readFileSync(resolve(__dirname, 'tokens', file), 'utf8'));
}

const primitives = loadTokens('primitives.json');
const base = loadTokens('base.json');
const light = loadTokens('light.json');
const dark = loadTokens('dark.json');

// Flatten DTCG nested structure → { 'color.background': '#fff', ... }
function flatten(obj, prefix = '') {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith('$')) continue;
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && '$value' in v) {
      out[path] = v.$value;
    } else if (v && typeof v === 'object') {
      Object.assign(out, flatten(v, path));
    }
  }
  return out;
}

const primitivesFlat = flatten(primitives);
const baseFlat = flatten(base);
const lightFlat = flatten(light);
const darkFlat = flatten(dark);

// ---- Generate dist/tokens.css ------------------------------------------

function cssLine(name, value) {
  // Convert nested path to CSS var name:
  //   "color.background" → "--background"  (shadcn convention drops the color. namespace)
  //   "font.sans"        → "--sans"        (matches the @theme block's var(--sans))
  //   "radius"           → "--radius"
  // Any remaining dots are replaced with dashes (CSS var names can't contain dots).
  let varName;
  if (name.startsWith('color.')) varName = `--${name.slice(6)}`;
  else if (name.startsWith('font.')) varName = `--${name.slice(5)}`;
  else varName = `--${name.replace(/\./g, '-')}`;
  return `  ${varName}: ${value};`;
}

function resolveAlias(value) {
  // DTCG references like "{primitives.color.white}" → "#FFFFFF".
  // The lookup table merges primitives + base + light tokens; semantic
  // tokens reference primitives by path. We iterate up to 10 times to
  // resolve chained references (alias → alias → final value), though
  // currently we only have one level of indirection (semantic → primitive).
  if (typeof value !== 'string') return value;
  const flat = { ...primitivesFlat, ...baseFlat, ...lightFlat };
  let prev = value;
  for (let i = 0; i < 10; i++) {
    const next = prev.replace(/\{([^}]+)\}/g, (_, path) => flat[path] ?? `{${path}}`);
    if (next === prev) return next;
    prev = next;
  }
  return prev;
}

const rootBlock = [
  ...Object.entries(baseFlat).map(([k, v]) => cssLine(k, resolveAlias(v))),
  ...Object.entries(lightFlat).map(([k, v]) => cssLine(k, resolveAlias(v))),
].join('\n');

const darkBlock = Object.entries(darkFlat)
  .map(([k, v]) => cssLine(k, resolveAlias(v)))
  .join('\n');

// Forced-light escape hatch: re-declares the light values closer than any
// ancestor .dark, for subtrees that must render light regardless of the
// document theme (screenshot capture, future mixed-theme surfaces). Key
// coverage vs .dark is guaranteed by the light↔dark parity gate (Check B
// in scripts/check_design_token_drift.mjs).
const lightBlock = Object.entries(lightFlat)
  .map(([k, v]) => cssLine(k, resolveAlias(v)))
  .join('\n');

// @theme block maps tokens to Tailwind v4 utility colors. Mirrors what
// `npx shadcn init` writes — Tailwind picks these up so `bg-background`,
// `text-foreground`, `border-border`, etc. all resolve to our token values.
// The --color-* lines are auto-emitted from light.json's color keys, so new
// semantic tokens (state tokens, etc.) get Tailwind utilities automatically —
// no need to hand-maintain this list when adding a token.
const colorThemeLines = Object.keys(lightFlat)
  .filter((k) => k.startsWith('color.'))
  .map((k) => {
    const name = k.slice('color.'.length);
    return `  --color-${name}: var(--${name});`;
  })
  .join('\n');

const themeBlock = `@theme inline {
  --font-sans: var(--sans);
  --font-heading: var(--heading);
${colorThemeLines}
  --radius-none: var(--radius-0);
  --radius-2xs: var(--radius-2);
  --radius-xs: var(--radius-4);
  --radius-sm: var(--radius-6);
  --radius-md: var(--radius-8);
  --radius-lg: var(--radius-10);
  --radius-xl: var(--radius-12);
  --radius-2xl: var(--radius-14);
  --radius-3xl: var(--radius-16);
  --radius-4xl: var(--radius-20);
  --radius-5xl: var(--radius-24);
  --radius-round: var(--radius-9999);
  /* Typography composite scale (PEA-219). Each --text-* carries its paired
     line-height / letter-spacing / font-weight, so one utility = one Figma
     text style. Headings bundle Semibold; body weight comes from font-* (the
     <Text> weight prop). Line-heights are absolute rem (exact px) to keep the
     drift gate clean. Body sizes equal Tailwind defaults; headings adopt
     Figma's tighter leading. Mirrored 1:1 by figma-snapshot-typography.json. */
  --text-heading-1: 3rem;
  --text-heading-1--line-height: 3rem;
  --text-heading-1--letter-spacing: -0.031em;
  --text-heading-1--font-weight: 600;
  --text-heading-2: 1.875rem;
  --text-heading-2--line-height: 1.875rem;
  --text-heading-2--letter-spacing: -0.033em;
  --text-heading-2--font-weight: 600;
  --text-heading-3: 1.5rem;
  --text-heading-3--line-height: 1.8rem;
  --text-heading-3--letter-spacing: -0.042em;
  --text-heading-3--font-weight: 600;
  --text-heading-4: 1.25rem;
  --text-heading-4--line-height: 1.5rem;
  --text-heading-4--font-weight: 600;
  --text-body-lg: 1.125rem;
  --text-body-lg--line-height: 1.6875rem;
  --text-body: 1rem;
  --text-body--line-height: 1.5rem;
  --text-body-sm: 0.875rem;
  --text-body-sm--line-height: 1.25rem;
  --text-body-xs: 0.75rem;
  --text-body-xs--line-height: 1rem;
}`;

const css = `/* AUTO-GENERATED — do not edit. Run \`npm run build\` in this package. */
/* Source: packages/cw-design-system-ts/tokens/{primitives,base,light,dark}.json (DTCG) */
/* Semantic tokens (light/dark) reference primitives via DTCG aliases; resolved here. */
/* Style Dictionary config: style-dictionary.config.js */

:root {
${rootBlock}
}

.dark {
${darkBlock}
}

/* Forced-light escape hatch — light values re-declared so a subtree can
 * render light below a .dark ancestor (screenshot capture, mixed-theme
 * surfaces). Placed after .dark so it wins at equal specificity. */
.light {
${lightBlock}
}

${themeBlock}
`;

// ---- Generate dist/tokens.ts -------------------------------------------

function tsObject(obj, indent = 2) {
  const pad = ' '.repeat(indent);
  const entries = Object.entries(obj)
    .filter(([k]) => !k.startsWith('$'))
    .map(([k, v]) => {
      if (v && typeof v === 'object' && '$value' in v) {
        return `${pad}'${k}': ${JSON.stringify(v.$value)}`;
      } else if (v && typeof v === 'object') {
        return `${pad}'${k}': ${tsObject(v, indent + 2)}`;
      } else {
        return `${pad}'${k}': ${JSON.stringify(v)}`;
      }
    });
  return `{\n${entries.join(',\n')}\n${' '.repeat(indent - 2)}}`;
}

const ts = `// AUTO-GENERATED — do not edit. Run \`npm run build\` in this package.
// Source: packages/cw-design-system-ts/tokens/{primitives,base,light,dark}.json (DTCG)
//
// lightTokens / darkTokens preserve the DTCG alias references ({primitives.color.X.Y}).
// Consumers needing resolved hex values should reference primitiveTokens to dereference,
// or use the compiled CSS variables in tokens.css which are pre-resolved.

export const primitiveTokens = ${tsObject(primitives.primitives)} as const;

export const baseTokens = ${tsObject(base)} as const;

export const lightTokens = ${tsObject(light)} as const;

export const darkTokens = ${tsObject(dark)} as const;

export const tokens = {
  primitives: primitiveTokens,
  base: baseTokens,
  light: lightTokens,
  dark: darkTokens,
} as const;

export type Tokens = typeof tokens;
`;

// ---- Generate dist/tokens.d.ts -----------------------------------------

const dts = `// AUTO-GENERATED — do not edit. Run \`npm run build\` in this package.

export declare const primitiveTokens: Record<string, unknown>;
export declare const baseTokens: Record<string, unknown>;
export declare const lightTokens: { color: Record<string, { $value: string; $type: string }> };
export declare const darkTokens: { color: Record<string, { $value: string; $type: string }> };
export declare const tokens: {
  primitives: typeof primitiveTokens;
  base: typeof baseTokens;
  light: typeof lightTokens;
  dark: typeof darkTokens;
};
export type Tokens = typeof tokens;
`;

// ---- Write outputs -----------------------------------------------------

const distDir = resolve(__dirname, 'dist');
mkdirSync(distDir, { recursive: true });
writeFileSync(resolve(distDir, 'tokens.css'), css);
writeFileSync(resolve(distDir, 'tokens.ts'), ts);
writeFileSync(resolve(distDir, 'tokens.d.ts'), dts);

console.log(`✓ Compiled tokens → dist/{tokens.css, tokens.ts, tokens.d.ts}`);
console.log(`  Primitives:   ${Object.keys(primitivesFlat).length} (resolved at build, not emitted as CSS vars)`);
console.log(`  Base tokens:  ${Object.keys(baseFlat).length}`);
console.log(`  Light colors: ${Object.keys(lightFlat).length}`);
console.log(`  Dark colors:  ${Object.keys(darkFlat).length}`);

// Keep reference to StyleDictionary for future use (more advanced transforms,
// platform-specific outputs, etc.) — currently using a hand-rolled compiler
// because the DTCG → CSS-with-modes structure shadcn expects is unusual
// enough that fighting StyleDictionary's default platforms cost more than
// writing 100 lines of straightforward JS.
void StyleDictionary;
