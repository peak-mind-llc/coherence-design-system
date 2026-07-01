import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';
import { Label } from './label';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms-d" disabled />
      <Label htmlFor="terms-d">I can't be checked</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms-c" defaultChecked />
      <Label htmlFor="terms-c">Already accepted</Label>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start gap-2 w-80">
      <Checkbox id="notify" defaultChecked />
      <div className="grid gap-1 leading-none">
        <Label htmlFor="notify">Email notifications</Label>
        <p className="text-sm text-foreground-muted">
          Get emails about your account activity.
        </p>
      </div>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="grid gap-3">
      {['Subjects', 'Sessions', 'Reports'].map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <Checkbox id={`g${i}`} defaultChecked={i < 2} />
          <Label htmlFor={`g${i}`}>{label}</Label>
        </div>
      ))}
    </div>
  ),
};
