import type { Meta, StoryObj } from '@storybook/react-vite';
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from './native-select';
import { Label } from './label';

const meta: Meta<typeof NativeSelect> = {
  title: 'UI/NativeSelect',
  component: NativeSelect,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  render: () => (
    <NativeSelect className="w-56" defaultValue="apple">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="grape">Grape</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Grouped: Story = {
  render: () => (
    <NativeSelect className="w-56" defaultValue="est">
      <NativeSelectOptGroup label="North America">
        <NativeSelectOption value="est">EST</NativeSelectOption>
        <NativeSelectOption value="cst">CST</NativeSelectOption>
        <NativeSelectOption value="pst">PST</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="gmt">GMT</NativeSelectOption>
        <NativeSelectOption value="cet">CET</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-56 gap-2">
      <Label htmlFor="lang">Language</Label>
      <NativeSelect id="lang" defaultValue="en">
        <NativeSelectOption value="en">English</NativeSelectOption>
        <NativeSelectOption value="es">Español</NativeSelectOption>
        <NativeSelectOption value="fr">Français</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NativeSelect className="w-56" disabled defaultValue="locked">
      <NativeSelectOption value="locked">Locked</NativeSelectOption>
    </NativeSelect>
  ),
};
