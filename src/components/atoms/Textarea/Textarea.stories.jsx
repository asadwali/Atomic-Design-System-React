import { useState } from "react";
import Textarea from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "danger"],
    },
    disabled: { control: "boolean" },
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    rows: { control: "number" },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <Textarea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Description",
  name: "description",
  placeholder: "Enter your text...",
  helperText: "You can write up to 500 characters.",
  variant: "primary",
  rows: 4,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Description",
  name: "description",
  placeholder: "Enter your text...",
  error: "This field is required.",
  variant: "danger",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Description",
  name: "description",
  placeholder: "Input disabled",
  disabled: true,
  variant: "primary",
};
