import ProgressBar from './ProgressBar';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary'],
    },
    showPercentage: {
      control: { type: 'select' },
      options: ['none', 'inline-right', 'tooltip-top', 'tooltip-bottom', 'below-right'],
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  variant: 'primary',
  showPercentage: 'none',
};

export const InlineRight = Template.bind({});
InlineRight.args = {
  progress: 65,
  variant: 'primary',
  showPercentage: 'inline-right',
};

export const TooltipTop = Template.bind({});
TooltipTop.args = {
  progress: 30,
  variant: 'primary',
  showPercentage: 'tooltip-top',
};

export const TooltipBottom = Template.bind({});
TooltipBottom.args = {
  progress: 80,
  variant: 'primary',
  showPercentage: 'tooltip-bottom',
};

export const BelowRight = Template.bind({});
BelowRight.args = {
  progress: 90,
  variant: 'primary',
  showPercentage: 'below-right',
};
