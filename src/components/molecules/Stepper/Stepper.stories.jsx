import Stepper from './Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    steps: {
      control: { type: 'object' },
      defaultValue: [
        {
          id: 1,
          label: 'Step 1',
          description: 'This is the first step',
          href: '#',
          status: 'done',
        },
        {
          id: 2,
          label: 'Step 2',
          description: 'Currently active step',
          href: '#',
          status: 'active',
        },
        {
          id: 3,
          label: 'Step 3',
          description: 'Next up',
          href: '#',
          status: 'inactive',
        },
      ],
    },
  },
};

const Template = (args) => (
  <div className="p-10 bg-gray-50 min-h-screen">
    <Stepper {...args} />
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  steps: [
    {
      id: 1,
      label: 'Step 1',
      description: 'This is the first step',
      href: '#',
      status: 'done',
    },
    {
      id: 2,
      label: 'Step 2',
      description: 'Currently active step',
      href: '#',
      status: 'active',
    },
    {
      id: 3,
      label: 'Step 3',
      description: 'Next up',
      href: '#',
      status: 'inactive',
    },
  ],
};
