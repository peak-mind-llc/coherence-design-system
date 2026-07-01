import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { cn } from '../../lib/utils'
import { Button } from './button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'

/**
 * Stepper — a compact bordered "− value +" numeric nudge control, per the Figma
 * inline stepper clusters (e.g. the raw-trace window / speed / gain steppers,
 * nodes 1664:4426/4430/4434). 32px tall: two 24px (`icon-xs`) ghost buttons flank
 * a centered value. Uses the input-chrome tokens (`border-input-border` +
 * `bg-input-background`) — the on-system replacement for the Figma clusters'
 * off-system `unofficial/*` border/fill.
 *
 * Controlled by intent: pass the formatted `value` plus `onDecrement` /
 * `onIncrement`; the component owns no numeric state. Give each direction an
 * accessible label so the icon-only buttons read correctly.
 */
function Stepper({
  value,
  onDecrement,
  onIncrement,
  decrementLabel = "Decrease",
  incrementLabel = "Increase",
  decrementIcon,
  incrementIcon,
  disabled,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "onChange"> & {
  value: React.ReactNode
  onDecrement?: () => void
  onIncrement?: () => void
  decrementLabel?: string
  incrementLabel?: string
  /** Override the default minus icon (e.g. a chevron for a paging stepper). */
  decrementIcon?: React.ReactNode
  /** Override the default plus icon. */
  incrementIcon?: React.ReactNode
  disabled?: boolean
}) {
  return (
    <TooltipProvider delayDuration={300}>
      <div
        data-slot="stepper"
        className={cn(
          "inline-flex h-8 items-center gap-1 rounded-md border border-input-border bg-input-background px-1",
          className,
        )}
        {...props}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              disabled={disabled}
              onClick={onDecrement}
              aria-label={decrementLabel}
            >
              {decrementIcon ?? <Minus className="size-4" aria-hidden="true" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{decrementLabel}</TooltipContent>
        </Tooltip>
        <span className="min-w-9 text-center text-sm tabular-nums text-foreground-default">
          {value}
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              disabled={disabled}
              onClick={onIncrement}
              aria-label={incrementLabel}
            >
              {incrementIcon ?? <Plus className="size-4" aria-hidden="true" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{incrementLabel}</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export { Stepper }
