import { useState } from 'react';
import PaginationInfoBar from './PaginationInfoBar';

export default {
  title: 'Atoms/PaginationInfoBar',
  component: PaginationInfoBar,
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['top', 'center', 'split', 'mobile'],
    },
    variant: {
      control: { type: 'select' },
      options: ['ghost', 'outline', 'arrows-only'],
    },
      prevLabel: { control: "text" },
    nextLabel: { control: "text" },
  },
};

export const Default = (args) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationInfoBar
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

Default.args = {
  totalPages: 10,
  layout: 'top',
  variant: 'ghost',
   prevLabel: "Back",
  nextLabel: "Next"
};
