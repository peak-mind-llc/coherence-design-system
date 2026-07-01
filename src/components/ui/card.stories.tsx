import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Project status</CardTitle>
        <CardDescription>Updated just now.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">View</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground-muted">
          All checks passed and the deployment is healthy.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Open</Button>
      </CardFooter>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread.</CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
        <CardDescription>Enter your details below.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email-c">Email</Label>
          <Input id="email-c" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pwd-c">Password</Label>
          <Input id="pwd-c" type="password" />
        </div>
      </CardContent>
      <CardFooter className="grid gap-2">
        <Button>Create account</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const Stats: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: 'Subjects', value: '24' },
        { label: 'Sessions', value: '128' },
        { label: 'Reports', value: '67' },
      ].map((s) => (
        <Card key={s.label} className="w-44">
          <CardHeader>
            <CardDescription>{s.label}</CardDescription>
            <CardTitle className="text-3xl tabular-nums">{s.value}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  ),
};
