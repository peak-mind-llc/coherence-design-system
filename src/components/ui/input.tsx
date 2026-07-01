import * as React from "react"

import { cn } from '../../lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-input-border bg-input-background px-3 py-1 text-base text-foreground-default shadow-sm transition-[color,box-shadow] outline-none selection:bg-background-primary selection:text-foreground-default-inverse file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground-default placeholder:text-foreground-muted disabled:pointer-events-none disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring-default focus-visible:ring-[3px] focus-visible:ring-ring-focus",
        "aria-invalid:border-border-destructive aria-invalid:ring-ring-error",
        className
      )}
      {...props}
    />
  )
}

export { Input }
