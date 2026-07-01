import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusDot } from './status-dot';

const meta: Meta<typeof StatusDot> = {
  title: 'UI/Status Dot',
  component: StatusDot,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { status: 'success' },
};
export default meta;

type Story = StoryObj<typeof StatusDot>;

export const Success: Story = { args: { status: 'success' } };
export const Info: Story = { args: { status: 'info' } };
export const Warning: Story = { args: { status: 'warning' } };
export const Error: Story = { args: { status: 'error' } };

export const All: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <StatusDot status="success" />
      <StatusDot status="info" />
      <StatusDot status="warning" />
      <StatusDot status="error" />
    </div>
  ),
};
