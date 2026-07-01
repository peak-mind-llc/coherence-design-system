import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';
import { Label } from './label';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notif" defaultChecked />
      <Label htmlFor="notif">Notifications</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Switch id="d1" disabled />
        <Label htmlFor="d1">Off (disabled)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="d2" disabled defaultChecked />
        <Label htmlFor="d2">On (disabled)</Label>
      </div>
    </div>
  ),
};

export const SettingsRow: Story = {
  render: () => (
    <div className="w-80 flex items-center justify-between rounded-md border p-4">
      <div className="space-y-0.5">
        <Label className="text-base">Marketing emails</Label>
        <p className="text-sm text-foreground-muted">
          Receive emails about new products.
        </p>
      </div>
      <Switch />
    </div>
  ),
};
