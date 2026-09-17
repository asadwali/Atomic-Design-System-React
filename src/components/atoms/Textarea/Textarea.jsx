import clsx from "clsx";

const VARIANT_CLASSES = {
  primary: {
    base: "border-gray-200 focus:border-violet-300 focus:ring-3 focus:ring-violet-50 focus:outline-violet-200",
    text: "text-gray-900 px-3.5 py-2.5",
    label: "text-gray-700",
    helper: "text-gray-600",
    error: "text-red-600",
  },
  danger: {
    base: "border-red-200 focus:border-red-300 focus:ring-3 focus:ring-red-50 focus:outline-red-200",
    text: "text-gray-700 px-3.5 py-2.5",
    label: "text-gray-700",
    helper: "text-red-500",
    error: "text-red-500",
  },
};

const Textarea = ({
  label,
  name,
  placeholder = "",
  value,
  onChange,
  variant = "primary",
  disabled = false,
  error = "",
  helperText = "",
  rows = 4,
  className = "",
}) => {
  const styles = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className={clsx("mb-1 block text-sm font-medium", styles.label)}
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={clsx(
          "block w-full rounded-md border shadow-sm sm:text-sm",
          "transition-colors focus:outline-none focus:ring-2",
          styles.base,
          styles.text,
          {
            "bg-gray-100 cursor-not-allowed opacity-70": disabled,
            "border-red-500 ring-red-500": error,
          },
          className
        )}
      />

      {error ? (
        <p className={clsx("mt-1 text-sm", styles.error)}>{error}</p>
      ) : helperText ? (
        <p className={clsx("mt-1 text-sm", styles.helper)}>{helperText}</p>
      ) : null}
    </div>
  );
};

export default Textarea;
