import Avatar from './Avatar';
import { User, Building } from 'lucide-react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    state: {
      control: 'select',
      options: ['default'],
    },
    type: {
      control: 'select',
      options: ['image', 'initials', 'icon'],
    },
    showNotification: {
      control: 'boolean',
    },
    showCompanyIcon: {
      control: 'boolean',
    },
    notificationColor: {
      control: 'select',
      options: ['bg-green-500', 'bg-red-500', 'bg-yellow-500'],
    },
    imageUrl: { control: 'text' },
    companyImageUrl: { control: 'text' },
    userName: { control: 'text' },
  },
};

const Template = (args) => {
  // If type is icon, ensure we show placeholderIcon
  const finalArgs = {
    ...args,
    placeholderIcon: args.type === 'icon' ? <User className="size-5" /> : undefined,
    companyIcon: args.showCompanyIcon && !args.companyImageUrl ? <Building className="w-3 h-3" /> : undefined,
  };
  return <Avatar {...finalArgs} />;
};

export const Playground = Template.bind({});
Playground.args = {
  size: 'md',
  state: 'default',
  type: 'initials',
  userName: 'Jane Doe',
  showNotification: false,
  showCompanyIcon: false,
  notificationColor: 'bg-green-500',
  imageUrl: '',
  companyImageUrl: '',
};
