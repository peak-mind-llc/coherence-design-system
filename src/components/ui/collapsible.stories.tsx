import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible';
import { Button } from './button';

const meta: Meta<typeof Collapsible> = {
  title: 'UI/Collapsible',
  component: Collapsible,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Show more
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border bg-background-muted/30 p-3 text-sm mt-2">
        This is hidden by default and revealed when the trigger is activated.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="w-72 grid gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Advanced options</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <ChevronsUpDown />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="rounded-md border p-3 text-sm space-y-1">
          <p>Option A</p>
          <p>Option B</p>
          <p>Option C</p>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
