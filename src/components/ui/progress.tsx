import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from '../../lib/utils'

/**
 * Progress — the design system's standard progress bar.
 *
 * Determinate by default (drive it with `value`, 0–100). Pass `indeterminate`
 * for the "still working, no known end" state: a short sliver glides across
 * the track — the standard "loading line" for global loads (case data) and
 * background work (report drafting). Set `indeterminate` WITHOUT a `value`.
 *
 * The glide (`cw-progress-indeterminate`, defined in the app globals) is
 * motion-safe only — under reduced-motion the bar rests as a static partial
 * fill, so it still reads as "in progress".
 */
function Progress({
  className,
  value,
  indeterminate = false,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  indeterminate?: boolean
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-round bg-background-primary-subtle",
        className
      )}
      // Radix treats a null/undefined value as the indeterminate ARIA state.
      value={indeterminate ? null : value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full bg-background-primary",
          indeterminate
            ? "w-2/5 rounded-round motion-safe:animate-[cw-progress-indeterminate_1.4s_cubic-bezier(0.65,0,0.35,1)_infinite]"
            : "w-full flex-1 transition-all"
        )}
        style={
          indeterminate ? undefined : { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
