import clsx from "clsx";
import Badge from "../../atoms/Badges/Badges";

const Tabs = ({
    tabs,
    onChange,
    variant = "outline", // outline | filled
    size = "md", // sm | md
    color = "primary", // primary | secondary
    className,
    badgeComponent: BadgeComponent = Badge, // allow custom badge
    ...props
}) => {
    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-sm",
    };

    const colorVariants = {
        primary: {
            outline: {
                active: "border border-violet-500 text-violet-600",
                inactive:
                    "border border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
            },
            filled: {
                active: "bg-violet-100 text-violet-700",
                inactive: "text-gray-500 hover:text-gray-700 hover:bg-gray-200",
            },
        },
        secondary: {
            outline: {
                active: "border border-gray-500 text-gray-700",
                inactive:
                    "border border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300",
            },
            filled: {
                active: "bg-gray-200 text-gray-800",
                inactive: "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
            },
        },
    };

    const getTabClass = (tab) => {
        const baseClasses =
            "font-medium rounded-md transition-colors min-w-32 flex justify-between items-center gap-2";

        const style =
            colorVariants[color]?.[variant] || colorVariants.primary[variant];

        return clsx(
            baseClasses,
            sizes[size],
            tab.current ? style.active : style.inactive
        );
    };

    return (
        <div className={clsx("w-full", className)} {...props}>
            {/* Mobile dropdown */}
            <div className="sm:hidden">
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    value={tabs.find((tab) => tab.current)?.name}
                    onChange={(e) => onChange?.(e.target.value)}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name} value={tab.name}>
                            {tab.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Desktop tabs */}
            <div className="hidden sm:block">
                <nav
                    className="flex space-x-4 overflow-x-auto scrollbar-hide"
                    aria-label="Tabs"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => onChange?.(tab.name)}
                            className={getTabClass(tab)}
                            aria-current={tab.current ? "page" : undefined}
                        >
                            <span className="text-left text-nowrap">{tab.name}</span>
                            {tab.badge && (
                                <BadgeComponent {...(tab.badgeProps || {})}>
                                    {tab.badge}
                                </BadgeComponent>
                            )}

                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Tabs;
