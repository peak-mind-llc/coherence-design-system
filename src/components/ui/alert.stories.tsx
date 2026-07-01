import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircle, AlertTriangle, CheckCircle2, Info as InfoIcon, Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Button } from './button';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Alert className="w-96">
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success" className="w-96">
      <CheckCircle2 />
      <AlertTitle>Connection successful</AlertTitle>
      <AlertDescription>Your companion is paired and the key is stored.</AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert variant="info" className="w-96">
      <InfoIcon />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>A newer report is available for this session.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="w-96">
      <AlertTriangle />
      <AlertTitle>Unsaved changes</AlertTitle>
      <AlertDescription>Leaving now will discard your edits.</AlertDescription>
    </Alert>
  ),
};

export const ErrorStatus: Story = {
  name: 'Error',
  render: () => (
    <Alert variant="error" className="w-96">
      <AlertCircle />
      <AlertTitle>Unable to connect to the analysis server</AlertTitle>
      <AlertDescription>Please restart the application or start the server manually.</AlertDescription>
    </Alert>
  ),
};

/**
 * shadcn's Alert docs show an `AlertAction` slot for a trailing button,
 * positioned at top-right. The new-york-v4 registry doesn't export
 * `AlertAction` yet, so we compose a regular Button positioned absolutely.
 * `pr-12` on the alert root keeps long titles from running under the button.
 */
export const WithAction: Story = {
  render: () => (
    <Alert className="w-96 pr-12">
      <AlertTitle>Dark mode is now available</AlertTitle>
      <AlertDescription>Enable it under your profile settings to get started.</AlertDescription>
      <Button size="sm" className="absolute top-3 right-3">Enable</Button>
    </Alert>
  ),
};
