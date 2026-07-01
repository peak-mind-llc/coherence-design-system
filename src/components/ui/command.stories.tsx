import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calculator, Calendar as CalIcon, CreditCard, Settings, Smile, User } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command';

const meta: Meta<typeof Command> = {
  title: 'UI/Command',
  component: Command,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border w-80">
      <CommandInput placeholder="Type a command…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem><CalIcon />Calendar</CommandItem>
          <CommandItem><Smile />Search emoji</CommandItem>
          <CommandItem><Calculator />Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem><User />Profile <CommandShortcut>⌘P</CommandShortcut></CommandItem>
          <CommandItem><CreditCard />Billing <CommandShortcut>⌘B</CommandShortcut></CommandItem>
          <CommandItem><Settings />Settings <CommandShortcut>⌘,</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
