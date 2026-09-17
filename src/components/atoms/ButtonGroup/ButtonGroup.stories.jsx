// ButtonGroup.stories.jsx
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import ButtonGroup from "./ButtonGroup";

export default {
  title: "Molecules/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    activeIndex: {
      control: { type: "number" },
    },
    onClick: { action: "clicked" },
  },
};

// --- Template for reusability ---
const Template = (args) => {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex || 0);

  const handleClick = (index) => {
    alert(`You clicked button at index: ${index}`);
    setActiveIndex(index);
    args.onClick(index);
  };

  return (
    <ButtonGroup
      {...args}
      activeIndex={activeIndex}
      onClick={handleClick}
    />
  );
};

// --- Variants ---
export const Default = Template.bind({});
Default.args = {
  buttons: [
    { label: "Profile" },
    { label: "Settings" },
    { label: "Messages" },
  ],
  variant: "primary",
  size: "md",
  activeIndex: 0,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  buttons: [
    { label: "Profile", leftIcon: <Plus size={16} /> },
    { label: "Settings", leftIcon: <Plus size={16} /> },
    { label: "Messages", leftIcon: <Plus size={16} /> },
  ],
  variant: "secondary",
  size: "md",
  activeIndex: 1,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  buttons: [
    { leftIcon: <ChevronLeft size={18} /> },
    { leftIcon: <Plus size={18} /> },
    { leftIcon: <ChevronRight size={18} /> },
  ],
  variant: "tertiary",
  size: "sm",
  activeIndex: 0,
};
