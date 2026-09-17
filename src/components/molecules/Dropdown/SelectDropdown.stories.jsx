// DropdownSelect.stories.jsx
import DropdownSelect from "./SelectDropdown";

export default {
  title: "Molecules/DropdownSelect",
  component: DropdownSelect,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "destructive"],
    },
    type: {
      control: "select",
      options: ["", "avatar", "userIcon", "statusIndicator"],
    },
    onChange: { action: "changed" },
  },
};

// Example items
const items = [
  { name: "Alice Johnson", tag: "Admin", url: "https://i.pravatar.cc/150?img=1" },
  { name: "Bob Smith", tag: "Editor", url: "https://i.pravatar.cc/150?img=2" },
  { name: "Charlie Brown", tag: "Viewer", url: "https://i.pravatar.cc/150?img=3" },
];

const statusItems = [
  { name: "Online", statusColor: "text-green-500" },
  { name: "Busy", statusColor: "text-red-500" },
  { name: "Away", statusColor: "text-yellow-500" },
  { name: "Offline", statusColor: "text-gray-400" },
];

export const Default = {
  args: {
    label: "Select User",
    placeholder: "Choose user",
    items,
    variant: "primary",
  },
};

export const Searchable = {
  args: {
    label: "Search Users",
    placeholder: "Search user...",
    items,
    variant: "secondary",
    searchable: true,
  },
};

export const WithAvatars = {
  args: {
    label: "Team Members",
    items,
    type: "avatar",
    variant: "default",
    showTag: true,
  },
};

export const WithUserIcon = {
  args: {
    label: "User List",
    items,
    type: "userIcon",
    variant: "primary",
  },
};

export const WithStatusIndicator = {
  args: {
    label: "Status",
    items: statusItems,
    type: "statusIndicator",
    variant: "destructive",
  },
};
