import CircularProgressBar from './CircularProgressBar';

// Storybook default metadata
export default {
  title: 'Molecules/CircularProgressBar',
  component: CircularProgressBar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary'],
    },
    bgColor: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    className: {
      control: false,
    },
  },
};

// Template for stories
const Template = (args) => <CircularProgressBar {...args} />;

// Default example
export const Default = Template.bind({});
Default.args = {
  size: 'md',
  percentage: 65,
  label: 'Progress',
  variant: 'primary',
  bgColor: 'stroke-gray-200',
};

// Small size with label below (xs behavior)
export const ExtraSmallWithLabelBelow = Template.bind({});
ExtraSmallWithLabelBelow.args = {
  size: 'xs',
  percentage: 40,
  label: 'Active users',
};

// Large size with high percentage
export const LargeComplete = Template.bind({});
LargeComplete.args = {
  size: 'lg',
  percentage: 95,
  label: 'Almost done',
};

// Without label
export const NoLabel = Template.bind({});
NoLabel.args = {
  size: 'md',
  percentage: 50,
  label: '',
};
