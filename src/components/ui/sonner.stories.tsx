import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toaster } from './sonner';
import { Button } from './button';
import { toast } from 'sonner';

/**
 * Project constraint: Coherence Workstation has a "no popups on crash" rule —
 * errors surface as inline `role="alert"` rows, not toasts. Sonner is
 * installed for catalog completeness; don't reach for it on a real screen
 * without revisiting the constraint first.
 */
const meta: Meta<typeof Toaster> = {
  title: 'UI/Sonner',
  component: Toaster,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: new Date().toLocaleString(),
          })
        }
      >
        Show toast
      </Button>
    </>
  ),
};
