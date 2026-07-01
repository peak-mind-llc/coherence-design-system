import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bold, Italic, Underline } from 'lucide-react';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: 'Toggle' },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Pressed: Story = { args: { pressed: true } };
export const Disabled: Story = { args: { disabled: true } };

export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
};

export const FormattingGroup: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Bold"><Bold /></Toggle>
      <Toggle aria-label="Italic"><Italic /></Toggle>
      <Toggle aria-label="Underline"><Underline /></Toggle>
    </div>
  ),
};
