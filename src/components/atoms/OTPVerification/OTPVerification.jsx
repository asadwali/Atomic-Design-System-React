import clsx from "clsx";
import { useRef } from "react";

const SIZE_CLASSES = {
  sm: "size-10 text-sm",
  md: "size-12 text-base",
  lg: "size-14 text-lg",
};

const OTPInput = ({
  value = "",
  onChange,
  length = 4, // 4 or 6
  size = "md", // sm, md, lg
  label,
  helperText,
  error = "",
  disabled = false,
  name = "otp",
}) => {
  const inputs = useRef([]);

  const handleChange = (e, i) => {
    const val = e.target.value.replace(/\D/, ""); // Only digits
    if (!val) return;

    const newValue = value.split("");
    newValue[i] = val;
    onChange(newValue.join("").slice(0, length));

    // Auto focus next
    if (val && i < length - 1) {
      inputs.current[i + 1]?.focus();
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      const newValue = value.split("");
      newValue[i - 1] = "";
      onChange(newValue.join(""));
      inputs.current[i - 1]?.focus();
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="flex gap-2">
        {Array.from({ length }).map((_, i) => (
          <span key={i} className="contents">
            {length === 6 && i === 3 && (
              <span
                className={clsx(
                  "flex items-center justify-center",
                  SIZE_CLASSES[size],
                  "text-6xl font-bold text-gray-300"
                )}
              >
                -
              </span>
            )}
            <input
              ref={(el) => (inputs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              disabled={disabled}
              value={value[i] || ""}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={clsx(
                "border border-gray-200 rounded text-center focus:outline-none focus:ring-2 focus:ring-violet-400",
                SIZE_CLASSES[size],
                {
                  "bg-gray-100 text-gray-400": disabled,
                  "border-red-500 ring-red-500": error,
                }
              )}
            />
          </span>
        ))}
      </div>

      {error ? (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-600">{helperText}</p>
      ) : null}
    </div>
  );
};

export default OTPInput;
