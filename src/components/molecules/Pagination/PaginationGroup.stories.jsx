import { useState } from 'react';
import PaginationGroup from './PaginationGroup';

export default {
  title: 'Atoms/PaginationGroup',
  component: PaginationGroup,
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    buttonStyle: {
      control: { type: 'select' },
      options: ['text', 'arrow', 'text+arrow'],
    },
      prevLabel: { control: "text" },
    nextLabel: { control: "text" },
  },
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationGroup
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  alignment: 'center',
  buttonStyle: 'text+arrow',
   prevLabel: "Back",
  nextLabel: "Next"
};
