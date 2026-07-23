import { cn } from '../../lib/utils'

/**
 * Spinner — the design system's standard loading indicator.
 *
 * A precise two-tone ring: a faint full track (`border-subtle`) under a
 * rotating quarter-arc (`currentColor`, `foreground-default` by default —
 * recolor by setting a `text-*` token on the element). Restrained by design:
 * motion conveys state, never decoration. Respects reduced-motion — the ring
 * holds still rather than spinning, so it still reads as a status indicator.
 *
 * Size with a `size-*` utility (default `size-4`); it scales cleanly because
 * the geometry is a viewBox, not a fixed pixel icon.
 */
function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label="Loading"
      className={cn(
        'size-4 shrink-0 text-foreground-default motion-safe:animate-spin',
        className,
      )}
      {...props}
    >
      {/* Faint full track — the ring the arc travels around. */}
      <circle cx="12" cy="12" r="9" strokeWidth="2.5" className="stroke-border-subtle" />
      {/* The moving arc — a quarter turn, round-capped. */}
      <path
        d="M12 3a9 9 0 0 1 9 9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export { Spinner }
