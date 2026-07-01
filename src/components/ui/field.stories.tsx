import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from './field';
import { Input } from './input';
import { Textarea } from './textarea';
import { Switch } from './switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

const meta: Meta<typeof Field> = {
  title: 'UI/Field',
  component: Field,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="email-field">Email</FieldLabel>
        <FieldContent>
          <Input id="email-field" type="email" placeholder="you@example.com" />
          <FieldDescription>We'll never share your email.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="fb">Feedback</FieldLabel>
        <FieldContent>
          <Textarea id="fb" placeholder="Tell us more…" />
          <FieldDescription>Optional.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="dept">Department</FieldLabel>
        <FieldContent>
          <Select>
            <SelectTrigger id="dept" className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eng">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="ops">Operations</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>Pick the team you're on.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <FieldContent>
          <Input id="username" aria-invalid defaultValue="me" />
          <FieldError>Username must be at least 4 characters.</FieldError>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const WithSwitch: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="mfa">Multi-factor authentication</FieldLabel>
          <FieldDescription>Require a 6-digit code at sign-in.</FieldDescription>
        </FieldContent>
        <Switch id="mfa" />
      </Field>
    </FieldGroup>
  ),
};

export const Fieldset: Story = {
  render: () => (
    <FieldSet className="w-80">
      <FieldLegend>Contact</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fs-name">Name</FieldLabel>
          <FieldContent>
            <Input id="fs-name" />
          </FieldContent>
        </Field>
        <FieldSeparator />
        <Field>
          <FieldLabel htmlFor="fs-email">Email</FieldLabel>
          <FieldContent>
            <Input id="fs-email" type="email" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
