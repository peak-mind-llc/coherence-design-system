import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Stepper } from './stepper';

const meta: Meta<typeof Stepper> = {
  title: 'UI/Stepper',
  component: Stepper,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    value: '10s',
    decrementLabel: 'Shorter window',
    incrementLabel: 'Longer window',
  },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true, value: '1.0x' },
};

export const Interactive: Story = {
  render: () => {
    const [n, setN] = useState(10);
    return (
      <Stepper
        value={`${n}s`}
        onDecrement={() => setN((v) => Math.max(1, v - 1))}
        onIncrement={() => setN((v) => v + 1)}
        decrementLabel="Shorter window"
        incrementLabel="Longer window"
      />
    );
  },
};
