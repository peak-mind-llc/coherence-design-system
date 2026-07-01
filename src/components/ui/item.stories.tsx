import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileText, Settings } from 'lucide-react';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Item> = {
  title: 'UI/Item',
  component: Item,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: () => (
    <ItemGroup className="w-96 rounded-md border">
      <Item>
        <ItemMedia variant="icon">
          <Settings />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>General settings</ItemTitle>
          <ItemDescription>Manage your application preferences.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">Open</Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-3 w-96">
      <Item variant="default">
        <ItemMedia variant="icon"><Settings /></ItemMedia>
        <ItemContent>
          <ItemTitle>Default variant</ItemTitle>
          <ItemDescription>Standard list item.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon"><Settings /></ItemMedia>
        <ItemContent>
          <ItemTitle>Outline variant</ItemTitle>
          <ItemDescription>Bordered list item.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon"><Settings /></ItemMedia>
        <ItemContent>
          <ItemTitle>Muted variant</ItemTitle>
          <ItemDescription>Background-tinted list item.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <ItemGroup className="w-96 rounded-md border">
      <Item size="default">
        <ItemMedia variant="icon"><Settings /></ItemMedia>
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
          <ItemDescription>Standard padding.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item size="sm">
        <ItemMedia variant="icon"><Settings /></ItemMedia>
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
          <ItemDescription>Tighter.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <ItemGroup className="w-96 rounded-md border">
      <Item>
        <ItemMedia>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Doe</ItemTitle>
          <ItemDescription>jane@example.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Edit</Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
};

export const Stacked: Story = {
  render: () => (
    <ItemGroup className="w-96 rounded-md border">
      {['Report A', 'Report B', 'Report C'].map((title, i, arr) => (
        <div key={title}>
          <Item>
            <ItemMedia variant="icon">
              <FileText />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{title}</ItemTitle>
              <ItemDescription>Generated 12 May 2026</ItemDescription>
            </ItemContent>
          </Item>
          {i < arr.length - 1 && <ItemSeparator />}
        </div>
      ))}
    </ItemGroup>
  ),
};
