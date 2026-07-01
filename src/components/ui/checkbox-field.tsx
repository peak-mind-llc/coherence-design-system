import * as React from "react"

import { cn } from '../../lib/utils'
import { Checkbox } from './checkbox'
import { Text } from './text'

type CheckboxProps = React.ComponentProps<typeof Checkbox>

/**
 * CheckboxField — a compact bordered checkbox "chip": a kit Checkbox + an inline
 * label inside a bordered, input-chrome container (Figma's "Phy" / "Show marks"
 * toolbar chips, nodes 1664:4423 / 1664:4439). Like `Stepper`, it reconciles the
 * Figma clusters' off-system `unofficial/*` border/fill to the on-system
 * `input-border` / `input-background` tokens.
 *
 * Controlled by intent: pass `checked` + `onCheckedChange` (or `defaultChecked`).
 * The whole chip is a `<label>`, so clicking the label toggles the box; an `id`
 * is auto-generated when not supplied.
 */
function CheckboxField({
  label,
  checked,
  onCheckedChange,
  defaultChecked,
  disabled,
  id,
  className,
  ...props
}: Omit<React.ComponentProps<"label">, "onChange"> & {
  label: React.ReactNode
  checked?: CheckboxProps["checked"]
  onCheckedChange?: CheckboxProps["onCheckedChange"]
  defaultChecked?: CheckboxProps["defaultChecked"]
  disabled?: boolean
  id?: string
}) {
  const generatedId = React.useId()
  const fieldId = id ?? generatedId
  return (
    <label
      data-slot="checkbox-field"
      htmlFor={fieldId}
      className={cn(
        "inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md border border-input-border bg-input-background py-1 pl-2 pr-3 shadow-xs select-none",
        "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <Checkbox
        id={fieldId}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      />
      <Text
        variant="body-sm"
        weight="medium"
        className="whitespace-nowrap text-foreground-default"
      >
        {label}
      </Text>
    </label>
  )
}

export { CheckboxField }
