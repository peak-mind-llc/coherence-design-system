import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Combobox, type ComboboxOption } from './combobox';

/**
 * Single-input combobox: type into the trigger to filter the dropdown.
 * Hand-composed from Radix `Popover` + cmdk `Command` + our `Input`.
 * Self-contained — owns its open/search state internally; parent owns
 * `value` (the selected option's `value`).
 */
const meta: Meta<typeof Combobox> = {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Combobox>;

const frameworks: ComboboxOption[] = [
  { value: 'next', label: 'Next.js' },
  { value: 'svelte', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'vite', label: 'Vite' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select a framework"
        rootClassName="w-56"
      />
    );
  },
};

export const Preselected: Story = {
  render: () => {
    const [value, setValue] = useState('vite');
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select a framework"
        rootClassName="w-56"
      />
    );
  },
};

export const Invalid: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Required"
        rootClassName="w-56"
        aria-invalid
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Disabled"
        rootClassName="w-56"
        disabled
      />
    );
  },
};
