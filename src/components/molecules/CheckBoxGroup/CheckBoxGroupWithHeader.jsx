import clsx from "clsx";
import { useEffect, useRef } from "react";
import Badge from "../../atoms/Badges/Badges";

const sizeStyles = { 
    sm: { 
        tick: 'size-2', 
        control: 'size-4', 
        title: "text-lg text-gray-700 font-medium", 
        helperLabel: "text-sm text-gray-600 font-normal", 
        label: 'text-3xl text-gray-700 font-medium', 
        description: 'text-sm text-gray-600 font-normal', 
        icon: 'size-4', 
    }, 
    md: { 
        tick: 'size-3', 
        control: 'size-5', 
        title: 'text-lg text-gray-700 font-medium', 
        helperLabel: "text-sm text-gray-600 font-normal", 
        label: 'text-3xl text-gray-700 font-medium', 
        description: 'text-sm text-gray-600 font-normal', 
        icon: 'size-5', 
    }, 
};

const variantStyles = {
    primary: {
        card: "border-gray-900 hover:border-violet-500 focus-within:border-violet-500",
        cardChecked: "border-violet-600",
        header: "bg-white border-b border-gray-900 hover:border-violet-500",
        headerChecked: "bg-violet-50 border-b border-violet-600",
        control: "border-gray-900 bg-white",
        controlChecked: "border-violet-600 bg-violet-50",
        tick: "text-violet-600",
        indeterminate: "bg-violet-600",
    },
    secondary: {
        card: "border-gray-500 hover:border-gray-600 focus-within:border-gray-600",
        cardChecked: "border-gray-700",
        header: "bg-white border-gray-500",
        headerChecked: "bg-gray-100 border-gray-700",
        control: "border-gray-500 bg-white",
        controlChecked: "border-gray-700 bg-gray-100",
        tick: "text-gray-700",
        indeterminate: "bg-gray-700",
    },
};

const CardCheckboxWithHeader = ({
    id,
    name, // ✅ added here
    title = "",
    label = "",
    description = "",
    helperLabel = "",
    icon,
    badge,
    badgeProps = {},
    checked = false,
    indeterminate = false,
    onChange,
    disabled = false,
    shape = "rounded-full",
    size = "md",
    variant = "primary",
    className,
    ...props
}) => {
    const checkboxRef = useRef(null);

    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    const styles = sizeStyles[size];
    const v = variantStyles[variant];

    return (
        <label
            htmlFor={id}
            className={clsx(
                "block w-full transition-colors group relative",
                disabled && "opacity-60 cursor-not-allowed",
                !disabled && "cursor-pointer",
                className
            )}
            {...props}
        >
            {/* Hidden checkbox */}
            <input
                ref={checkboxRef}
                type="checkbox"
                id={id}
                name={name} 
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="peer sr-only"
            />

            {/* Outer Card */}
            <div
                className={clsx(
                    "group flex flex-col border rounded-md transition-colors",
                    checked ? v.cardChecked : v.card
                )}
            >
                {/* Header */}
                <div
                    className={clsx(
                        "flex items-center justify-between gap-2 px-4 py-3 transition-colors border-b rounded-t-md",
                        checked ? v.headerChecked : v.header,
                        disabled && "border-gray-200",
                        "group-hover:border-violet-500"
                    )}
                >
                    <div className="flex items-center gap-2">
                        {icon && (
                            <div
                                className={clsx(
                                    styles.icon,
                                    "flex items-center justify-center text-violet-500"
                                )}
                            >
                                {icon}
                            </div>
                        )}
                        <span className={clsx(styles.title)}>{title}</span>
                    </div>

                    {/* Checkbox tick */}
                    <div
                        className={clsx(
                            styles.control,
                            shape,
                            "border flex items-center justify-center transition-all",
                            checked ? v.controlChecked : v.control,
                            disabled && "border-gray-200 bg-gray-50"
                        )}
                    >
                        {indeterminate ? (
                            <div className={clsx("w-2 h-0.5", v.indeterminate)} />
                        ) : checked ? (
                            <svg
                                className={clsx(styles.tick, v.tick)}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        ) : null}
                    </div>
                </div>

                {/* Body */}
                <div className="px-4 py-3 bg-white rounded-b-md">
                    <div className="flex sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex flex-col text-left">
                            <p className={clsx(styles.label)}>
                                {label}
                                {helperLabel && (
                                    <span className={clsx("ml-1", styles.helperLabel)}>
                                        {helperLabel}
                                    </span>
                                )}
                            </p>
                            {description && (
                                <p className={clsx(styles.description, "mt-1")}>
                                    {description}
                                </p>
                            )}
                        </div>

                        {badge &&
                            (typeof badge === "string" ? (
                                <Badge {...badgeProps}>{badge}</Badge>
                            ) : (
                                badge
                            ))}
                    </div>
                </div>
            </div>
        </label>
    );
};

export default CardCheckboxWithHeader;
