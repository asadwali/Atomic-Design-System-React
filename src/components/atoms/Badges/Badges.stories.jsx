import Badge from './Badges';
import { User, Bell } from 'lucide-react';

export default {
  title: 'Molecules/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'success',
        'warning',
        'error',
        'gray',
        'blueGray',
        'sky',
        'blue',
        'indigo',
        'pink',
        'rose',
        'orange',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    closable: { control: 'boolean' },
    dotLeft: { control: 'boolean' },
    dotRight: { control: 'boolean' },
    image: { control: 'text' },
  },
};

// Default badge
export const Default = {
  args: {
    children: 'Default Badge',
    variant: 'primary',
    size: 'md',
  },
};

// Badge with left icon
export const WithLeftIcon = {
  args: {
    children: 'Notifications',
    variant: 'blue',
    leftIcon: <Bell size={14} />,
  },
};

// Badge with right icon
export const WithRightIcon = {
  args: {
    children: 'Profile',
    variant: 'indigo',
    rightIcon: <User size={14} />,
  },
};

// Badge with dot on left
export const WithDotLeft = {
  args: {
    children: 'Active',
    variant: 'success',
    dotLeft: true,
  },
};

// Badge with dot on right
export const WithDotRight = {
  args: {
    children: 'Status',
    variant: 'warning',
    dotRight: true,
  },
};

// Badge with avatar image
export const WithImage = {
  args: {
    children: 'John Doe',
    variant: 'rose',
    image: 'https://i.pravatar.cc/40?img=1',
  },
};

// Closable chip badge
export const Closable = {
  args: {
    children: 'Removable',
    variant: 'gray',
    closable: true,
  },
};
