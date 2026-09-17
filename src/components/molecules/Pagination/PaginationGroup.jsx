import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

const variantStyles = {
  primary: {
    base: "border-gray-300 text-gray-800 hover:bg-gray-100",
    active: "bg-violet-100 text-violet-600 border-violet-300",
    disabled: "opacity-50 cursor-not-allowed bg-gray-50 text-gray-400",
    border: "border-gray-300 divide-gray-300",
  },
  secondary: {
    base: "border-gray-300 text-gray-800 hover:bg-gray-100",
    active: "bg-rose-100 text-rose-600 border-rose-300",
    disabled: "opacity-50 cursor-not-allowed bg-gray-50 text-gray-400",
    border: "border-gray-300 divide-gray-300",
  },
  tertiary: {
    base: "border-gray-300 text-gray-800 hover:bg-gray-100",
    active: "bg-green-100 text-green-600 border-green-300",
    disabled: "opacity-50 cursor-not-allowed bg-gray-50 text-gray-400",
    border: "border-gray-300 divide-gray-300",
  },
};

const PaginationButton = ({
  label,
  icon,
  onClick,
  disabled,
  isActive,
  color,
  className,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      "px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:z-10",
      "flex items-center gap-1",
      isActive ? variantStyles[color].active : variantStyles[color].base,
      disabled && variantStyles[color].disabled,
      className
    )}
  >
    {icon === "left" && <ArrowLeft className="inline size-4" />}
    {label}
    {icon === "right" && <ArrowRight className="inline size-4" />}
  </button>
);

const PaginationGroup = ({
  currentPage,
  totalPages,
  onPageChange,
  alignment = "center", // 'left' | 'center' | 'right'
  buttonStyle = "text+arrow", // 'text' | 'arrow' | 'text+arrow'
  color = "primary", // 'primary' | 'secondary' | 'tertiary'
  prevLabel = "Previous",
  nextLabel = "Next",
  className = "",
  ...props
}) => {
  const visiblePages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const handlePageClick = (page) => {
    if (page !== "...") onPageChange(page);
  };

  const getButtonLabel = (type) => {
    if (buttonStyle === "text") return type === "prev" ? prevLabel : nextLabel;
    if (buttonStyle === "arrow") return "";
    return type === "prev" ? prevLabel : nextLabel; // default "text+arrow"
  };

  const getButtonIcon = (type) => {
    if (buttonStyle === "text") return null;
    if (buttonStyle === "arrow" || buttonStyle === "text+arrow") {
      return type === "prev" ? "left" : "right";
    }
    return null;
  };

  const alignmentClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[alignment];

  return (
    <div
      className={clsx("w-full flex mt-4", alignmentClass, className)}
      {...props}
    >
      <div
        className={clsx(
          "inline-flex rounded-lg overflow-hidden border divide-x",
          variantStyles[color].border
        )}
      >
        {/* Previous Button */}
        <PaginationButton
          label={getButtonLabel("prev")}
          icon={getButtonIcon("prev")}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          color={color}
        />

        {/* Page Numbers */}
        {visiblePages().map((page, idx) => (
          <PaginationButton
            key={idx}
            label={page}
            onClick={() => handlePageClick(page)}
            disabled={page === "..."}
            isActive={page === currentPage}
            color={color}
          />
        ))}

        {/* Next Button */}
        <PaginationButton
          label={getButtonLabel("next")}
          icon={getButtonIcon("next")}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          color={color}
        />
      </div>
    </div>
  );
};

export default PaginationGroup;
