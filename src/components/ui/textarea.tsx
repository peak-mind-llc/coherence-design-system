import * as React from "react"

import { cn } from '../../lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input-border bg-input-background px-3 py-2 text-base text-foreground-default shadow-sm transition-[color,box-shadow] outline-none placeholder:text-foreground-muted focus-visible:border-ring-default focus-visible:ring-[3px] focus-visible:ring-ring-focus disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-border-destructive aria-invalid:ring-ring-error md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
