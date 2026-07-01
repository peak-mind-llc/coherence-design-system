import type { Meta, StoryObj } from '@storybook/react-vite';
import { Lock, Settings, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-foreground-muted py-4">
        Account settings live here.
      </TabsContent>
      <TabsContent value="password" className="text-sm text-foreground-muted py-4">
        Password reset form lives here.
      </TabsContent>
      <TabsContent value="notifications" className="text-sm text-foreground-muted py-4">
        Notification preferences live here.
      </TabsContent>
    </Tabs>
  ),
};

export const Small: Story = {
  render: () => (
    <Tabs defaultValue="head" className="w-96">
      <TabsList size="sm">
        <TabsTrigger value="head">Head</TabsTrigger>
        <TabsTrigger value="stacked">Stacked</TabsTrigger>
      </TabsList>
      <TabsContent value="head" className="text-sm text-foreground-muted py-4">
        h-8 tabs — flush with small Select / Button / CheckboxField in dense toolbars.
      </TabsContent>
      <TabsContent value="stacked" className="text-sm text-foreground-muted py-4">
        Stacked view.
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account"><User />Account</TabsTrigger>
        <TabsTrigger value="security"><Lock />Security</TabsTrigger>
        <TabsTrigger value="settings"><Settings />Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-foreground-muted py-4">
        Account info.
      </TabsContent>
      <TabsContent value="security" className="text-sm text-foreground-muted py-4">
        Security controls.
      </TabsContent>
      <TabsContent value="settings" className="text-sm text-foreground-muted py-4">
        General settings.
      </TabsContent>
    </Tabs>
  ),
};
