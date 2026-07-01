import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "../../lib/utils"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("flex min-w-0 flex-col gap-2", className)}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "group/bubble relative flex w-fit min-w-0 flex-col gap-1 max-w-[80%] data-[align=end]:self-end data-[variant=ghost]:max-w-full group-data-[align=end]/message:self-end",
  {
    variants: {
      variant: {
        default:
          "*:data-[slot=bubble-content]:bg-background-primary *:data-[slot=bubble-content]:text-foreground-default-inverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-primary-hover",
        secondary:
          "*:data-[slot=bubble-content]:bg-background-secondary *:data-[slot=bubble-content]:text-foreground-default [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-secondary-hover",
        muted:
          "*:data-[slot=bubble-content]:bg-background-muted *:data-[slot=bubble-content]:text-foreground-default [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-accent-subtle",
        tinted:
          "*:data-[slot=bubble-content]:bg-background-primary-subtle *:data-[slot=bubble-content]:text-foreground-default [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-accent-subtle",
        outline:
          "*:data-[slot=bubble-content]:bg-background-default *:data-[slot=bubble-content]:border-border-default [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-accent-subtle",
        ghost:
          "border-none *:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-accent-subtle",
        destructive:
          "*:data-[slot=bubble-content]:bg-background-destructive-subtle *:data-[slot=bubble-content]:text-foreground-destructive [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-destructive-subtle",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
}

function BubbleContent({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="bubble-content"
      className={cn(
        "w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border border-transparent px-3 py-2.5 text-sm leading-relaxed wrap-break-word [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-ring-default [button,a]:focus-visible:ring-[3px] [button,a]:focus-visible:ring-ring-focus group-data-[align=end]/bubble:self-end",
        className
      )}
      {...props}
    />
  )
}

const bubbleReactionsVariants = cva(
  "absolute z-10 flex w-fit items-center justify-center rounded-round bg-background-muted shrink-0 gap-1 px-1.5 py-0.5 text-sm ring-[3px] ring-background-default has-[button]:p-0",
  {
    variants: {
      side: {
        top: "top-0 -translate-y-3/4",
        bottom: "bottom-0 translate-y-3/4",
      },
      align: {
        start: "left-3",
        end: "right-3",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
)

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
