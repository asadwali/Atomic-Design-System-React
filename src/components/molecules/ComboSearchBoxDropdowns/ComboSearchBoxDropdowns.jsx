import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, User, Circle } from "lucide-react";
import Avatar from "../../atoms/Avatar/Avatar";

const ComboboxDropdown = ({
  label = "",
  placeholder = "Select an option",
  leftIcon = null,
  showSecondaryText = true,
  showRightAvatar = true,
  items = [],
  inputClassName = "",
  variant = "simple",
  hoverClass = "hover:bg-gray-100",
  focusClass = "focus:ring-2 focus:ring-violet-300",
  disabledClass = "opacity-50 cursor-not-allowed",
  disabled = false,
  showTag = false,
  defaultSelected = null,
  searchable = false,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultSelected);

  const ref = useRef();

  const filteredItems =
    query === ""
      ? items
      : items.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.tag?.toLowerCase().includes(query.toLowerCase())
        );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    if (disabled || item.disabled) return;
    setSelectedItem(item);
    setQuery("");
    setIsOpen(false);
  };

  const isSelected = (item) =>
    selectedItem &&
    item.name === selectedItem.name &&
    item.tag === selectedItem.tag;

  return (
    <div className="w-full relative" ref={ref}>
      {label && (
        <label className="block text-sm font-medium text-gray-900 mb-1">
          {label}
        </label>
      )}

      <div
        className={`
          w-full text-left bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm
          flex justify-between items-center
          ${disabled ? disabledClass : `${hoverClass} ${focusClass}`}
          ${inputClassName}
        `}
        onClick={() => !disabled && setIsOpen(true)}
      >
        <div className="flex items-center gap-2">
          {leftIcon && <div className="mr-1">{leftIcon}</div>}
          <input
            type="text"
            disabled={disabled}
            onFocus={() => !disabled && setIsOpen(true)}
            className="flex-1 border-none outline-none text-sm text-gray-900 placeholder-gray-400 bg-transparent"
            placeholder={placeholder}
            value={query || (selectedItem ? selectedItem.name : "")}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
          />
        </div>
        <ChevronDown size={18} className="text-gray-400" />
      </div>

      {isOpen && !disabled && (
        <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg z-10">
          {searchable && (
            <div className="flex items-center px-3 py-2 border-b border-gray-200">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>
          )}
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div
                key={idx}
                className={`
                  flex items-center justify-between px-3 py-2 cursor-pointer text-sm
                  ${hoverClass} ${item.disabled ? disabledClass : ""}
                `}
                onClick={() => handleSelect(item)}
              >
                <RenderItem item={item} variant={variant} showTag={showTag} />
                {isSelected(item) && (
                  <Check size={18} className="text-violet-600" />
                )}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const RenderItem = ({ item, variant, showTag }) => {
    return (
        <div className="flex items-center gap-2">
            {variant === 'avatar' && (
                <Avatar size="xs" imageUrl={item.url} alt={item.name} />
            )}
            {variant === 'userIcon' && (
                <User className="size-5 text-gray-400" />
            )}
            {variant === 'statusIndicator' && (
                <Circle className={`size-3 ${item.statusColor || 'text-green-500'} fill-current`} />
            )}
            <span className="text-gray-900 whitespace-nowrap">
                {item.name}
                {showTag && item.tag && (
                    <span className="text-gray-500 ml-1">{item.tag}</span>
                )}
            </span>
        </div>
    );
};

export default ComboboxDropdown;
