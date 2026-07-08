# CONVENTIONS — Coherence Workstation Design System

The bridge between the **CWS Design System Figma library** and the **React primitives** in [`src/components/ui/`](src/components/ui/) (this package — import as `@coherence/design-system/ui/<name>`; the two workstation-only components HelpTip/VizCard stay in [`desktop/src/components/ui/`](../../desktop/src/components/ui/) as `@/components/ui/<name>`).

Read this before migrating any screen in Phase 5. The §2 lookup table is the contract — if a Figma component name doesn't appear there, **ask** rather than guess.

See [phase-4-audit.html](../../docs/design-system/phase-4-audit.html) for the source data behind these decisions.

---

## 1. Naming convention (Figma side)

The kit uses **Title Case with Spaces**. Three special separators carry meaning:

| Pattern | Meaning | Example |
|---|---|---|
| `Title Case With Spaces` | Component name | `Button Group`, `Alert Dialog` |
| `Parent / Variant` | Variant or state of a parent component | `Sidebar Item / Collapsed` |
| `Name (Modifier)` | Visual modifier on a base component | `Accordion Trigger (Bordered)` |
| `Parent SiblingNoun` | Specialization sibling (orientation, content type) | `Slider Horizontal`, `Dialog Header` |
| `Icon / kebab-case` | Lucide icon (~600 of these in the kit) | `Icon / chevron-right` |
| `.Component` (leading dot) | Private / internal — don't drop into screens | `.Logo` |

**Translation rule for React.** shadcn ships kebab-case filenames and PascalCase exports. The mapping is mechanical:

> Figma `Button Group` → React file `button-group.tsx` → React export `<ButtonGroup>`

Whenever §2 below shows a Figma name, apply this rule to find the React side.

---

## 2. Figma ↔ React lookup table

Designers: "what's this component called in code?" Claude: "what Figma name does this React primitive correspond to?"

