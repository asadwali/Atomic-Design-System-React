import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { useState } from "react";

const Input = ({
    label,
    type = "text",
    as = "input",
    size = "default",
    variant = "default",
    iconLeft,
    iconRight,
    error,
    fixedLeftText,
    fixedRightText,
    helperText,
    className,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(Boolean(props.value || ""));

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e) => {
        setIsFocused(false);
        setIsFilled(Boolean(e.target.value));
    };

    const sizeClasses = {
        sm: "h-8 px-2 text-sm",
        default: "h-10 px-3 text-base",
        lg: "h-12 px-4 text-lg",
    };

    const variantClasses = {
        default:
            "border border-gray-200 bg-background text-foreground placeholder:text-muted-foreground focus:ring-3 focus:ring-violet-50 focus:outline-violet-300",
        primary:
            "border border-gray-200 bg-primary text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-2 focus:ring-primary",
        secondary:
            "border border-gray-200 bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/60 focus:ring-2 focus:ring-secondary",
        destructive:
            "border border-gray-200 bg-destructive text-destructive-foreground placeholder:text-destructive-foreground/70 focus:ring-2 focus:ring-destructive",
    };

    const baseInteraction =
        "w-full appearance-none rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed";



    return (
        <div className="w-full space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="relative">
                {iconLeft && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                        {iconLeft}
                    </div>
                )}

                <input
                    type={type}
                    data-slot="input"
                    className={cn(
                        baseInteraction,
                        sizeClasses[size],
                        variantClasses[variant],
                        iconLeft && "pl-10",
                        fixedLeftText && "pl-[70px]", // enough space for "http://"
                        iconRight && "pr-10",
                        error && "border-destructive ring-destructive focus:ring-destructive",
                        isFocused && "ring-2 ring-ring",
                        isFilled && "text-foreground",
                        className
                    )}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...props}
                />

                {fixedLeftText && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-900 pointer-events-none whitespace-nowrap">
                        {fixedLeftText}
                    </div>
                )}




                {iconRight && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-900">
                        {iconRight}
                    </div>
                )}
            </div>

            {helperText && !error && (
                <p className="text-xs text-gray-600 mt-2">{helperText}</p>
            )}

            {error && (
                <p className="text-xs gray-600 mt-2">{error}</p>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    as: PropTypes.oneOf(["input", "textarea"]),
    size: PropTypes.oneOf(["sm", "default", "lg"]),
    variant: PropTypes.oneOf([
        "default",
        "primary",
        "secondary",
        "destructive",
    ]),
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    fixedLeftText: PropTypes.string,
    fixedRightText: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    className: PropTypes.string,
};

export default Input;
