import { Apple, Facebook, Mail, Twitter } from "lucide-react";
import SocialMediaButton from "./SocialMediaButtons";

export default {
  title: "Atoms/SocialMediaButtons",
  component: SocialMediaButton,
  argTypes: {
    label: {
      control: "text",
      description: "Button text",
      defaultValue: "Sign in",
    },
    variant: {
      control: { type: "select" },
      options: ["google", "facebook", "apple", "twitter", "figma", "dribble"],
      description: "Choose the button style variant",
    },
    showLabel: {
      control: "boolean",
      description: "Toggle label visibility",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    icon: {
      control: { type: "select" },
      options: ["Mail", "Facebook", "Apple", "Twitter"],
      mapping: {
        Mail: <Mail />,
        Facebook: <Facebook />,
        Apple: <Apple />,
        Twitter: <Twitter />,
      },
      description: "Pick an icon",
    },
    onClick: { action: "clicked" },
  },
};

// Default template
const Template = (args) => <SocialMediaButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Sign in with Google",
  variant: "google",
  showLabel: true,
  disabled: false,
  icon: <Mail />,
};
