import AvatarGroup from './AvatarGroup';

export default {
  title: 'Molecules/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    maxVisible: { control: 'number' },
    showMoreButton: { control: 'boolean' },
    showAddButton: { control: 'boolean' },
  },
};

const Template = (args) => <AvatarGroup {...args} />;

export const WithImages = Template.bind({});
WithImages.args = {
  avatars: [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
  ],
  size: 'md',
  maxVisible: 5,
  showMoreButton: true,
  showAddButton: false,
};

export const WithNames = Template.bind({});
WithNames.args = {
  avatars: ['Asad Wali', 'Abbas Mastan', 'Ali Raza', 'Sara Khan'],
  size: 'md',
  maxVisible: 5,
  showMoreButton: false,
  showAddButton: false,
};
