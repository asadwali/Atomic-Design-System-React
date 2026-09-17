import clsx from "clsx";
import { useEffect, useRef } from "react";
import Avatar from "../../atoms/Avatar/Avatar";

const sizeStyles = {
  sm: {
    tick: "size-2",
    control: "size-4",
    label: "text-sm font-medium",
    helperLabel: "text-sm",
    description: "text-sm",
    icon: "size-4",
    rounded: "rounded-sm",
  },
  md: {
    tick: "size-3",
    control: "size-5",
    label: "text-sm font-medium",
    helperLabel: "text-sm",
    description: "text-sm",
    icon: "size-5",
    rounded: "rounded-md",
  },
};

const radioStyles = {
  sm: { control: "size-4", icon: "size-4" },
  md: { control: "size-5", icon: "size-5" },
};

const variantStyles = {
  primary: {
    cardChecked: "border-violet-600 outline-violet-600 bg-violet-50",
    controlChecked: "border-violet-600 outline-violet-600 bg-violet-50",
    hover: "group-hover:border-violet-600 group-hover:outline-violet-600",
    focus: "peer-focus-visible:ring-2 peer-focus-visible:ring-violet-200",
    tick: "text-violet-600",
    indeterminate: "bg-violet-50 border-violet-600 outline-violet-600",
    labelChecked: "text-violet-800",
    descriptionChecked: "text-violet-600",
    helperLabelChecked: "text-violet-700",
    iconChecked: "text-violet-700",
  },
  secondary: {
    cardChecked: "border-gray-600 outline-gray-600 bg-gray-50",
    controlChecked: "border-gray-600 outline-gray-600 bg-gray-50",
    hover: "group-hover:border-gray-600 group-hover:outline-gray-600",
    focus: "peer-focus-visible:ring-2 peer-focus-visible:ring-gray-200",
    tick: "text-gray-600",
    indeterminate: "bg-gray-50 border-gray-600 outline-gray-600",
    labelChecked: "text-gray-800",
    descriptionChecked: "text-gray-600",
    helperLabelChecked: "text-gray-500",
    iconChecked: "text-gray-700",
  },
};

const CheckBoxGroup = ({
  id,
  type = "checkbox", // ✅ supports "checkbox" and "radio"
  label,
  name,
  helperLabel,
  description,
  iconholder,
  image,
  checkboxPosition = "right",
  mediaPosition = "left",
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  size = "md",
  variant = "primary",
  squareCheckbox = false,
  className, 
  ...props 
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current && type === "checkbox") {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, type]);

  // card styles
  const cardClasses = clsx(
    "w-full flex items-start justify-between p-4 rounded-lg border transition-colors outline outline-1",
    !checked && !indeterminate && "bg-white",
    "outline-gray-200",
    checked && variantStyles[variant].cardChecked,
    indeterminate && type === "checkbox" && variantStyles[variant].indeterminate,
    !disabled && variantStyles[variant].hover,
    !disabled && variantStyles[variant].focus,
    disabled
      ? "bg-gray-50 border-gray-500 outline-gray-500 cursor-not-allowed opacity-60"
      : "cursor-pointer",
    className 
  );

  // control styles
  const controlClasses = clsx(
    type === "radio" ? radioStyles[size].control : sizeStyles[size].control,
    "relative flex items-center justify-center transition-colors border outline outline-1",
    "outline-gray-200 bg-white",
    checked && variantStyles[variant].controlChecked,
    type === "checkbox" && indeterminate && variantStyles[variant].indeterminate,
    !disabled && variantStyles[variant].hover,
    !disabled && variantStyles[variant].focus,
    !disabled && "group-hover:bg-opacity-90",
    disabled &&
      "bg-gray-500 border-gray-500 outline-gray-500 cursor-not-allowed",
    type === "radio"
      ? "rounded-full"
      : squareCheckbox
      ? sizeStyles[size].rounded
      : "rounded-full"
  );

  let innerMark = null;
  if (type === "checkbox") {
    innerMark = indeterminate ? (
      <div className="w-2 h-0.5 bg-current" />
    ) : (
      checked && (
        <svg
          className={clsx(sizeStyles[size].tick, variantStyles[variant].tick)}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    );
  } else if (type === "radio") {
    innerMark =
      checked && (
        <svg
          className={clsx(
            radioStyles[size].icon,
            variantStyles[variant].tick
          )}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
  }

  const mediaContent = iconholder ? (
    <div className={clsx("shrink-0", variantStyles[variant].iconChecked)}>
      {iconholder}
    </div>
  ) : image ? (
    <Avatar size="xs" imageUrl={image} />
  ) : null;

  return (
    <label htmlFor={id} className="block group">
      {/* Hidden input */}
      <input
        ref={inputRef}
        type={type}
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="peer sr-only"
      />

      {/* ✅ root card div with className + props */}
      <div className={cardClasses} {...props}>
        {/* Left section */}
        <div className="flex gap-3 items-start">
          {checkboxPosition === "left" && (
            <div className={controlClasses}>{innerMark}</div>
          )}

          {mediaPosition === "left" && mediaContent}

          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1">
              <span
                className={clsx(
                  sizeStyles[size].label,
                  checked && variantStyles[variant].labelChecked
                )}
              >
                {label}
              </span>
              {helperLabel && (
                <span
                  className={clsx(
                    sizeStyles[size].helperLabel,
                    checked && variantStyles[variant].helperLabelChecked
                  )}
                >
                  {helperLabel}
                </span>
              )}
            </div>
            {description && (
              <span
                className={clsx(
                  sizeStyles[size].description,
                  checked && variantStyles[variant].descriptionChecked
                )}
              >
                {description}
              </span>
            )}
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {mediaPosition === "right" && mediaContent}
          {checkboxPosition === "right" && (
            <div className={controlClasses}>{innerMark}</div>
          )}
        </div>
      </div>
    </label>
  );
};

export default CheckBoxGroup;
