import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusPill } from './status-pill';

const meta: Meta<typeof StatusPill> = {
  title: 'UI/Status Pill',
  component: StatusPill,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { status: 'success', children: 'Success' },
};
export default meta;

type Story = StoryObj<typeof StatusPill>;

export const Success: Story = {
  args: { status: 'success', children: 'Success' },
};
export const Info: Story = {
  args: { status: 'info', children: 'Info' },
};
export const Warning: Story = {
  args: { status: 'warning', children: 'Warning' },
};
export const Error: Story = {
  args: { status: 'error', children: 'Error' },
};

export const Strong: Story = {
  args: { status: 'error', strength: 'strong', children: 'Rejected' },
};

export const Dismissible: Story = {
  args: {
    status: 'error',
    children: 'IC2',
    showDismiss: true,
    onDismiss: () => {},
  },
};

export const All: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <StatusPill status="success">Success</StatusPill>
        <StatusPill status="info">Info</StatusPill>
        <StatusPill status="warning">Warning</StatusPill>
        <StatusPill status="error">Error</StatusPill>
      </div>
      <div className="flex items-center gap-2">
        <StatusPill status="success" strength="strong">Success</StatusPill>
        <StatusPill status="info" strength="strong">Info</StatusPill>
        <StatusPill status="warning" strength="strong">Warning</StatusPill>
        <StatusPill status="error" strength="strong">Rejected</StatusPill>
      </div>
      <div className="flex items-center gap-2">
        <StatusPill status="error" showDismiss onDismiss={() => {}}>IC2</StatusPill>
        <StatusPill status="warning" showDismiss onDismiss={() => {}}>Fp1</StatusPill>
      </div>
    </div>
  ),
};
