import type { Meta, StoryObj } from '@storybook/react-vite';
import { Inbox, Search } from 'lucide-react';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './empty';
import { Button } from './button';

const meta: Meta<typeof Empty> = {
  title: 'UI/Empty',
  component: Empty,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: () => (
    <Empty className="w-96 border rounded-md p-8">
      <EmptyHeader>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try a different search term.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Reset filters</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Empty className="w-96 border rounded-md p-8">
      <EmptyMedia>
        <Inbox className="size-10 text-foreground-muted" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>Inbox is empty</EmptyTitle>
        <EmptyDescription>You're all caught up. Nice.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Empty className="w-96 border rounded-md p-8">
      <EmptyMedia>
        <Search className="size-10 text-foreground-muted" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No subjects match</EmptyTitle>
        <EmptyDescription>Adjust your filters or import a new subject.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex gap-2">
        <Button variant="outline">Clear filters</Button>
        <Button>Import</Button>
      </EmptyContent>
    </Empty>
  ),
};
