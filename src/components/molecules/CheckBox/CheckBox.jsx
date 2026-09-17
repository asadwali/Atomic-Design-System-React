import clsx from "clsx";
import { useEffect, useRef, forwardRef } from "react";

const variantStyles = {
  primary: {
    checked:
      "bg-violet-50 border-violet-600 outline-violet-600 peer-checked:outline peer-checked:outline-1",
    hover: "hover:bg-violet-50 hover:outline-violet-600",
    focus: "peer-focus:ring-3 peer-focus:ring-violet-200",
    icon: "text-violet-600",
  },
  secondary: {
    checked:
      "bg-rose-50 border-rose-600 outline-rose-600 peer-checked:outline peer-checked:outline-1",
    hover: "hover:bg-rose-50 hover:outline-rose-600",
    focus: "peer-focus:ring-3 peer-focus:ring-rose-200",
    icon: "text-rose-600",
  },
  tertiary: {
    checked:
      "bg-green-50 border-green-600 outline-green-600 peer-checked:outline peer-checked:outline-1",
    hover: "hover:bg-green-50 hover:outline-green-600",
    focus: "peer-focus:ring-3 peer-focus:ring-green-200",
    icon: "text-green-600",
  },
};

const sizeStyles = {
  sm: {
    control: "size-4",
    label: "text-sm font-medium text-gray-700 font-medium",
    description: "text-sm font-medium text-gray-500 font-normal",
    icon: "size-4",
    indeterminate: "w-1.5 h-0.5",
    radioDot: "size-2",
  },
  md: {
    control: "size-5",
    label: "text-base font-medium text-gray-700 font-medium",
    description: "text-base font-medium text-gray-500 font-normal",
    icon: "size-5",
    indeterminate: "w-2 h-0.5",
    radioDot: "size-2",
  },
};

const CheckBox = forwardRef(
  (
    {
      type = "checkbox",
      label,
      description,
      name,
      value,
      checked,
      onChange,
      disabled = false,
      id,
      indeterminate = false,
      size = "md",
      variant = "primary",
      className = "",
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useRef(null);
    const inputRef = forwardedRef || internalRef;

    useEffect(() => {
      if (type === "checkbox" && inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, type, inputRef]);

    const baseClasses = clsx("peer sr-only", className);

    const containerClasses = clsx(
      "inline-flex items-start gap-2 cursor-pointer",
      disabled && "opacity-50 cursor-not-allowed"
    );

    const controlClasses = clsx(
      sizeStyles[size].control,
      "flex items-center justify-center transition-colors mt-0.5",
      type === "radio" ? "rounded-full" : "rounded-sm",
      "rounded outline outline-1 outline-gray-300",
      !disabled && variantStyles[variant].hover,
      !disabled && variantStyles[variant].focus,
      checked && variantStyles[variant].checked,
      indeterminate && variantStyles[variant].checked,
      disabled &&
      "bg-gray-200 border-gray-300 outline-gray-300 cursor-not-allowed"
    );

    const innerDot = indeterminate ? (
      <svg
        className={`${sizeStyles[size].icon} ${variantStyles[variant].icon}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <line x1="6" y1="12" x2="18" y2="12" />
      </svg>
    ) : type === "radio" ? (
      <svg
        className={`${sizeStyles[size].icon} ${variantStyles[variant].icon}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="6" />
      </svg>
    ) : (
      <svg
        className={`${sizeStyles[size].icon} ${variantStyles[variant].icon}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );

    return (
      <label className={containerClasses} htmlFor={id}>
        <input
          ref={inputRef}
          type={type}
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={baseClasses}
          {...props}
        />
        <div className={controlClasses}>
          {(checked || indeterminate) && innerDot}
        </div>
        {(label || description) && (
          <div className="flex flex-col justify-center leading-tight">
            {label && <span className={sizeStyles[size].label}>{label}</span>}
            {description && (
              <span className={sizeStyles[size].description}>{description}</span>
            )}
          </div>
        )}
      </label>
    );
  }
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
