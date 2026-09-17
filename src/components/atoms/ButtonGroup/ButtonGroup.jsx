import clsx from "clsx";

const variantClasses = {
  primary:
    "text-gray-700 bg-white hover:bg-slate-50 hover:text-gray-800 focus:z-10 focus:bg-primary focus:text-white dark:bg-gray-800 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-primary dark:focus:text-white",

  secondary:
    "text-gray-700 bg-white hover:bg-slate-50 hover:text-gray-800 focus:z-10 focus:bg-secondary focus:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-secondary dark:focus:text-white",

  tertiary:
    "text-gray-700 bg-white hover:bg-slate-50 hover:text-gray-800 focus:z-10 focus:bg-tertiary focus:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-tertiary dark:focus:text-white"
};


const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const ButtonGroup = ({
  buttons = [],
  activeIndex = 0,
  variant = "primary",
  size = "md",
  className = "",
  onClick = () => {},
  ...props
}) => {
  return (
    <div
      className={clsx("inline-flex rounded-md", className)}
      role="group"
      {...props}
    >
      {buttons.map((btn, index) => {
        const isActive = index === activeIndex;
        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;
        const isIconOnly = !btn.label && (btn.leftIcon || btn.rightIcon);

        return (
          <button
            key={index}
            type="button"
            onClick={() => onClick(index)}
            className={clsx(
              "inline-flex items-center justify-center gap-2 font-medium border border-gray-200 transition-colors duration-200",
              variantClasses[variant],
              sizeClasses[size],
              {
                "rounded-s-lg": isFirst,
                "rounded-e-lg": isLast,
                "border-t border-b": !isFirst && !isLast,
                "bg-gray dark:bg-gray-700": isActive,
                "size-10 p-0": isIconOnly,
              }
            )}
            title={btn.label || ""}
          >
            {btn.leftIcon && <span className="mx-auto">{btn.leftIcon}</span>}
            {!isIconOnly && btn.label}
            {btn.rightIcon && <span className="ml-1">{btn.rightIcon}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
