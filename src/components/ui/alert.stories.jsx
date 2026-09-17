import { useState } from "react";
import { Alert } from "./alert";

export default {
  title: "Atoms/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "danger", "warning", "inverted"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "text-icon", "title-text", "title-text-icon"],
    },
    title: { control: "text" },
    text: { control: "text" },
  },
};

const Template = (args) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return <p className="text-gray-500">Alert closed</p>;

  return (
    <Alert
      {...args}
      onClose={() => setVisible(false)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  type: "title-text-icon",
  title: "Default Alert",
  text: "This is a default alert message.",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  type: "title-text-icon",
  title: "Success!",
  text: "Your action was completed successfully.",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  type: "title-text-icon",
  title: "Error!",
  text: "Something went wrong. Please try again.",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  type: "title-text-icon",
  title: "Warning!",
  text: "Please check your input before continuing.",
};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: "inverted",
  type: "title-text",
  title: "Inverted Alert",
  text: "This alert uses inverted styles.",
};
