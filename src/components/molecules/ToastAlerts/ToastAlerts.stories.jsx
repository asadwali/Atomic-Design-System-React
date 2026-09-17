import { Info } from "lucide-react"; // Optional icons 
import Toast from './ToastAlerts';
export default {
  title: 'Molecules/Toast Alerts',
  component: Toast,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: false },
    onClose: { action: 'closed' },
  },
};

const iconMap = {
  primary: <Info className="size-5" />,
  success: <Info className="size-5" />,
  warning: <Info className="size-5" />,
  error: <Info className="size-5" />,
};

const Template = (args) => (
  <Toast {...args} icon={iconMap[args.type]} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  title: 'Info Message',
  description: 'This is a primary toast message.',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  title: 'Success!',
  description: 'Your action was successful.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  title: 'Warning!',
  description: 'Be cautious with this action.',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  title: 'Error!',
  description: 'Something went wrong.',
};
