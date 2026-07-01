import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '../../lib/utils'

/**
 * StatusDot — a small status indicator dot (8px fill, 2px ring), per the Figma
 * "Status Dot" component (node 4620:42). Four semantic statuses; each fills with
 * `foreground-{status}` and rings with `border-{status}-subtle`. `box-content`
 * keeps the 8px as the fill so the OUTSIDE ring (strokeAlign OUTSIDE in Figma)
 * doesn't eat into it. Decorative — the adjacent label carries the meaning, so
 * it's aria-hidden by default.
 */
const statusDotVariants = cva("block box-content size-2 shrink-0 rounded-round border-2", {
  variants: {
    status: {
      success: "bg-foreground-success border-border-success-subtle",
      info: "bg-foreground-info border-border-info-subtle",
      warning: "bg-foreground-warning border-border-warning-subtle",
      error: "bg-foreground-error border-border-error-subtle",
    },
  },
  defaultVariants: { status: "success" },
})

function StatusDot({
  className,
  status,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof statusDotVariants>) {
  return (
    <span
      data-slot="status-dot"
      data-status={status}
      aria-hidden="true"
      className={cn(statusDotVariants({ status }), className)}
      {...props}
    />
  )
}

export { StatusDot, statusDotVariants }
