import { Lock, Mail } from "lucide-react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "url", "number"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "default", "lg"],
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "primary", "secondary", "destructive"],
    },
    helperText: { control: "text" },
    error: { control: "text" },
    fixedLeftText: { control: "text" },
    disabled: { control: "boolean" },
    showLeftIcon: { control: "boolean", name: "Show Left Icon" },
    showRightIcon: { control: "boolean", name: "Show Right Icon" },
  },
};

const Template = (args) => {
  const { showLeftIcon, showRightIcon, ...rest } = args;

  return (
    <Input
      {...rest}
      iconLeft={showLeftIcon ? <Mail size={16} /> : null}
      iconRight={showRightIcon ? <Lock size={16} /> : null}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  label: "Email",
  placeholder: "you@example.com",
  type: "email",
  size: "default",
  variant: "default",
  helperText: "Enter a valid email address.",
  showLeftIcon: true,
  showRightIcon: true,
};

export const WithFixedText = Template.bind({});
WithFixedText.args = {
  label: "Website",
  placeholder: "example.com",
  fixedLeftText: "https://",
  helperText: "Enter a valid URL",
};