| Figma component | React primitive | Notes |
|---|---|---|
| `Accordion Trigger`, `Accordion Content` | `<Accordion>` | Figma splits into trigger + content sub-components; React composes via `<AccordionItem><AccordionTrigger/><AccordionContent/>` |
| `Accordion Trigger (Bordered)`, `Accordion Content (Bordered)` | `<Accordion>` with `className="border-b"` | Modifier, not a separate primitive |
| `Alert` | `<Alert>` | |
| `Alert Dialog` | `<AlertDialog>` | |
| `Avatar` | `<Avatar>` | |
| `Avatar Stack` | Compose `<Avatar>` × N with negative-margin classes | See §5 |
| `Badge` | `<Badge>` | |
| `Icon Badge` | `<Badge>` with an icon child | Kept separate in Figma for designer ergonomics; in React just put an icon inside `<Badge>` |
| `Basic Table Cell`, `Basic Table Header` | `<TableCell>`, `<TableHead>` with className modifier | Visual variant of the regular table parts |
| `Breadcrumb` | `<Breadcrumb>` | |
| `Button` | `<Button>` | See §3 for variant + size guidance |
| `Button Group` | `<ButtonGroup>` | |
| `Button Group Icon Button` | `<ButtonGroup>` containing `<Button size="icon">` | Composition, not a new primitive |
| `Calendar` | `<Calendar>` | |
| `Card` | `<Card>` | |
| `Carousel`, `Carousel with Image` | `<Carousel>` | "with Image" = put `<img>` children inside |
| `Checkbox`, `Checkbox Group`, `Rich Checkbox Group` | `<Checkbox>` | Group + Rich Group are compositions — see §5 |
| `Command`, `Command Item` | `<Command>`, `<CommandItem>` | |
| `Dialog`, `Dialog Header`, `Dialog Footer` | `<Dialog>` with `<DialogHeader>`, `<DialogFooter>` sub-exports | |
| `Drawer` | `<Drawer>` | |
| `Empty` | `<Empty>` | |
| `Field` (`Horizontal Field`, `Vertical Field`) | `<Field>` | Orientation split in Figma; in React use an `orientation` prop or className. See §4 |
| `Hover Card` | `<HoverCard>` | |
| `Icon / *` | Lucide React (`<ChevronRight />` etc.) | Import from `lucide-react`; the Figma name after `Icon /` is the lucide name |
| `Icon Button` | `<Button size="icon">` (or `icon-xs` / `icon-sm` / `icon-lg`) | Not a separate React primitive |
| `Input`, `Input File`, `Input OTP` | `<Input>`, `<Input type="file">`, `<InputOTP>` | |
| `Item` | `<Item>` | Generic list item primitive |
| `Kbd`, `Kbd Combo` | `<Kbd>` | "Combo" = multiple `<Kbd>` joined with a `+` separator |
| `Label` | `<Label>` | |
| `Link Button` | `<Button variant="link">` (or `asChild` wrapping `<a>`) | |
| `Loading Button` | `<Button disabled>` with `<Spinner />` and label inside | See §5 |
| `Menu`, `Menu Item` | `<DropdownMenu>` / `<ContextMenu>` / `<Menubar>` (+ their `Item` sub-exports) | Figma collapses all menu kinds into one component. See §4 |
| `Navigation Menu` | `<NavigationMenu>` | |
| `Pagination`, `Pagination Button` | `<Pagination>`, `<PaginationLink>` / `<PaginationItem>` | |
| `Progress` | `<Progress>` | |
| `Radio`, `Radio Group`, `Rich Radio Group` | `<RadioGroup>`, `<RadioGroupItem>` | Rich Group is a composition — see §5 |
| `Resizable` | `<Resizable>` | |
| `Scrollbar` | `<ScrollArea>` | Different name same UI — kit emphasizes the chrome, React emphasizes the container |
| `Select & Combobox` | `<Select>` OR `<Combobox>` | Combined in Figma, split in React. See §4 |
| `Select Menu Overflow`, `Select Menu Group Label` | `<SelectGroup>`, `<SelectLabel>` sub-exports | |
| `Separator` | `<Separator>` | |
| `Sheet` | `<Sheet>` | |
| `Sidebar Item / Collapsed`, `Sidebar Item / Expanded / 1st Level`, `Sidebar Item / Expanded / 2nd Level`, `Sidebar Badge`, `Sidebar Group Label` | `<Sidebar>` and its sub-exports | See §4 — Figma decomposes into 5 primitives, React unifies. Dedicated sub-table |
| `Skeleton`, `Skeleton / Placeholder Line`, `Skeleton / Placeholder Avatar`, `Skeleton / Placeholder Object` | `<Skeleton>` with size classes | Kit ships named placeholder variants; React is generic — apply sizing per the variant |
| `Slider Horizontal`, `Slider Vertical` | `<Slider>` with `orientation="horizontal"` (default) or `"vertical"` | See §4 |
| `Spinner` | `<Spinner>` | |
| `Status dot` | `<StatusDot status="…">` | Decorative 8px status-indicator dot (success/info/warning/error), aria-hidden — pairs with an adjacent label. Figma node 4620:42 |
| `Status pill` | `<StatusPill status="…" strength="subtle\|strong" showDismiss onDismiss>` | Status-tinted chip (success/info/warning/error). `strength="subtle"` (default) is the flat status token pair (§8); `strength="strong"` is the solid status fill + white text (error → the `destructive` fill). Optional `showDismiss` renders a trailing X (interactive when paired with `onDismiss`). Distinct from `<Badge>` (neutral/semantic) and the solid `destructive` button role. Figma node 4620:33 |
| `Stepper` *(no Figma twin yet)* | `<Stepper value … onDecrement onIncrement>` | Bordered "− value +" numeric nudge (raw-trace window/speed/gain steppers). Reconciles the Figma clusters' off-system `unofficial/*` border/fill to `input-border`/`input-background`. `reactOnly` in `map.json` until the Figma component is authored. Supports optional `decrementIcon`/`incrementIcon` for nav-style steppers. |
| `CheckboxField` *(no Figma twin yet)* | `<CheckboxField label checked onCheckedChange>` | Bordered checkbox "chip" (Figma "Phy" / "Show marks" toolbar fields). Reconciles the chip's `unofficial/*` border/fill to `input-border`/`input-background`. `reactOnly` in `map.json`. |
| `Bubble` *(no Figma twin yet)* | `<Bubble>` + `<BubbleContent>` / `<BubbleGroup>` / `<BubbleReactions>` | Chat message bubble, 7 variants (`default`/`secondary`/`muted`/`tinted`/`outline`/`ghost`/`destructive`). June 2026 shadcn chat set, re-architected from the upstream `cn-*` skin layer to inline cva + kit tokens. `secondary`/`muted`/`tinted` resolve to the same neutral in our tokens. `reactOnly` in `map.json`. |
| `Message` *(no Figma twin yet)* | `<Message>` + `MessageAvatar`/`MessageContent`/`MessageHeader`/`MessageFooter`/`MessageGroup` | Chat message row (avatar + header + bubble + footer; `align` start/end). June 2026 chat set. `reactOnly` in `map.json`. |
| `Attachment` *(no Figma twin yet)* | `<Attachment>` + `AttachmentMedia`/`Content`/`Title`/`Description`/`Actions`/`Action`/`Trigger`/`Group` | Chat file/media attachment chip; `state` (idle/uploading/processing/error/done) × `size` (default/sm/xs) × `orientation`. June 2026 chat set. `reactOnly` in `map.json`. |
| `Marker` *(no Figma twin yet)* | `<Marker>` + `<MarkerIcon>` / `<MarkerContent>` | In-thread marker / separator / section break (`default`/`separator`/`border`). June 2026 chat set. `reactOnly` in `map.json`. |
| `MessageScroller` *(no Figma twin yet)* | `<MessageScroller>` + `Provider`/`Viewport`/`Content`/`Item`/`Button` | Autoscrolling chat viewport; scroll-anchoring behavior from `@shadcn/react` (new dep), styling re-architected to kit tokens. June 2026 chat set. `reactOnly` in `map.json`. |
| `Switch`, `Switch Group`, `Rich Switch Group` | `<Switch>` | Group + Rich Group are compositions — see §5 |
| `Table Cell`, `Table Header` | `<TableCell>`, `<TableHead>` | Figma has no top-level `Table`; React unifies. See §4 |
| `Tabs`, `Tab` | `<Tabs>`, `<TabsTrigger>` | |
| `Textarea` | `<Textarea>` | |
| `Toggle Button`, `Toggle Icon Button` | `<Toggle>` with icon child (or `<Toggle size="…">`) | No bare "Toggle" in Figma; the button variants are the design surface |
| `Tooltip` | `<Tooltip>` | |
| Text styles: `heading-1`…`heading-4`, `body-lg` / `body` / `body-sm` / `body-xs` | `<Text variant="…">` | **Typography.** Each Figma text style name = one `variant`. Body styles' `/regular` `/medium` `/bold` → the `weight` prop (`font-normal/medium/semibold`); headings carry Semibold intrinsically. `caption` / `monospaced` were retired (rebound to `body-sm` / `body`). Values gated by `check_typography_drift.mjs`. See §3. |

**Not yet in Figma** (deferred; compose from existing primitives if needed in Phase 5): `aspect-ratio`, `collapsible`, `input-group`, `toggle-group`.

**React-only by design** (no Figma frame expected): `native-select` (raw HTML), `popover` (positioning behavior), `sonner` (installed but unused — see §6).

---

## 3. Variant intent

When a Figma component maps to a React primitive that has a `variant` prop, here's which value to reach for. The shadcn defaults are tuned for general SaaS — these notes lean toward what works in a clinical app.

### `<Button>`

