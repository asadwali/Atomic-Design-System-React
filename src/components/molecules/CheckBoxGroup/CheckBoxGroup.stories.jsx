import { User } from "lucide-react";
import { useState } from "react";
import CheckBoxGroup from "./CheckBoxGroup";

export default {
  title: "Molecules/CheckBoxGroup",
  component: CheckBoxGroup,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["checkbox", "radio"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md"],
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    checkboxPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    mediaPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    squareCheckbox: { control: "boolean" },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <CheckBoxGroup
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

// ✅ Default story
export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Basic Plan",
  helperLabel: "$10/month",
  description: "Includes up to 10 users, 20GB storage and all features.",
  type: "checkbox",
  size: "md",
  variant: "primary",
  checkboxPosition: "right",
  mediaPosition: "left",
  iconholder: <User />,
};

// ✅ Radio variant
export const Radio = Template.bind({});
Radio.args = {
  id: "radio-plan",
  label: "Pro Plan",
  helperLabel: "$25/month",
  description: "Unlimited users, 100GB storage, premium support.",
  type: "radio",
  size: "md",
  variant: "primary",
  checkboxPosition: "left",
  mediaPosition: "left",
  iconholder: <User />,
};

// ✅ Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabled-plan",
  label: "Enterprise Plan",
  helperLabel: "$99/month",
  description: "Best for large teams and organizations.",
  type: "checkbox",
  size: "md",
  variant: "secondary",
  disabled: true,
  checked: false,
  iconholder: <User />,
};

// ✅ With Image
export const WithImage = Template.bind({});
WithImage.args = {
  id: "with-image",
  label: "Team Plan",
  helperLabel: "$50/month",
  description: "Includes advanced reporting & analytics.",
  type: "checkbox",
  size: "md",
  variant: "primary",
  image: "https://i.pravatar.cc/40",
};

// ✅ Small size
export const Small = Template.bind({});
Small.args = {
  id: "small-checkbox",
  label: "Starter Plan",
  helperLabel: "$5/month",
  description: "For individuals and freelancers.",
  type: "checkbox",
  size: "sm",
  variant: "primary",
  checkboxPosition: "left",
  iconholder: <User />,
};
