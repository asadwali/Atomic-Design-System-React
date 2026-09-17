import SemiCircularProgressBar from "./SemiCircleProgressBar";


export default {
  title: "Molecules/SemiCircularProgressBar",
  component: SemiCircularProgressBar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Controls the size of the semicircle progress bar",
    },
    percentage: {
      control: { type: "number" },
      description: "Progress percentage (0–100)",
    },
    label: {
      control: { type: "text" },
      description: "Optional text label inside or below the bar",
    },
    variant: {
      control: { type: "select" },
      options: ["primary"],
      description: "Color variant for the progress bar",
    },
    bgColor: {
      control: { type: "text" },
      description: "Tailwind class for background stroke color",
    },
  },
};

const Template = (args) => <SemiCircularProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "md",
  percentage: 50,
  label: "Active users",
  variant: "primary",
  bgColor: "stroke-gray-200",
};

export const XSSize = Template.bind({});
XSSize.args = {
  size: "xs",
  percentage: 75,
  label: "Tiny",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  percentage: 90,
  label: "Completed",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  size: "md",
  percentage: 40,
};
