import { ArrowRight, CheckCircle, Dot, Info } from "lucide-react";
import Button from "./Button";

const iconOptions = {
  None: null,
  Dot: <Dot size={16} />,
  ArrowRight: <ArrowRight size={16} />,
  CheckCircle: <CheckCircle size={16} />,
  Info: <Info size={16} />,
};

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
      description: "Button text or content",
      defaultValue: "Button CTA",
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "primaryRed",
        "secondaryRed",
        "outlineRed",
        "ghostRed",
      ],
      description: "Visual style of the button",
      defaultValue: "primary",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl"],
      description: "Controls button size",
      defaultValue: "lg",
    },
    showLeftIcon: {
      control: "boolean",
      description: "Toggle left icon",
      defaultValue: false,
    },
    leftIconType: {
      control: "select",
      options: Object.keys(iconOptions),
      description: "Choose left icon",
      defaultValue: "Dot",
    },
    showRightIcon: {
      control: "boolean",
      description: "Toggle right icon",
      defaultValue: false,
    },
    rightIconType: {
      control: "select",
      options: Object.keys(iconOptions),
      description: "Choose right icon",
      defaultValue: "ArrowRight",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
      defaultValue: false,
    },
    onClick: { action: "clicked" },
  },
};

// Template
const Template = (args) => {
  const { showLeftIcon, leftIconType, showRightIcon, rightIconType, ...rest } = args;

  return (
    <Button
      {...rest}
      leftIcon={showLeftIcon ? iconOptions[leftIconType] : null}
      rightIcon={showRightIcon ? iconOptions[rightIconType] : null}
    />
  );
};

// Default
export const PlayGround = Template.bind({});
PlayGround.args = {
  children: "Button CTA",
  variant: "primary",
  size: "lg",
  showLeftIcon: false,
  showRightIcon: false,
  disabled: false,
};
