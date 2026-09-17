import Toggle from './Toggle';

export default {
  title: 'Molecules/Toggle',
  component: Toggle,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    color: { 
      control: { type: 'select' }, 
      options: ['primary'] 
    },
    size: { 
      control: { type: 'select' }, 
      options: ['sm', 'md', 'lg'] 
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'toggled' }
  },
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Enable notifications',
  description: 'Get notified when something changes',
  color: 'primary',
  size: 'md',
  checked: false,
  disabled: false,
};
