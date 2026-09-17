import clsx from "clsx";
import { useEffect, useRef } from "react";
import Button from "../../atoms/Button/Button";

const sizeStyles = {
    sm: {
        tick: "size-2",
        control: "size-4",
        label: "text-sm text-gray-700 font-medium",
        description: "text-sm text-gray-600 font-normal",
        helpertext: "text-sm text-gray-600 font-medium",
        rounded: "rounded-sm",
    },
    md: {
        tick: "size-3",
        control: "size-5",
        label: "text-sm text-gray-700 font-medium",
        description: "text-sm text-gray-600 font-normal",
        helpertext: "text-sm text-gray-600 font-medium",
        rounded: "rounded-md",
    },
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
        iconChecked: "text-violet-700",
        helpertext: "text-violet-500"
    },
};

const PaymentCheckBoxCard = ({
    id,
    name,
    checked = false,
    indeterminate = false,
    onChange,
    disabled = false,
    size = "md",
    variant = "primary",
    squareCheckbox = false,
    icon,
    title,
    description,
    helperText,
    buttonLabel = "Edit",
    onButtonClick,
    className,
    ...props
}) => {
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    // card styles
    const cardClasses = clsx(
        "w-full flex items-start justify-between p-4 rounded-lg border transition-colors outline outline-1",
        !checked && !indeterminate && "bg-white",
        "outline-gray-200",
        checked && variantStyles[variant].cardChecked,
        indeterminate && variantStyles[variant].indeterminate,
        !disabled && variantStyles[variant].hover,
        !disabled && variantStyles[variant].focus,
        disabled
            ? "bg-gray-50 border-gray-500 outline-gray-500 cursor-not-allowed opacity-60"
            : "cursor-pointer",
        className
    );

    // checkbox styles
    const controlClasses = clsx(
        sizeStyles[size].control,
        "relative flex items-center justify-center transition-colors border outline outline-1",
        "outline-gray-200 bg-white",
        checked && variantStyles[variant].controlChecked,
        indeterminate && variantStyles[variant].indeterminate,
        !disabled && variantStyles[variant].hover,
        !disabled && variantStyles[variant].focus,
        disabled && "bg-gray-500 border-gray-500 outline-gray-500 cursor-not-allowed",
        squareCheckbox ? sizeStyles[size].rounded : "rounded-full"
    );

    let innerMark = null;
    if (indeterminate) {
        innerMark = <div className="w-2 h-0.5 bg-current" />;
    } else if (checked) {
        innerMark = (
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
        );
    }

    return (
        <label htmlFor={id} className="block group">
            {/* Hidden checkbox */}
            <input
                ref={inputRef}
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="peer sr-only"
            />

            <div className={cardClasses} {...props}>
                {/* Left Section */}
                <div className="flex gap-4">
                    {icon && <div className="shrink-0">{icon}</div>}

                    <div className="flex flex-col">
                        {title && (
                            <span
                                className={clsx(
                                    sizeStyles[size].label,
                                    checked && variantStyles[variant].labelChecked
                                )}
                            >
                                {title}
                            </span>
                        )}
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

                        {(helperText || buttonLabel) && (
                            <div className="flex items-center gap-1 mt-1">
                                {helperText && (
                                    <span className={clsx(
                                        sizeStyles[size].helpertext,
                                        checked && variantStyles[variant].helpertext
                                    )}>{helperText}</span>
                                )}
                                {buttonLabel && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        type
                                        className="text-violet-600"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onButtonClick?.();
                                        }}
                                    >
                                        {buttonLabel}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Section - Checkbox */}
                <div className={controlClasses}>{innerMark}</div>
            </div>
        </label>
    );
};

export default PaymentCheckBoxCard;
