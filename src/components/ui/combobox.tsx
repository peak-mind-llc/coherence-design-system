"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from '../../lib/utils'
import { Input } from './input'
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from './popover'
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
} from './command'

export type ComboboxOption = {
  value: string
  label: string
}

export type ComboboxProps = Omit<
  React.ComponentProps<"input">,
  "value" | "onChange"
> & {
  options: ComboboxOption[]
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  emptyMessage?: string
  rootClassName?: string
}

function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select…",
  emptyMessage = "No results found.",
  className,
  rootClassName,
  disabled,
  ...inputProps
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const anchorRef = React.useRef<HTMLDivElement>(null)

  const selected = options.find((opt) => opt.value === value)
  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div
          ref={anchorRef}
          className={cn("relative", rootClassName)}
          data-slot="combobox"
        >
          <Input
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-autocomplete="list"
            disabled={disabled}
            value={open ? search : selected?.label ?? ""}
            placeholder={selected ? "" : placeholder}
            onChange={(e) => {
              setSearch(e.target.value)
              setOpen(true)
            }}
            onFocus={() => {
              setSearch("")
              setOpen(true)
            }}
            className={cn("pr-8", className)}
            {...inputProps}
          />
          <ChevronsUpDown
            data-slot="combobox-chevron"
            className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 opacity-50"
          />
        </div>
      </PopoverAnchor>
      <PopoverContent
        className="w-(--radix-popover-trigger-width) p-0"
        align="start"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => {
          if (anchorRef.current?.contains(e.target as Node)) {
            e.preventDefault()
          }
        }}
      >
        <Command shouldFilter={false} data-slot="combobox-command">
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            {filtered.map((opt) => (
              <CommandItem
                key={opt.value}
                value={opt.value}
                onSelect={() => {
                  onValueChange(opt.value === value ? "" : opt.value)
                  setSearch("")
                  setOpen(false)
                }}
              >
                {opt.label}
                <Check
                  className={cn(
                    "ml-auto size-4",
                    value === opt.value ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Combobox }