| Variant | When |
|---|---|
| `default` | The primary action in a form or dialog. Solid fill. |
| `destructive` | Irreversible action (delete a session, remove a clinic). Confirm dialog should still front-stop it. |
| `outline` | Secondary action in the same row as a `default` button (Cancel next to Save). |
| `secondary` | Standalone action that's not primary but also not a Cancel. Filled, lower contrast. |
| `ghost` | Toolbar buttons, icon buttons that need to fade into chrome. |
| `link` | Inline text affordance that does something. Prefer over wrapping a styled `<a>`. |

`size`: use `default` for form actions, `sm` for inline / dense UI, `lg` for prominent CTAs. Use `icon` / `icon-xs` / `icon-sm` / `icon-lg` for icon-only buttons — these are square hit-targets, NOT `default` size with an icon inside.

### `<Badge>`

| Variant | When |
|---|---|
| `default` | Primary status emphasis. |
| `secondary` | Neutral metadata (count, label). |
| `destructive` | Error or violation indicator. |
| `outline` | Low-emphasis status; pairs well in tables. |
| `ghost` | Hover-state badges that need to recede. |
| `link` | Badge that is itself a link. |

### `<Alert>`

| Variant | When |
|---|---|
| `default` | Neutral informational surface. |
| `success` / `info` / `warning` / `error` | Status surfaces — a soft status-tinted fill + a subtle fill-matching border + the brighter status text, one per status (the flat status token pairs, §8 — same family as Status Pill). `error` is the successor to the old `destructive` variant. **Not** a popup — see §6. |

### `<Toggle>`

| Variant | When |
|---|---|
| `default` | In a transparent toolbar; the toggle's pressed state shows the accent. |
| `outline` | Standalone toggle that needs visible chrome regardless of state. |

`size`: `default` / `sm` / `lg`. Matches Button sizing.

### `<Text>`

The closed, typed text-style set — a `cva` variant union that **is** the Figma text styles (size + line-height + letter-spacing baked into a composite `@theme --text-*` token). **For any text in a feature/screen, reach for `<Text>` — not raw `text-*` utilities.** This keeps an agent (and you) choosing from the same closed set as Figma's style picker; off-menu values don't compile.

| `variant` | When |
|---|---|
| `heading-1` … `heading-4` | Page / section / sub-section titles (48 / 30 / 24 / 20px, Semibold, tight leading). |
| `body-lg` | Lead paragraph / emphasized body (18px). |
| `body` | Default paragraph / UI text (16px). |
| `body-sm` | Dense UI, secondary text, labels (14px — the workhorse). |
| `body-xs` | Captions, metadata, fine print (12px). |

`weight` (body only): `regular` (default) / `medium` / `bold` (= Semibold 600). Headings ignore it. Use `asChild` for the correct semantic element — `<Text variant="heading-2" asChild><h2>…</h2></Text>` — since `<Text>` defaults to a `<span>`. Color is a separate concern: pass a color class (`className="text-foreground-muted"`); it merges cleanly with the size token.

---

## 4. Structural divergences (rulings)

### 4.1 Button family — many Figma components, one React primitive

Figma has 9 button-family components; React has 1 `<Button>` with a `variant` × `size` matrix. **Use React's matrix; don't try to flatten Figma.** The §2 lookup table maps each Figma button name to a specific (variant, size) combination or composition.

### 4.1b Button family — state→token contract (audited + fixed, June 2026)

Figma's four button sets are token-per-token aligned with `button.tsx` — proven by
[`component-state-audit.html`](../../docs/design-system/component-state-audit.html) (252 matched cells, 0 mismatches).
The contract per variant (Default / Hover & Active / Focus / Disabled states):

| Variant | Fill (rest → hover) | Text/icons | Border | Focus |
|---|---|---|---|---|
| Primary | `background/primary` → `-hover` | `foreground/default-inverse` | — | "focus ring" style |
| Secondary | `background/secondary` → `-hover` | `foreground/default` | — | "focus ring" |
| Outline / Loading | `input/background` → `input/background-hover` | `foreground/default` | `input/border` (Focus: `ring/default`) | composite "focus ring + shadow-sm" (ring + rest shadow in one style) |
| Ghost | none → `background/accent` | `foreground/default` | — | "focus ring" |
| Destructive | `background/destructive` → `-hover` | `foreground/white` | — | "focus ring error" |
| Link (set) | none | `foreground/primary` | — | "focus ring" |

Disabled = 50% layer opacity everywhere. Focus states use the BOUND effect styles, never raw shadows. A shadow-bearing
focus state (any control with `shadow-sm` at rest) binds the **composite** style — `focus ring + shadow-sm` or
`focus ring error + shadow-sm` — which stacks the ring drop-shadow over the rest shadow-sm in a single bound style.
Flat focus states (Primary/Secondary/Ghost, Destructive, inactive Tab) keep the plain `focus ring` / `focus ring error`.

**Resolved limitation — one effect style per node.** A Figma node binds at most one effect *style*, so a shadow-bearing
control's focus variant used to drop shadow-sm under the ring (was amber/policy). Two composite styles (above) now
bundle both effects, so those focus states show ring **and** shadow — Figma mirrors code. The composite's ring layer
binds the same gated `ring/focus` / `ring/error` variable as the plain style; the shadow layer is the gated shadow-sm.

**One documented Figma limitation remains** (code keeps the real behavior; do not "fix" it in Figma):
1. **Shared `Label` TEXT property syncs styling across variants** (Link/Loading) — kept deliberately because it
   preserves text overrides across variant swaps (a Figma-ism, per ruling). Consequence: no Figma-side hover
   underline or per-size label styles on those two sets. Any styling edit to a property-bound label broadcasts
   to ALL variants — never restyle these labels per-variant via API or UI without checking the whole set after.

### 4.1c Composite Figma sets must NEST kit instances, never duplicate internals

When a Figma component visually contains another kit component (a button inside a group, a badge
inside a cell), it must nest a real INSTANCE of that component — never a redrawn copy of its layers.
Duplicated internals silently stop inheriting token fixes and drift (Button Group accumulated 136
mismatched cells this way before being restructured, June 2026).

