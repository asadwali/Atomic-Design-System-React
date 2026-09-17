import clsx from "clsx";

const variantClasses = {
  primary: 'bg-violet-100 text-violet-800 dark:bg-violet-200 dark:text-violet-900',
  success: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
  error: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
  gray: 'bg-gray-100 text-gray-800 dark:bg-gray-200 dark:text-gray-900',
  blueGray: 'bg-gray-50 text-indigo-800',
  sky: 'bg-sky-50 text-sky-700',
  blue: 'bg-blue-50 text-blue-700',
  indigo: 'bg-indigo-50 text-indigo-700',
  pink: 'bg-pink-50 text-pink-700',
  rose: 'bg-rose-50 text-rose-700',
  orange: 'bg-orange-50 text-orange-700',
};

const sizeClasses = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-3 py-1",
  lg: "text-base px-3 py-1",
};

const buttonClasses = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-2 py-0.5",
  lg: "text-base px-2 py-0.5",
};

const labelTextClasses = {
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm",
};

const BadgeGroup = ({
  label = "",
  icon,
  iconPosition = "left",
  variant = "primary",
  size = "md",
  showButton = false,
  buttonPosition = "right",
  buttonLabel = "Click",
  buttonIcon,
  buttonIconPosition = "right",
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-sm font-medium",
        variantClasses[variant],
        sizeClasses[size]
      )}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}

      {/* Left Button */}
      {buttonPosition === "left" && showButton && (
        <button
          className={clsx(
            "border rounded-sm border-current border-opacity-50 hover:bg-opacity-20 transition inline-flex items-center gap-1",
            buttonClasses[size]
          )}
        >
          {buttonIcon && buttonIconPosition === "left" && (
            <span className="shrink-0">{buttonIcon}</span>
          )}
          {buttonLabel}
          {buttonIcon && buttonIconPosition === "right" && (
            <span className="shrink-0">{buttonIcon}</span>
          )}
        </button>
      )}

      {/* Label */}
      <span className={clsx(labelTextClasses[size])}>{label}</span>

      {/* Right Button */}
      {buttonPosition === "right" && showButton && (
        <button
          className={clsx(
            "border rounded-sm border-current border-opacity-50 hover:bg-opacity-20 transition inline-flex items-center gap-1",
            buttonClasses[size]
          )}
        >
          {buttonIcon && buttonIconPosition === "left" && (
            <span className="shrink-0">{buttonIcon}</span>
          )}
          {buttonLabel}
          {buttonIcon && buttonIconPosition === "right" && (
            <span className="shrink-0">{buttonIcon}</span>
          )}
        </button>
      )}

      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </span>
  );
};

export default BadgeGroup;
