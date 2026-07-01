import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about the design system's composite typography sizes
// (text-heading-*, text-body*). Without this, twMerge treats e.g. `text-body`
// as a text-COLOR and would drop it when a real color class
// (`text-foreground-muted`) is merged alongside via cn(). Registering them in
// the font-size group keeps size and color independent, as intended. Stock
// sizes (text-xs/sm/base/…) keep working — `extend` appends, not replaces.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "body-lg",
            "body",
            "body-sm",
            "body-xs",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
