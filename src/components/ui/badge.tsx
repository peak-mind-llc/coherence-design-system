import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from '../../lib/utils'

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-round border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring-default focus-visible:ring-[3px] focus-visible:ring-ring-focus [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-background-primary text-foreground-default-inverse [a&]:hover:bg-background-primary-hover",
        secondary:
          "bg-background-secondary text-foreground-default [a&]:hover:bg-background-secondary-hover",
        destructive:
          "bg-background-destructive text-foreground-white focus-visible:ring-ring-error dark:bg-background-destructive-hover [a&]:hover:bg-background-destructive-hover",
        outline:
          "border-border-default text-foreground-default [a&]:hover:bg-background-accent [a&]:hover:text-foreground-default",
        ghost: "text-foreground-default [a&]:hover:bg-background-accent [a&]:hover:text-foreground-default",
        link: "text-foreground-primary underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
