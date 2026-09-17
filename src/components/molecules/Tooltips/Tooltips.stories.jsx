import Tooltip from "./Tooltips";

export default {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    alwaysVisible: { control: 'boolean' },
    arrow: {
      control: 'select',
      options: [
        'top-center',
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'right',
        'left',
        'none',
      ],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
};

const Template = (args) => (
  <div className="mt-20 ml-20">
    <Tooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'This is a tooltip',
  description: 'Helpful explanation text.',
  alwaysVisible: false,
  arrow: 'bottom-center',
  variant: 'primary',
};