**Button Group is the precedent**: each of its 96 children nests a real `Button` instance
(Skin→Variant, State→State, Hover→"Hover & Active") with per-corner radius overrides expressing the
segment position (`Left`: right corners 0 · `Middle`: all 0 · `Right`: left corners 0), mirroring
`button-group.tsx`'s `rounded-l-none`/`rounded-r-none`. The nested instance is **exposed**, so label
and icons are edited on the inner Button (the group-level Label/icon props were retired). Two notes:
per-side stroke zeroing (`border-l-0`) is code-only — Figma keeps a uniform 1px stroke (per-side
weights aren't instance-overridable); and segment corners are overrides, not Button variants.

**Known duplicated-internals debt** (future rebind passes, audited red in `component-state-audit.html`):
`Button Group Icon Button` (kept standalone per ruling — it is its own button, not a Button child)
and `Toggle Button`/`Toggle Icon Button` (genuinely independent `toggleVariants` component in code).

### 4.2 `Select & Combobox` combined in Figma, split in React

Figma keeps them as one component for designer ergonomics; React keeps them as two primitives because they wrap different Radix machinery and have different UX. **Decide by UX intent**:

- Dropdown of pre-set values, no typing → `<Select>` (Radix Select internally).
- Type-to-filter typeahead, possibly with arbitrary input → `<Combobox>` (Radix Popover + cmdk internally).

If the Figma frame is ambiguous, ask the designer which one.

### 4.3 Orientation-split (Field, Slider)

Figma splits by orientation; React uses a prop or className. Both are fine.

- `Horizontal Field` → `<Field orientation="horizontal">`
- `Vertical Field` → `<Field orientation="vertical">` (default)
- `Slider Horizontal` → `<Slider orientation="horizontal">` (default)
- `Slider Vertical` → `<Slider orientation="vertical">`

### 4.4 Sidebar — decomposed in Figma, unified in React

Figma exposes 5 distinct sidebar primitives; React has one big `<Sidebar>` with sub-exports. Mapping:

| Figma | React |
|---|---|
| `Sidebar Item / Collapsed` | `<SidebarMenuItem>` inside a collapsed `<Sidebar>` |
| `Sidebar Item / Expanded / 1st Level` | `<SidebarMenuItem>` (top-level) inside an expanded `<Sidebar>` |
| `Sidebar Item / Expanded / 2nd Level` | `<SidebarMenuSubItem>` (nested) inside an expanded `<Sidebar>` |
| `Sidebar Badge` | `<SidebarMenuBadge>` |
| `Sidebar Group Label` | `<SidebarGroupLabel>` |

---

## 5. Mapping notes for Figma-only components

For Figma components without a dedicated React primitive, here's how to compose them. **None of these justify adding a new React primitive** — they're recipes.

- **Avatar Stack** — `<div className="flex -space-x-2">` of `<Avatar>` children with `border` to separate visually.
- **Loading Button** — `<Button disabled><Spinner className="mr-2 size-4" />Label</Button>`.
- **Icon Button** — `<Button variant="…" size="icon"><Icon /></Button>`. Pick the icon-* size for the target hit area.
- **Link Button** — `<Button variant="link">` (or `<Button asChild><a /></Button>` when it really is a navigation link).
- **Toggle Icon Button** — `<Toggle size="…"><Icon /></Toggle>`.
- **Pagination Button** — already part of `pagination.tsx` as `<PaginationLink>` and `<PaginationItem>`.
- **Carousel with Image** — `<Carousel>` with `<CarouselItem>` children containing `<img>`.
- **Rich Checkbox Group / Rich Radio Group / Rich Switch Group** — the "Rich" variant means each item has a description slot underneath the primary label. Compose with the regular `<Checkbox>` / `<RadioGroupItem>` / `<Switch>` + a flex layout + secondary `<p>` text.
- **Switch Group** — no shadcn equivalent; compose with several `<Switch>` + `<Label>` rows.
- **Sidebar Badge / Group Label / Menu Overflow** — already React sub-exports (see §4.4 and the lookup table).
- **Dialog Header / Footer** — already `<DialogHeader>` / `<DialogFooter>` sub-exports.

---

## 6. Hard rules (do not casually override)

These are carve-outs that earlier phases established and are easy to forget. If a Phase 5 screen seems to require violating one, **stop and ask**.

- **Data-vis colors and `canvas-tokens.ts` are off-limits.** The clinical visualizations have their own constrained palette ([Coherence_Workstation_Spec.md](../../Coherence_Workstation_Spec.md)). Don't reach for design-system tokens inside data-vis renderers. **One sanctioned exception:** the clinical **vigilance severity ramp** (`foreground-vigilance-{0,a1,a2,a3,b1,b2,b3,c}`) — an 8-step Loomis alertness→sleep scale minted into the kit so the redesigned Vigilance strip (`VigilanceStripV2`) has DS-native, gated colours instead of raw hex. It's the only clinical ramp the kit provides; other clinical-viz colour stays in the spec palette, and a *second* such ramp needs a fresh ruling. (Theme-independent — same primitive in light + dark; red end capped at 500/600/700 for legibility on the dark muted track.)
- **No popups on crash.** `sonner` is installed for catalog completeness but the project explicitly avoids it for error surfaces. Errors render inline with `role="alert"` rows (see `ReportProblemDialog`). If you find yourself adding `<Toaster>` to fix an error UX, that's the wrong fix.
- **No Recharts, no D3 swap-ins.** Clinical-viz hard guard — that's why `chart` was skipped during the shadcn catalog install (Phase 2.5).
- **`<Field>` adoption is an architectural shift, not a primitive swap.** `field.tsx` pulls `@base-ui/react` (the only base-ui dep left). Reaching for `<Field>` from a screen migration is fine; refactoring an existing form to use it is a separate conversation.
- **Don't rename React files to match Figma case.** The shadcn install convention is kebab-case; the bridge is this lookup table, not a rename pass.
- **For text, use `<Text variant>` — not raw `text-*` in feature code.** Typography is a closed, typed set (§3). The size scale is the only sanctioned way to size text; raw `text-sm` / arbitrary `text-[15px]` in screens is off-system. (A CI gate forbidding raw `text-*` in feature code is **deferred** — app code still carries ~1,371 arbitrary uses — but the convention applies now. Kit internals in `components/ui` may keep utilities.)
- **The design system stays self-contained (it is mirrored to a public repo).** `packages/cw-design-system-ts` is mirrored verbatim to the public `coherence-design-system` repo and consumed by BOTH the workstation and the recorder (SPEC-033). Its `src/` must import only within-package relative paths and its own declared deps/peers — never a sibling `@coherence/*` package (e.g. `@coherence/workstation-sdk`), the `@/…` host alias, or anything under `desktop/`/`plugins/`/`cw_eeg`. A reach-across breaks the mirror. Enforced by `scripts/check_mirror_self_contained.py` in CI. The same rule applies to `@coherence/workstation-sdk`.

### 6.1 Modal & form composition (kit `Dialog`, `Select`, `Label`)

Audited June 2026 after the Plan dialogs first shipped with native OS menus, muted labels, and a hand-rolled modal shell — none of which read as "the design system." The rule for **every redesigned dialog and form**:

- **Use the kit `Dialog` as-is — don't re-skin it.** `DialogContent` already sets the padding (`p-6`), inter-section spacing (`gap-4`), border, shadow, and overlay. Don't override them with `p-0` / `gap-0`, and don't add internal `border-b` / `border-t` dividers or tight `px-3 py-2` padding to recreate the legacy `WorkstationFindingDialog` chrome. Tall content scrolls with `max-h-[85vh] overflow-y-auto` on `DialogContent` — not a bespoke `flex flex-col` shell. The kit `Dialog` also portals into the nearest `WorkstationThemeScope` (so it inherits `.dark`); see `dialog.tsx` / `lib/portal`.
- **Never ship a native OS menu for a picker.** `NativeSelect` (an HTML `<select>`) renders the platform's native dropdown, which doesn't match the system. Use the kit `<Select>` (Radix, §4.2) for pre-set-value pickers. Two gotchas: a Radix `<SelectItem>` **cannot** have an empty-string `value` — map an "any / none / ad-hoc" choice to a sentinel (e.g. `'__adhoc__'`) and translate at the `onValueChange` boundary; an *unselected* state is `value=""` on the root, which shows the `<SelectValue placeholder>`. (The one exception is free-text-with-suggestions — that's an `<Input list>` + `<datalist>` or a `<Combobox>`, never a `<Select>`.)
- **Form field labels are the kit `<Label>`, not muted `<Text>`.** A field label reads at `text-foreground-default`, weight-medium — never `text-foreground-muted` or any lighter color, which reads as disabled/secondary. For a label sitting over a non-`<input>` control (a button, a group), use `<Label asChild><span>…</span></Label>` to keep the styling without nesting `<label>` elements. (`text-foreground-muted` stays correct for genuinely *secondary* copy: status lines, helper/educational text, tags.)
- **No CTAs in a dialog's title bar.** The header holds the title and the kit's built-in close ✕ — nothing else. Primary/secondary actions go in `DialogFooter`; a secondary action that *configures* the form (e.g. "Manage catalog…") becomes its own labelled field in the body; a manager's toolbar (New / Import / Export) goes in a row *below* the header, not beside the title.

---

## 7. How to add a new pattern

When Phase 5 surfaces a need for a primitive or pattern that isn't here:

1. Create the Figma component using the §1 naming convention.
2. Create the React story (colocated `src/components/ui/*.stories.tsx` in this package) following the existing story conventions.
3. Add a row to the §2 lookup table.
4. **Add or extend the `components/map.json` entry (§9) in the same PR** — and if the Figma side changed, re-sweep `figma-snapshot-components.json`. The component-map gate fails the commit otherwise.
5. If it changes a structural ruling (§4), update that section with a one-line rule.
6. Commit the doc update with the implementing PR — not as a separate doc commit.

New kit components live in this package (`src/components/ui/`) with **relative** internal imports (`./button`,
`../../lib/utils`) so the package works in any consumer repo. `desktop/components.json` points the shadcn CLI's
`ui`/`utils`/`lib`/`hooks` aliases here, so `npx shadcn add` lands new components in the package — verify the
generated file's imports afterward and convert any `@coherence/design-system/...` self-imports to relative form
(the component-map gate catches unregistered components either way). Consumers (workstation, recorder) must import
`cn` from `@coherence/design-system/lib/utils` rather than rolling their own — it carries the custom tailwind-merge
typography classGroups the kit depends on.

That keeps this doc honest. A pattern that isn't in the lookup table doesn't exist *yet* as far as Phase 5 migrations are concerned — adding one through this process is fine and expected (don't recreate what's already here; do flag genuinely new needs and register them). What's never okay is building an unregistered lookalike inline.

---

## 8. Token vocabulary — flat state tokens (no opacity modifiers)

> 🎨 **Visual reference:** [`docs/design-system/token-reference.html`](../../docs/design-system/token-reference.html) is the
> generated, always-current map of all 50 tokens — code ↔ Figma name, the primitive each aliases, resolved hex, light/dark
> swatches, and which components use it. It's built from the token JSON, so it can't drift; regenerate with
> `node scripts/build_token_reference.mjs`.

Code used to compose state colors with Tailwind opacity modifiers (`bg-primary/90`, `ring-ring/50`, `bg-input/30`). Figma variables can't express "token × live opacity," so the kit drifted from code. PEA-219 removed that impedance with **flat tokens**; **Token Architecture v2 then renamed the whole kit vocabulary into the descriptive `{group}-{modifier}` system** — `background-*` (fills), `foreground-*` (all foreground ink — text + icons + contrast text), `border-*`, `ring-*`. One name, one resolved value per mode, identical in code and Figma. *(PEA-219 dissolved the old `on-*` contrast-text group into `foreground-*`: `on-secondary`/`on-accent` merged into `foreground-default` — value-identical in dark mode, but a deliberate one-step darkening in light mode (`neutral-900` #171717 → `neutral-950` #0A0A0A, an accepted consolidation to the canonical body-text ink); `on-destructive` → `foreground-white` (static white on colored fills); `on-primary` → `foreground-default-inverse` (the mode-flipping inverse). `sidebar-on-*` are unaffected — they belong to the `sidebar/` component set.)* The table below is the v2 names. *(The Figma variables take the matching `{group}/{modifier}` names in the gated Figma pass; `tokens/figma-snapshot.json` bridges the `-` ↔ `/` difference.)*

**Inverted surfaces.** `background-default-inverse` / `foreground-default-inverse` are a matched pair — exact mode-swaps (`#171717` / `#FAFAFA` and `#FAFAFA` / `#171717`) — for elements that must *oppose* the theme: a dark surface in light mode, light in dark. Use them together (surface fill + ink) instead of the old anti-pattern of painting a background with `foreground-default` and the text with `background-default` (semantically backwards). The Tooltip is the canonical consumer.

**In the kit (`src/components/ui/` here, plus HelpTip/VizCard in `desktop/src/components/ui/`), use the flat token. Never use the opacity form, and never use a raw color literal (`bg-[#fff]`, `bg-[rgba(...)]`).**

**Role purity: tokens paint only their own role.** `background-*` fills, `foreground-*` ink, `border-*` strokes, `ring-*` rings — a background token on a stroke (or a foreground token on a fill) is a violation even when the hex happens to match; mint or reuse the right-role twin instead (`foreground-primary` and `border-primary` both exist because of past violations). `input-*` and `ring-*` are component-family tokens and intentionally appear on whatever attribute their component needs.

**Sanctioned role-crossing exceptions (June 2026 ruling — these are deliberate shadcn idioms, do NOT "fix" them or flag them in the component audit):**
- **Avatar Stack** `ring-2 ring-background-default` — a knockout, not a ring; its job is literally "match the canvas color" so stacked avatars look punched out.
- **Separator / Scrollbar thumb / Resizable handle+grip** `bg-border-default` — a 1px (or hairline) line reads as a border; painting it with the border token is the canonical shadcn separator idiom. The fill *is* the line.
- **Switch unchecked track** `data-[state=unchecked]:bg-input-border` — the track is the input chrome's surface; reusing the input border token keeps track and field chrome in lockstep.
- **Input OTP fake caret** `bg-foreground-default` — the caret deliberately mimics text color, so it carries the text-ink token as a fill.
- **Navigation Menu indicator** `bg-border-default` — the small arrow/indicator reads as a chrome hairline, same idiom as Separator.

These are blessed because the role-crossed token is the *intended* visual identity (a line, a caret, a knockout), not an accidental hex coincidence. Anything not on this list still follows role purity.

| Flat class (v2) | Replaces (old form) | Role |
|---|---|---|
| `bg-background-primary-hover` | `bg-background-primary/90` | Primary button / control hover |
| `bg-background-primary-subtle` | `/5` · `/10` · `/20` | Faint primary tint (active row, progress track, checked fill) |
| `bg-background-secondary-hover` | `bg-background-secondary/80` · `/90` | Secondary button hover |
| `bg-background-accent-subtle` | `bg-background-accent/50` | Hover wash on ghost / menu items |
| `bg-background-muted-subtle` | `bg-background-muted/50` | Faint muted fill |
| `bg-background-destructive-hover` | `/90` · `dark:/60` | Destructive button hover |
| `bg-background-destructive-subtle` | `/10` · `/20` | Destructive menu-item focus fill |
| `text-foreground-white` | `text-white` on a destructive fill | Contrast text on a destructive fill |
| `text-foreground-destructive` | `text-destructive` (the red) | Destructive-coloured **text** (error messages) |
| `bg-background-{success,info,warning,error}` + `text-foreground-{success,info,warning,error}` (+ `border-border-{…}-subtle`) | a raw `bg-green-*` / `text-green-*` | The flat **status** pairs (Status Pill 1558:8809, status `Alert` 58:5416): one surface + one text token per status, light/dark; the `-subtle` border equals the surface so a status fill can carry a soft edge. `foreground-success` doubles as positive inline text ("connection successful", "key stored"). Distinct from the solid `destructive` button role. |
| `border-border-destructive` | `border-destructive` (the red) | Destructive-coloured **border** (invalid field, invalid-checked checkbox) |
| `border-border-{success,info,warning,error}-{subtle,emphasis}` | a raw `border-green-*` | Status **stroke** tokens (`STROKE_COLOR`-scoped, so a status colour can paint a border — fill/text status tokens can't). `-subtle` mirrors `background-{status}`, `-emphasis` mirrors `foreground-{status}`. |
| `border-border-primary` | `border-background-primary` (a background token on a stroke) | Checked/selected-control **border**: checked checkbox box, selected rich-group card, slider thumb |
| `ring-ring-focus` | `ring-ring/50` | Focus ring |
| `ring-ring-error` | `ring-…destructive/20` · `dark:/40` | Invalid-field ring |
| `bg-input-background` | `bg-transparent` / `dark:bg-input/30` | Input field background |
| `bg-input-background-hover` | `bg-input/50` | Input field hover background |
| `bg-background-overlay` | `bg-black/50` | Modal / dialog / sheet scrim |

**Carve-out — opacity is still fine on tokens that have no flat variant.** The off-limits roots are now `background-primary`, `background-secondary`, `background-accent`, `background-destructive`, `ring-default`, `input-background`, plus the `black` scrim. Tokens like `foreground-default`, `background-default`, `background-muted` (its lone `/30` wash has no flat equal), `border-subtle`, `status-*`, and `sidebar-foreground` have no flat state variant, so uses like `text-foreground-default/60` or `bg-background-default/10` are legitimate and left alone.

**Scope.** This section governs the **shadcn kit only**. App screens use the *workstation theme* (`text-primary`, `accent-primary`, `status-*`) — a separate token family with its own rules. Don't apply the kit's flat tokens there, and don't swap a workstation `text-primary/20` for `bg-primary-subtle`.

**Adding a new state token.** Add the key to **both** `tokens/light.json` and `tokens/dark.json` (each aliasing a primitive), run `npm run build` in `packages/cw-design-system-ts` to regenerate `dist/tokens.css`, then reference it as `bg-<name>` in components. The Figma side gets the same flat variable so the two stay aligned.

**Consuming the kit's CSS (standalone consumers).** A consumer that renders kit components must import, once at app entry, in this order: `@coherence/design-system/tokens.css` (the token custom-properties), `@coherence/design-system/fonts.css` (Inter), and `@coherence/design-system/base.css` (the border-color base reset). `base.css` exists because Tailwind v4 / shadcn components ship a bare `border` utility whose color falls back to `currentColor` — the kit owns the reset so bare borders (Card, Dialog, Sheet, Drawer, Hover Card, Navigation Menu, Resizable, Field choice rows, …) resolve to `--border-default` in any consumer. The workstation app already has its own reset in `desktop/src/index.css`, so it doesn't need `base.css`; the recorder and other standalone consumers do. (PEA-219 — added when the kit-wide audit found ~13 components relying on the app's reset for their border color.)

**Enforcement.** [`scripts/check_design_token_drift.mjs`](../../scripts/check_design_token_drift.mjs) runs in pre-commit (`design-token-drift` hook) and CI (frontend job), with three checks:

- **A — Component patterns:** no opacity-on-migrated-token and no raw color literals in `components/ui`. A violation prints the offending class and the flat token to use instead.
- **B — Token parity:** every semantic token is defined in both `light.json` and `dark.json` and compiled into `dist/tokens.css`.
- **C — Code ↔ Figma value match:** `dist/tokens.css` must match [`tokens/figma-snapshot.json`](tokens/figma-snapshot.json) — the resolved hex of the matching Figma `color` collection variables, for the **full v2 set (light + dark)**. Keeps code and Figma from drifting apart on values.
- **D — Code ↔ Figma name bijection:** every code token has exactly one snapshot entry whose `figmaName` is the `-`→`/` of its key, and vice-versa, with `figmaName` unique. Makes "1:1" a *closed set* — no code token without a Figma twin, none orphaned on the Figma side.

**The Figma snapshot, and how to refresh it.** CI can't reach Figma live and `use_figma` is interactive, so `tokens/figma-snapshot.json` is the committed code↔Figma contract. When a Figma variable value legitimately changes, re-pull it: ask Claude to read the `color` collection via `use_figma` (file `fOvC9IJr3X6yZngjotX2ws`), resolving each flat token's aliases to hex for both modes, and write the result into the snapshot — then bring `light.json`/`dark.json` in line and `npm run build`. Check C confirms the values agree; Check D confirms the name bijection. (All v2 tokens are verified 1:1 — value-identical in both modes and name-bijective via the snapshot; later additions include `border-subtle` (promoted `unofficial/border-1`), `foreground-primary` and `border-primary` (minted in the role-purity corrections), and the flat **status** family `background/foreground × success·info·warning·error` (sourced from the updated Status Pill, node 1558:8809 — `foreground-success` is green/700 light · green/400 dark, the positive counterpart to `foreground-destructive`; replaced the earlier `-subtle`/`-emphasis` success+warning pair).)

**Figma collection map (post-PEA-219 reorg — 6 collections, mirroring code).** `color` (the semantic role tokens, light/dark — renamed from `semantic`) · `primitives` (single-mode: `color/` 24 hex families + `color/brand/` + `alpha/` + `radius/` + `spacing/` numerics — exactly code's `primitives.{color,alpha,spacing}`) · `radius` (the named ladder — renamed from `border radii`) · `spacing` (the named `gap-N` scale) · `typography` · `shadows`. **Brand** (`primitives.color.brand.50–950` → blue aliases) is a gated reference layer with **no utility class** — don't invent `bg-brand-*`; promote it into the `@theme` only when a component genuinely needs brand. **Alpha** carries only the consumed rungs (5 of Figma's 30; the rest intentionally not-ported — add a rung in `primitives.json` + `figma-snapshot-alpha.json` together).

**The full gate set (7).** Beyond `check_design_token_drift.mjs` (A–D above): `check_shadow_drift.mjs` (5 elevation levels, both CSS sites == `figma-snapshot-shadows.json`) · `check_radius_drift.mjs` (the `radius` ladder == `@theme --radius-*`) · `check_spacing_drift.mjs` (every Figma `gap-N` on Tailwind's 4px grid) · `check_typography_drift.mjs` (the 8 `--text-*` composites == the renamed text styles) · `check_primitive_drift.mjs` (brand must alias blue 1:1 == `figma-snapshot-brand.json`; alpha == `figma-snapshot-alpha.json` + two-way usage vs `light/dark.json`) · `check_focus_drift.mjs` (the 3 base focus effect styles bind their gated ring tokens; 3px spread == the kit's `ring-[3px]` idiom — the 2 composite `… + shadow-sm` styles reuse those same gated ring layers, so they're covered transitively). All offline (committed snapshots), all wired into pre-commit + CI. The per-collection coverage matrix lives in [`docs/design-system/token-reference.html`](../../docs/design-system/token-reference.html).

**What the gate does *not* catch (by design).** It's a tripwire for the common regression, not a proof of correctness:
- **App screens aren't scanned.** Check A covers `components/ui` only. App-screen usages (including the deliberately-kept bespoke `ring-primary/40` in `ScreenshotAnnotator`) follow the workstation-theme rules and aren't gated — a broad scan would false-positive on `text-primary`/`accent-primary`.
- **The opacity rule keys on the literal class form** (`bg-primary/90`). The CSS-variable arbitrary syntax — `bg-(--primary)/90` or `bg-[--primary]/90` — is *also* prohibited but not detected. Don't reach for it to dodge the rule.
- **Check C only flags code drifting from the snapshot** — now the full 47-token v2 set in both modes, so the core semantic tokens (`primary`, `secondary`, …) *are* value-checked against Figma. What it can't catch: Figma changing *without* a snapshot refresh isn't detected until someone re-pulls via `use_figma`. It also doesn't re-run the build, so a value edit to `light.json`/`dark.json` that skips `npm run build` leaves `dist` stale until the next rebuild (Check B catches added/renamed keys, but not a same-name value change).

---

## 9. Component map — Figma instance → React props (the Code Connect substitute)

Token parity answers "same values"; the **component map** answers "same component, same props". It is how an agent
holding a Figma frame full of instances (e.g. `Button {Variant: Primary, Size: Mini, State: Hover & Active, Show left
icon: true}`) produces the real code (`<Button variant="default" size="xs"><Icon/>…</Button>`) instead of inventing.
Three layers:

- **Figma snapshot (generated, committed):** [`components/figma-snapshot-components.json`](components/figma-snapshot-components.json)
  — every public COMPONENT_SET/COMPONENT in the kit with its `componentPropertyDefinitions` verbatim (91 components;
  the `Icon / *` library and `.`-private components are excluded by class rule).
- **Code side (extracted live, never committed):** the cva variant unions + `defaultVariants` + export lists are parsed
  from `packages/cw-design-system-ts/src/components/ui/*.tsx` (+ the two workstation-only components in `desktop/src/components/ui/`) at gate runtime — code can't drift from the map silently.
- **Curated map (hand-written, the contract):** [`components/map.json`](components/map.json), keyed by Figma component
  name. Entry kinds: **`props`** (cva-backed prop mapping) · **`alias`** (fixed-prop projection — `Link Button` →
  `Button {variant:"link"}`) · **`recipe`** (composition template with real imports + structure) · **`blocked`** (§6 —
  charts; do not build, ask) · **`reactOnly` / `notInFigma`** (code-side markers with no Figma twin). Per-value mapping
  kinds: **`prop`** (React enum value) · **`pseudo`** (hover/focus — baked into component classes, **never a prop**) ·
  **`attr`** (`disabled`, `aria-invalid`, `defaultChecked`, …) · **`children`** (icon swaps/TEXT props → composed
  children; `Icon / x` → lucide PascalCase import) · **`class`** (utility classes) · **`ignore`** · **`unsupported`**
  (no code equivalent — STOP and ask; e.g. Button `Size: Extra Large`, any `Roundness: Round`).

**Enforcement** — `scripts/check_component_map_drift.mjs` (pre-commit hook `design-component-map-drift` + CI), four
checks: **A** code↔map (every cva value accounted for by a mapping or a `codeOnly` note; defaults match) · **B**
map↔snapshot (every Figma property and VARIANT value mapped; no phantom values) · **C** closed-set bijection (every
snapshot component has a map entry and vice versa) · **D** recipes/aliases resolve (import names exist as real exports).
Human view: [`docs/design-system/component-reference.html`](../../docs/design-system/component-reference.html)
(regenerate via `node scripts/build_component_reference.mjs`).

**Refreshing the Figma snapshot.** Like the token snapshots, CI can't reach Figma — when kit components change,
re-sweep via `use_figma` (file `fOvC9IJr3X6yZngjotX2ws`): for each component page, run
`page.findAllWithCriteria({ types: ['COMPONENT_SET','COMPONENT'] })`, filter names starting with `.` or `Icon / `,
and serialize each node's `componentPropertyDefinitions` (strip the `#id` suffix from property keys) plus `nodeId` and
page name into `componentSets`. One `setCurrentPageAsync` per call — fan pages out in parallel; skip the doc pages
(Thumbnail, About, Changelog, Colors, Typography, Icons, Shadows, Pro blocks, Screen examples). Then update `map.json`
for any new/changed properties and re-run the gate.

**The agent workflow** that consumes this map is the [`figma-to-code` skill](../../.claude/skills/figma-to-code/SKILL.md);
the system front door is [DESIGN.md](../../DESIGN.md).

## 10. Inferring style — design once, apply everywhere

Conner sets visual direction on *some* screens and expects agents to extrapolate the rest, so not every screen
and state is hand-designed. This is safe **only** because the system layer carries the direction and the audit +
drift gates catch wrong inference. Full playbook + screen archetypes: [`docs/design-system/patterns.md`](../../docs/design-system/patterns.md).

**The boundary (enforced):**

- **MAY infer, no ruling needed** — (a) **states** of existing components: build the rest state only; hover/focus/active/disabled/error are already token contracts (see `component-state-audit.html`); (b) **dark mode**: tokens carry both modes — never hand-pick a dark value; (c) **spacing/layout rhythm**: match the archetype anchor on the 4px grid; (d) **reusing existing components** for new content via `map.json`; (e) **sibling screens within a filled archetype**: extrapolate the anchor's structure/density/hierarchy.

- **MUST stop and ask (a ruling)** — a **new component archetype** (not in `map.json`/§2 → register via §7); **information hierarchy on a genuinely novel screen** (what's primary/secondary/focal); a **new interaction pattern** with no anchor; anything needing a **new token or `<Text>` variant** (closed sets don't expand by inference); an archetype with **no filled anchor yet** (infer a draft, but flag the assumptions).

**The highest-leverage move:** to make a pattern apply everywhere, write it as a convention here — don't redraw it
on every screen. A rule in this file is read by every agent; a pixel in one mock is not. And when handing off an
anchor, annotate *intent* ("this is the primary action," "this gap is a section break") — agents extrapolate a
principle reliably and a raw measurement badly.
