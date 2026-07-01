"use client"

import * as React from "react"

/**
 * Portal container for the kit's Radix overlay components (Select, Popover,
 * DropdownMenu, Tooltip, …).
 *
 * By default Radix portals overlay content to `document.body`. That's correct
 * for normal page usage, but breaks when an overlay is opened inside a
 * high-z-index, separately-themed surface (e.g. a workstation modal at
 * `z-[2100]` themed via `.dark` / `data-workstation-theme`): the portaled menu
 * lands on `<body>` — behind the modal (lower stacking) and outside its theme
 * scope (wrong colors).
 *
 * Wrap such a surface in `<PortalContainerProvider container={modalRootEl}>` and
 * the kit's overlay `Content` components portal into that element instead — so
 * the menu inherits the surface's stacking context AND its theme. With no
 * provider (the default), `usePortalContainer()` returns `null` and overlays
 * portal to `<body>` exactly as before.
 */
const PortalContainerContext = React.createContext<HTMLElement | null>(null)

export function PortalContainerProvider({
  container,
  children,
}: {
  container: HTMLElement | null
  children: React.ReactNode
}) {
  return (
    <PortalContainerContext.Provider value={container}>
      {children}
    </PortalContainerContext.Provider>
  )
}

/** Current portal container, or `null` to use the Radix default (`<body>`). */
export function usePortalContainer(): HTMLElement | null {
  return React.useContext(PortalContainerContext)
}
