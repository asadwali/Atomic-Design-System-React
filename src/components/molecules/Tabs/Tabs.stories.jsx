// Tabs.stories.jsx
import { useState } from "react";
import Avatar from "../../atoms/Avatar/Avatar";
import Badge from "../../atoms/Badges/Badges";
import Tabs from "./Tabs";

export default {
  title: "Molecules/Tabs",
  component: Tabs,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outline", "filled"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
};

// Helper template with state
const Template = (args) => {
  const [tabs, setTabs] = useState(args.tabs);

  const handleTabChange = (name) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        current: tab.name === name,
      }))
    );
  };

  return <Tabs {...args} tabs={tabs} onChange={handleTabChange} />;
};

// -------- Stories ----------

// Default with Badge
export const Default = Template.bind({});
Default.args = {
  variant: "outline",
  size: "md",
  color: "primary",
  tabs: [
    { name: "My Details", current: true, badge: 2, badgeProps: { variant: "primary", size: "sm" } },
    { name: "Profile", current: false },
    { name: "Password", current: false },
    { name: "Team", current: false, badge: 5 },
    { name: "Plan", current: false },
  ],
  badgeComponent: Badge,
};