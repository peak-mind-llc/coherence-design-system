import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info } from 'lucide-react';
import { Marker, MarkerContent, MarkerIcon } from './marker';

const meta: Meta<typeof Marker> = {
  title: 'UI/Marker',
  component: Marker,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Marker>;

export const Default: Story = {
  render: () => (
    <Marker className="w-96">
      <MarkerIcon>
        <Info />
      </MarkerIcon>
      <MarkerContent>Mentor switched to the eyes-closed montage</MarkerContent>
    </Marker>
  ),
};

export const Separator: Story = {
  render: () => (
    <Marker variant="separator" className="w-96">
      <MarkerContent>Today</MarkerContent>
    </Marker>
  ),
};

export const Border: Story = {
  render: () => (
    <Marker variant="border" className="w-96">
      <MarkerContent>New session</MarkerContent>
    </Marker>
  ),
};
