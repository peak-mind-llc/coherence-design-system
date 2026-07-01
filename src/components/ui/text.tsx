import * as React from "react"
import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from '../../lib/utils'

/**
 * The typed text-style set — the closed list of typography styles, 1:1 with the
 * Figma text styles. Each `variant` maps to a composite `--text-*` token
 * (font-size + line-height [+ letter-spacing/font-weight for headings]) defined
 * in the design-system `@theme`. Headings bundle Semibold via their token; the
 * `weight` prop applies to body variants only (regular | medium | bold).
 *
 * Pick a variant — the union is the whole point, so off-menu values don't compile.
 * Names match the Figma styles; values are gated by check_typography_drift.mjs.
 */
const textVariants = cva("", {
  variants: {
    variant: {
      "heading-1": "text-heading-1",
      "heading-2": "text-heading-2",
      "heading-3": "text-heading-3",
      "heading-4": "text-heading-4",
      "body-lg": "text-body-lg",
      body: "text-body",
      "body-sm": "text-body-sm",
      "body-xs": "text-body-xs",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-semibold",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

// The closed sets — mirror the cva `variant` keys above. Split body vs heading
// so the props type can forbid `weight` on headings (they carry Semibold).
type HeadingVariant = "heading-1" | "heading-2" | "heading-3" | "heading-4"
type BodyVariant = "body-lg" | "body" | "body-sm" | "body-xs"
type Weight = "regular" | "medium" | "bold"

/**
 * Discriminated so the type fully expresses the system: body variants take an
 * (optional) `weight` from the approved three; heading variants reject `weight`
 * entirely (their weight is intrinsic). Off-menu variants/weights don't compile.
 */
type TextProps = React.ComponentProps<"span"> & { asChild?: boolean } & (
  | { variant?: BodyVariant; weight?: Weight }
  | { variant: HeadingVariant; weight?: never }
)

/**
 * Renders text in one of the design system's named styles. Defaults to a
 * `<span>`; pass `asChild` to render a semantic element instead, e.g.
 * `<Text variant="heading-2" asChild><h2>Section</h2></Text>`.
 */
function Text({
  className,
  variant = "body",
  weight,
  asChild = false,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot.Root : "span"

  // Headings carry their weight (Semibold) from the composite token — never add
  // a font-* class to them, or it would override the token. Body variants take
  // the `weight` prop and default to regular.
  const isHeading = typeof variant === "string" && variant.startsWith("heading")
  const effectiveWeight = isHeading ? undefined : weight ?? "regular"

  return (
    <Comp
      data-slot="text"
      data-variant={variant}
      className={cn(textVariants({ variant, weight: effectiveWeight }), className)}
      {...props}
    />
  )
}

export { Text, textVariants }
