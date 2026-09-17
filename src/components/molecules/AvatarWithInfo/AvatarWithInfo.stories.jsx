import AvatarWithInfo from './AvatarWithInfo';
import { User, Building } from 'lucide-react';

export default {
  title: 'Molecules/AvatarWithInfo',
  component: AvatarWithInfo,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    type: {
      control: 'select',
      options: ['image', 'initials', 'icon'],
    },
    state: {
      control: 'select',
      options: ['default'],
    },
    showNotification: {
      control: 'boolean',
    },
    notificationColor: {
      control: 'select',
      options: ['bg-green-500', 'bg-red-500', 'bg-yellow-500'],
    },
    showCompanyIcon: {
      control: 'boolean',
    },
    imageUrl: { control: 'text' },
    companyImageUrl: { control: 'text' },
    userName: { control: 'text' },
    email: { control: 'text' },
  },
};

const Template = (args) => {
  const {
    type,
    showCompanyIcon,
    companyImageUrl,
    ...rest
  } = args;

  const finalArgs = {
    ...rest,
    type,
    placeholderIcon: type === 'icon' ? <User className="size-5" /> : undefined,
    showCompanyIcon,
    companyImageUrl,
    companyIcon: showCompanyIcon && !companyImageUrl ? <Building className="w-3 h-3" /> : undefined,
  };

  return <AvatarWithInfo {...finalArgs} />;
};

export const Playground = Template.bind({});
Playground.args = {
  size: 'md',
  type: 'initials',
  state: 'default',
  userName: 'Jane Doe',
  email: 'jane.doe@example.com',
  imageUrl: '',
  companyImageUrl: '',
  showNotification: true,
  notificationColor: 'bg-green-500',
  showCompanyIcon: false,
};
