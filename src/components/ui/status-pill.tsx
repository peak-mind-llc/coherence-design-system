import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { XIcon } from "lucide-react"

import { cn } from '../../lib/utils'

/**
 * StatusPill — a status pill (e.g. a session's "Complete" / "In progress"), per
 * the Figma "Status pill" component (node 4620:33). A status-tinted surface in
 * four semantic statuses, at two strengths:
 *  - `subtle` (default) — the soft status token pair (background-{status} +
 *    foreground-{status}).
 *  - `strong` — the solid status fill with white text (error uses the
 *    `destructive` fill, not foreground-error).
 * Optionally renders a trailing dismiss (X) affordance via `showDismiss`; pair
 * it with `onDismiss` to make the X an interactive button. Distinct from
 * `Badge` (neutral/semantic chips) and the solid `destructive` button role.
 */
const statusPillVariants = cva(
  "inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 rounded-round px-2 py-0.5 text-xs font-semibold whitespace-nowrap",
  {
    variants: {
      status: {
        success: "",
        info: "",
        warning: "",
        error: "",
      },
      strength: {
        subtle: "",
        strong: "text-foreground-white",
      },
    },
    compoundVariants: [
      // Subtle — the soft status token pair (the historical default look).
      { status: "success", strength: "subtle", className: "bg-background-success text-foreground-success" },
      { status: "info", strength: "subtle", className: "bg-background-info text-foreground-info" },
      { status: "warning", strength: "subtle", className: "bg-background-warning text-foreground-warning" },
      { status: "error", strength: "subtle", className: "bg-background-error text-foreground-error" },
      // Strong — solid status fill (white text comes from the strength axis).
      // Error maps to the destructive fill, matching Figma node 4620:33.
      { status: "success", strength: "strong", className: "bg-foreground-success" },
      { status: "info", strength: "strong", className: "bg-foreground-info" },
      { status: "warning", strength: "strong", className: "bg-foreground-warning" },
      { status: "error", strength: "strong", className: "bg-background-destructive" },
    ],
    defaultVariants: {
      status: "success",
      strength: "subtle",
    },
  }
)

function StatusPill({
  className,
  status,
  strength,
  showDismiss = false,
  onDismiss,
  dismissLabel = "Dismiss",
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof statusPillVariants> & {
    /** Show a trailing dismiss (X) icon. Pair with `onDismiss` to make it an interactive button. */
    showDismiss?: boolean
    /** Click handler for the dismiss affordance; when set, the X renders as a `<button>`. */
    onDismiss?: () => void
    /** Accessible name + hover title for the dismiss button (default "Dismiss"). */
    dismissLabel?: string
  }) {
  return (
    <span
      data-slot="status-pill"
      data-status={status}
      data-strength={strength ?? "subtle"}
      className={cn(statusPillVariants({ status, strength }), className)}
      {...props}
    >
      {children}
      {showDismiss &&
        (onDismiss ? (
          <button
            type="button"
            data-slot="status-pill-dismiss"
            aria-label={dismissLabel}
            title={dismissLabel}
            onClick={(e) => {
              e.stopPropagation()
              onDismiss()
            }}
            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-round opacity-80 hover:opacity-100 focus-visible:ring-[2px] focus-visible:ring-ring-focus focus-visible:outline-hidden [&>svg]:size-3"
          >
            <XIcon aria-hidden="true" />
          </button>
        ) : (
          <XIcon aria-hidden="true" className="size-3 shrink-0 opacity-80" />
        ))}
    </span>
  )
}

export { StatusPill, statusPillVariants }
