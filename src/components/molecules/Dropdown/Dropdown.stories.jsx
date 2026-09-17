import { Folder, LogOut, Settings, User } from 'lucide-react';
import Dropdowns from './Dropdown';

export default {
  title: 'Molecules/Dropdowns',
  component: Dropdowns,
  argTypes: {
    withDivider: { control: 'boolean', defaultValue: false },
    withIcons: { control: 'boolean', defaultValue: false },
    withCheckbox: { control: 'boolean', defaultValue: false },
    withShortcuts: { control: 'boolean', defaultValue: false },
    withCount: { control: 'boolean', defaultValue: false },
    withHeader: {
      control: 'text',
      defaultValue: '',
    },
  },
};

const itemsBase = [
  {
    label: 'Profile',
    icon: <User size={16} />,
    count: 2,
    shortcut: '⌘+P',
  },
  {
    label: 'Settings',
    icon: <Settings size={16} />,
    count: 5,
    shortcut: '⌘+S',
  },
  {
    label: 'Files',
    icon: <Folder size={16} />,
    count: 1,
    shortcut: '⌘+F',
  },
  {
    label: 'Logout',
    icon: <LogOut size={16} />,
    shortcut: '⌘+L',
  },
];

const Template = (args) => {
  // Map additional props to items based on toggles
  const items = itemsBase.map((item, index) => ({
    ...item,
    checked: args.withCheckbox ? index === 0 : undefined,
  }));

  return (
    <div className="p-10">
      <Dropdowns {...args} items={items} onSelect={(val) => console.log('Selected:', val)} />
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  withDivider: false,
  withIcons: false,
  withCheckbox: false,
  withShortcuts: false,
  withCount: false,
  withHeader: '',
};
