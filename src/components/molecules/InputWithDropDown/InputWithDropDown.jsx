import { ChevronDownIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const InputWithDropDown = ({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    leftIcon,
    rightIcon,
    dropdown,
    error,
    helperText,
    className,
    disabled = false,
    size = "default",
    variant = "default",
}) => {
    const sizeClasses = {
        sm: "h-8 px-2 text-sm",
        default: "h-10 px-3 text-base",
        lg: "h-12 px-4 text-lg",
    };

    const variantClasses = {
        default:
            "border border-gray-200 bg-background text-foreground placeholder:text-muted-foreground focus-within:outline focus-within:outline-2 focus-within:outline-violet-300 focus-within:ring-2 focus-within:ring-violet-200",
        primary:
            "bg-violet-100 text-violet-800 border border-violet-300 focus-within:outline focus-within:outline-2 focus-within:outline-violet-500 focus-within:ring-2 focus-within:ring-violet-400",
        secondary:
            "bg-gray-100 text-gray-800 border border-gray-300 focus-within:outline focus-within:outline-2 focus-within:outline-gray-500 focus-within:ring-2 focus-within:ring-gray-400",
        destructive:
            "bg-red-100 text-red-800 border border-red-300 focus-within:outline focus-within:outline-2 focus-within:outline-red-500 focus-within:ring-2 focus-within:ring-red-400",
    };

    const renderDropdown = (isLeft = false, disabled = false) => (
        <div className={cn("relative", isLeft ? "order-first mr-2" : "ml-2")}>
            <select
                id={dropdown.name}
                name={dropdown.name}
                disabled={disabled}
                defaultValue={dropdown.defaultValue}
                className="appearance-none bg-transparent py-1.5 pr-6 pl-2 text-base text-gray-700 sm:text-sm focus:outline-none focus:ring-0 focus:border-none"
            >
                {dropdown.options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>

            <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 size-5 text-gray-500 sm:size-4"
            />
        </div>
    );

    return (
        <div className={cn("w-full", className)}>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="mt-2">
                <div
                    className={cn(
                        "flex items-center rounded-md transition",
                        sizeClasses[size],
                        variantClasses[variant],
                         disabled && "opacity-50 cursor-not-allowed",
                        error && "border-destructive ring-1 ring-destructive"
                    )}
                >
                    {leftIcon && (
                        <div className="shrink-0 text-base text-gray-600 select-none sm:text-sm mr-2">
                            {leftIcon}
                        </div>
                    )}

                    {dropdown && rightIcon && renderDropdown(true, disabled)}

                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={cn(
                            "block min-w-0 grow bg-transparent focus:outline-none",
                            sizeClasses[size],
                            "text-gray-900 placeholder:text-gray-400"
                        )}
                    />

                    {rightIcon && (
                        <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm ml-2">
                            {rightIcon}
                        </div>
                    )}

                    {dropdown && !rightIcon && renderDropdown(false, disabled)}
                </div>

                {helperText && !error && (
                    <p className="text-xs text-gray-600 mt-1">{helperText}</p>
                )}

                {error && (
                    <p className="text-xs text-gray-600 mt-1">{error}</p>
                )}
            </div>
        </div>
    );
};

InputWithDropDown.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    helperText: PropTypes.string,
    size: PropTypes.oneOf(["sm", "default", "lg"]),
    variant: PropTypes.oneOf(["default", "primary", "secondary", "destructive"]),
    dropdown: PropTypes.shape({
        name: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};

export default InputWithDropDown;
