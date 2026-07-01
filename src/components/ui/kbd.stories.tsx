import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd, KbdGroup } from './kbd';

const meta: Meta<typeof Kbd> = {
  title: 'UI/Kbd',
  component: Kbd,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = { render: () => <Kbd>⌘</Kbd> };

export const Combination: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const InText: Story = {
  render: () => (
    <p className="text-sm text-foreground-muted">
      Press <Kbd>?</Kbd> to see all shortcuts, or <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup> to open the command palette.
    </p>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="grid gap-2 text-sm">
      <div className="flex items-center justify-between gap-8">
        <span>Save</span>
        <KbdGroup><Kbd>⌘</Kbd><Kbd>S</Kbd></KbdGroup>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span>Undo</span>
        <KbdGroup><Kbd>⌘</Kbd><Kbd>Z</Kbd></KbdGroup>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span>Redo</span>
        <KbdGroup><Kbd>⇧</Kbd><Kbd>⌘</Kbd><Kbd>Z</Kbd></KbdGroup>
      </div>
    </div>
  ),
};
