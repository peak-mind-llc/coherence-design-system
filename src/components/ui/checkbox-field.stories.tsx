import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { CheckboxField } from './checkbox-field';

const meta: Meta<typeof CheckboxField> = {
  title: 'UI/Checkbox Field',
  component: CheckboxField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { label: 'Show marks', checked: true },
};
export default meta;

type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = {};

export const Unchecked: Story = { args: { label: 'Phy', checked: false } };

export const Disabled: Story = { args: { label: 'Show marks', disabled: true } };

export const Interactive: Story = {
  render: () => {
    const [on, setOn] = useState(true);
    return (
      <CheckboxField
        label="Show marks"
        checked={on}
        onCheckedChange={(v) => setOn(v === true)}
      />
    );
  },
};
