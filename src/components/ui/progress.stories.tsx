import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { value: 60 },
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => (
    <div className="w-72">
      <Progress {...args} />
    </div>
  ),
};

export const Empty: Story = { args: { value: 0 } };
export const Complete: Story = { args: { value: 100 } };

/** The "still working, no known end" state — a sliver glides across the track.
 *  The standard loading line for global loads (case data) and background work. */
export const Indeterminate: Story = {
  render: () => (
    <div className="w-72">
      <Progress indeterminate />
    </div>
  ),
};

/** As a full-width "line across the screen" — thin, square, pinned to a top edge. */
export const TopLoadingLine: Story = {
  render: () => (
    <div className="relative h-24 w-96 overflow-hidden rounded-md border border-border-default">
      <Progress indeterminate className="h-0.5 rounded-none" />
      <div className="flex h-full items-center justify-center">
        <span className="text-xs text-foreground-muted">Loading case data…</span>
      </div>
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [v, setV] = useState(13);
    useEffect(() => {
      const id = setInterval(() => setV((x) => (x >= 100 ? 0 : x + 13)), 600);
      return () => clearInterval(id);
    }, []);
    return (
      <div className="w-72 grid gap-2">
        <Progress value={v} />
        <p className="text-xs text-foreground-muted">{v}%</p>
      </div>
    );
  },
};
