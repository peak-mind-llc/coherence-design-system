import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlignCenter, AlignLeft, AlignRight, ChevronDown, Minus, Plus } from 'lucide-react';
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from './button-group';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

const meta: Meta<typeof ButtonGroup> = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon"><AlignLeft /></Button>
      <Button variant="outline" size="icon"><AlignCenter /></Button>
      <Button variant="outline" size="icon"><AlignRight /></Button>
    </ButtonGroup>
  ),
};

export const Orientation: Story = {
  render: () => (
    <div className="flex items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="icon"><Plus /></Button>
        <Button variant="outline" size="icon"><Minus /></Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline" size="icon"><Plus /></Button>
        <Button variant="outline" size="icon"><Minus /></Button>
      </ButtonGroup>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-3">
      <ButtonGroup>
        <Button size="sm" variant="outline">Small</Button>
        <Button size="sm" variant="outline">Group</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Group</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="lg" variant="outline">Large</Button>
        <Button size="lg" variant="outline">Group</Button>
      </ButtonGroup>
    </div>
  ),
};

export const SplitButton: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon"><ChevronDown /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Mute notifications</DropdownMenuItem>
          <DropdownMenuItem>Unfollow</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Save</Button>
      <ButtonGroupText className="px-3">v1.2.0</ButtonGroupText>
    </ButtonGroup>
  ),
};
