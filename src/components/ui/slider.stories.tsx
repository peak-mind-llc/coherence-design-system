import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';
import { Label } from './label';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <Slider defaultValue={[40]} max={100} step={1} className="w-72" />,
};

export const Range: Story = {
  render: () => <Slider defaultValue={[20, 80]} max={100} step={1} className="w-72" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-72 gap-3">
      <Label>Volume</Label>
      <Slider defaultValue={[60]} max={100} step={1} />
    </div>
  ),
};

export const Steps: Story = {
  render: () => (
    <div className="grid w-72 gap-3">
      <Label>Quality (steps of 10)</Label>
      <Slider defaultValue={[70]} max={100} step={10} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Slider defaultValue={[40]} max={100} step={1} className="w-72" disabled />,
};
