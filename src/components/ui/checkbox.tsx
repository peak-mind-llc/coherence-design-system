"use client"

import * as React from "react"
import { CheckIcon, MinusIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from '../../lib/utils'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "group peer size-4 shrink-0 rounded-xs border border-input-border shadow-sm transition-shadow outline-none focus-visible:border-ring-default focus-visible:ring-[3px] focus-visible:ring-ring-focus disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-border-destructive aria-invalid:ring-ring-error data-[state=checked]:border-border-primary data-[state=checked]:bg-background-primary data-[state=checked]:text-foreground-default-inverse data-[state=indeterminate]:border-border-primary data-[state=indeterminate]:bg-background-primary data-[state=indeterminate]:text-foreground-default-inverse aria-invalid:data-[state=checked]:border-border-destructive aria-invalid:data-[state=checked]:bg-background-destructive aria-invalid:data-[state=indeterminate]:border-border-destructive aria-invalid:data-[state=indeterminate]:bg-background-destructive bg-input-background",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5 group-data-[state=indeterminate]:hidden" />
        <MinusIcon className="hidden size-3.5 group-data-[state=indeterminate]:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
