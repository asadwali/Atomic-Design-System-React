import { Eye, User } from "lucide-react";
import InputWithDropDown from "./InputWithDropDown";

export default {
  title: "Components/InputWithDropDown",
  component: InputWithDropDown,
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "url", "number"],
    },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    className: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    size: {
      control: "radio",
      options: ["sm", "default", "lg"],
    },
    variant: {
      control: "radio",
      options: ["default"],
    },
    showLeftIcon: { control: "boolean", name: "Show Left Icon" },
    showRightIcon: { control: "boolean", name: "Show Right Icon" },
    showDropdown: { control: "boolean", name: "Show Dropdown" },
  },
};

const Template = (args) => {
  const {
    showLeftIcon,
    showRightIcon,
    showDropdown,
    ...rest
  } = args;

  return (
    <InputWithDropDown
      {...rest}
      leftIcon={showLeftIcon ? <User size={16} /> : null}
      rightIcon={showRightIcon ? <Eye size={16} /> : null}
      dropdown={
        showDropdown
          ? {
              name: "country",
              defaultValue: "USA",
              options: ["USA", "Canada", "UK", "Australia"],
            }
          : null
      }
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  label: "Username",
  name: "username",
  type: "text",
  placeholder: "Enter your name",
  value: "",
  size: "default",
  variant: "default",
  helperText: "This is your unique username.",
  showLeftIcon: true,
  showRightIcon: true,
  showDropdown: false,
};
