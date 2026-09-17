import { useState } from "react";
import Pagination from "./Pagination";

export default {
  title: "Atoms/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: { control: { type: "number", min: 1 }, defaultValue: 10 },
    currentPage: { control: { type: "number", min: 1 }, defaultValue: 1 },
    color: {
      control: { type: "radio" },
      options: ["primary"],
    },
    arrowStyle: {
      control: { type: "radio" },
      options: ["ghost", "outline", "arrows-only"],
    },
    shape: {
      control: { type: "radio" },
      options: ["square", "circle"],
    },
    className: { control: "text" },
    prevLabel: { control: "text" },
    nextLabel: { control: "text" },
  },
};

const Template = (args) => {
  const [page, setPage] = useState(args.currentPage || 1);

  return (
    <Pagination
      {...args}
      currentPage={page}
      onPageChange={(newPage) => setPage(newPage)}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  totalPages: 10,
  currentPage: 1,
  color: "primary",
  arrowStyle: "ghost",
  shape: "square",
  prevLabel: "Back",
  nextLabel: "Next"
};
