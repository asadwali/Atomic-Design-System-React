import { useState } from "react";
import CheckBox from "./CheckBox";

export default {
  title: "Molecules/CheckBox",
  component: CheckBox,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["checkbox", "radio"],
      description: "Switch between checkbox and radio",
    },
    label: {
      control: "text",
      description: "Main label text",
    },
    description: {
      control: "text",
      description: "Supporting text below label",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
      description: "Size of the checkbox and label text",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "Visual variant style",
    },
    checked: {
      control: "boolean",
      description: "Checked state (controlled)",
    },
    indeterminate: {
      control: "boolean",
      description: "Show indeterminate state (dash)",
    },
    disabled: {
      control: "boolean",
      description: "Disable the control",
    },
    name: { control: "text" },
    value: { control: "text" },
    id: { control: "text" },
    className: { control: "text" },
  },
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  return (
    <CheckBox
      {...args}
      checked={isChecked}
      onChange={(e) => {
        setIsChecked(e.target.checked);
        args.onChange && args.onChange(e); // still logs actions
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Accept Terms",
  description: "Please accept terms & conditions",
  type: "checkbox",
  size: "md",
  variant: "primary",
  checked: false,
  indeterminate: false,
  disabled: false,
};

export const RadioExample = Template.bind({});
RadioExample.args = {
  label: "Select this option",
  type: "radio",
  name: "radio-group",
  size: "md",
  variant: "secondary",
};

export const IndeterminateExample = Template.bind({});
IndeterminateExample.args = {
  label: "Select All",
  indeterminate: true,
  checked: false,
  variant: "tertiary",
};
