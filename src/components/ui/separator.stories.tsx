import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="w-72 space-y-3 text-sm">
      <div>Above</div>
      <Separator />
      <div>Below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-3 text-sm">
      <span>Left</span>
      <Separator orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};

export const SectionDivider: Story = {
  render: () => (
    <div className="w-80">
      <div>
        <h4 className="text-sm font-medium">Profile</h4>
        <p className="text-sm text-foreground-muted">Manage your personal info.</p>
      </div>
      <Separator className="my-4" />
      <div>
        <h4 className="text-sm font-medium">Notifications</h4>
        <p className="text-sm text-foreground-muted">Choose what to be notified about.</p>
      </div>
    </div>
  ),
};
