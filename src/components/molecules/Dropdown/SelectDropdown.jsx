import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, User, Circle, Search, X } from "lucide-react";
import Avatar from "../../atoms/Avatar/Avatar";

const variantClasses = {
  default:
    "border border-gray-200 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200",
  primary:
    "border border-gray-200 hover:border-violet-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200",
  secondary:
    "border border-gray-200 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
  destructive:
    "border border-gray-200 hover:border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200",
};


const DropdownSelect = ({
    label,
    items = [],
    variant = "primary",
    type = "",
    onChange,
    placeholder = "Select your user",
    placeholderIcon = <Search className="size-5" />,
    showPlaceholderIcon = false,
    defaultSelected = null,
    disabled = false,
    disabledClass = "opacity-50 cursor-not-allowed",
    className = "",
    showTag = false,
    searchable = false,
}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultSelected);
    const [search, setSearch] = useState("");
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (item) => {
        if (disabled || item.disabled) return;
        setSelected(item);
        onChange?.(item);
        setOpen(false);
        setSearch("");
    };

    const handleClear = (e) => {
        e.stopPropagation(); // prevent opening dropdown when clearing
        setSelected(null);
        onChange?.(null);
    };

    const isSelected = (item) =>
        selected && item.name === selected.name && item.tag === selected.tag;

    const filteredItems = items.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.tag?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div ref={dropdownRef} className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}

            <div className="relative">
                <button
                    onClick={() => !disabled && setOpen(!open)}
                    type="button"
                    className={`w-full text-left rounded-md px-4 py-2 text-sm flex justify-between items-center cursor-pointer bg-white 
            ${disabled ? disabledClass : variantClasses[variant]}`}
                >
                    <div className="flex items-center gap-2">
                        {selected ? (
                            <RenderItem item={selected} type={type} showTag={showTag} />
                        ) : (
                            <span className="flex items-center gap-2 text-gray-500">
                                {showPlaceholderIcon && placeholderIcon}
                                {placeholder}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-1 ml-2">
                        {selected && (
                            <X
                                onClick={handleClear}
                                className="size-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                            />
                        )}
                        <ChevronDown className="size-4 text-gray-500" />
                    </div>
                </button>

                {open && !disabled && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {searchable && (
                            <div className="flex items-center px-3 py-2 border-b border-gray-200">
                                <Search className="size-4 text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search users..."
                                    className="w-full outline-none text-sm text-gray-700"
                                />
                            </div>
                        )}

                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleSelect(item)}
                                    className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between 
                    ${item.disabled ? disabledClass : "hover:bg-gray-100"} 
                    ${isSelected(item) ? "bg-gray-50" : ""}`}
                                >
                                    <RenderItem item={item} type={type} showTag={showTag} />
                                    {isSelected(item) && (
                                        <Check className="size-4 text-violet-600 ml-2" />
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="px-4 py-2 text-sm text-gray-400">
                                No users found
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const RenderItem = ({ item, type, showTag }) => (
    <div className="flex items-center gap-2">
        {type === "avatar" && (
            <Avatar size="xs" imageUrl={item.url} alt={item.name} />
        )}
        {type === "userIcon" && <User className="size-5 text-gray-600" />}
        {type === "statusIndicator" && (
            <Circle
                className={`size-3 ${item.statusColor || "text-green-500"} fill-current`}
            />
        )}
        <span className="text-gray-900 whitespace-nowrap">
            {item.name}
            {showTag && item.tag && (
                <span className="text-gray-500 ml-1">{item.tag}</span>
            )}
        </span>
    </div>
);

export default DropdownSelect;
