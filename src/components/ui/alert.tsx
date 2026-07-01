import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '../../lib/utils'

const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border bg-card-background px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "text-card-foreground",
        // Status surfaces — a soft status-tinted fill, a subtle border that matches
        // the fill (border-{status}-subtle === background-{status}, so the edge reads
        // soft rather than as a loud stroke), and the brighter status foreground for
        // both title and description. Mirrors `status-pill.tsx`.
        success:
          "text-foreground-success bg-background-success border-border-success-subtle *:data-[slot=alert-description]:text-foreground-success",
        info:
          "text-foreground-info bg-background-info border-border-info-subtle *:data-[slot=alert-description]:text-foreground-info",
        warning:
          "text-foreground-warning bg-background-warning border-border-warning-subtle *:data-[slot=alert-description]:text-foreground-warning",
        error:
          "text-foreground-error bg-background-error border-border-error-subtle *:data-[slot=alert-description]:text-foreground-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm text-foreground-muted [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
