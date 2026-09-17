import clsx from "clsx";

const Tooltip = ({
    label,
    description,
    arrow = "auto",
    variant = "primary",
    alwaysVisible = false,
    className,
    children,
}) => {
    const tooltipBase =
        "absolute z-50 rounded-lg shadow-lg text-sm px-3 py-2 max-w-xs w-max";
    const arrowBase = "absolute w-3 h-3 rotate-45";

    const colors = {
        primary: {
            bg: "bg-violet-500 dark:bg-violet-500",
            textBorder: "text-white",

        },
        secondary: {
            bg: "bg-white dark:bg-gray-900",
            textBorder: "text-gray-800",
        },
        tertiary: {
            bg: "bg-violet-50 dark:bg-violet-50",
            textBorder: "text-gray-800",
        },
    };

    const arrowPositions = {
        "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
        "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
        "bottom-left": "bottom-0 left-4 translate-y-1/2",
        "bottom-right": "bottom-0 right-4 translate-y-1/2",
        right: "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
        left: "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
        none: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    };

    const tooltipColor = colors[variant];
    const visibility = alwaysVisible
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 group-hover:opacity-100 pointer-events-none";

    return (
        <div
            className={clsx(
                "relative inline-block",
                !alwaysVisible && "group",
                className
            )}
        >
            {children}
            <div
                className={clsx(
                    tooltipBase,
                    tooltipColor.bg,
                    tooltipColor.textBorder,
                    visibility,
                    "transition-opacity duration-200",
                )}
            >
                <div className="text-xs font-semibold">{label}</div>
                {description && <div className="text-xs mt-1">{description}</div>}

                {arrow !== "none" && (
                    <div
                        className={clsx(
                            arrowBase,
                            tooltipColor.bg,
                            arrowPositions[arrow]
                        )}
                    />
                )}
            </div>
        </div>
    );
};

export default Tooltip;
