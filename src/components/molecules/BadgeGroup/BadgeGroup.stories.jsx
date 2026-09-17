// BadgeGroup.stories.jsx
import { Plus, X, Check, Info } from "lucide-react";
import BadgeGroup from "./BadgeGroup";

const ICONS = {
  None: null,
  Plus: <Plus size={16} />,
  X: <X size={16} />,
  Check: <Check size={16} />,
  Info: <Info size={16} />,
};

export default {
  title: "Molecules/BadgeGroup",
  component: BadgeGroup,
  argTypes: {
    label: { control: "text" },
    icon: {
      control: { type: "select" },
      options: Object.keys(ICONS),
      mapping: ICONS,
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "success",
        "warning",
        "error",
        "gray",
        "blueGray",
        "sky",
        "blue",
        "indigo",
        "pink",
        "rose",
        "orange",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    showButton: { control: "boolean" },
    buttonPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    buttonLabel: { control: "text" },
    buttonIcon: { control: "boolean" },
    buttonIconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
};

const Template = (args) => <BadgeGroup {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  label: "Badge Label",
  icon: <Plus size={16} />,
  iconPosition: "left",
  variant: "primary",
  size: "md",
  showButton: true,
  buttonPosition: "right",
  buttonLabel: "Click Me",
  buttonIcon: true,
  buttonIconPosition: "right",
};
