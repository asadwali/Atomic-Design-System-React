import clsx from "clsx";
import { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

const Dropdowns = ({
  items = [],
  withDivider = false,
  withIcons = false,
  withCheckbox = false,
  withHeader = "",
  withShortcuts = false,
  withCount = false,
  onSelect = () => {},
  className,
  ...props
}) => {
  const [checkedState, setCheckedState] = useState(
    items.map((item) => item.checked || false)
  );

  const handleCheckboxToggle = (idx) => {
    const newState = [...checkedState];
    newState[idx] = !newState[idx];
    setCheckedState(newState);
    onSelect({ ...items[idx], checked: newState[idx] });
  };

  return (
    <div
      className={clsx("relative inline-block text-left", className)}
      {...props}
    >
      {/* Dropdown box */}
      <div className="relative z-10 mt-2 w-56 origin-top-right border border-gray-100 rounded-md bg-white shadow-lg ring-1 ring-gray-100 focus:outline-none">
        {/* Optional header */}
        {withHeader && (
          <div className="px-4 py-2 border-b border-gray-100">
            {typeof withHeader === "string" ? (
              <span className="text-sm font-semibold text-gray-700">
                {withHeader}
              </span>
            ) : (
              withHeader
            )}
          </div>
        )}

        <div className="py-1">
          {items.map((item, idx) => {
            const showDivider =
              withDivider && ((idx + 1) % 3 === 0 || idx === items.length - 2);

            return (
              <div key={idx}>
                <div
                  className={clsx(
                    "w-full flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer",
                    { "font-semibold": checkedState[idx] }
                  )}
                  onClick={() => {
                    if (!withCheckbox) {
                      onSelect(item);
                    }
                  }}
                >
                  {/* Left */}
                  <div className="flex items-center gap-2">
                    {withCheckbox && (
                      <CheckBox
                        type="checkbox"
                        size="sm"
                        checked={checkedState[idx]}
                        onChange={(e) => {
                          e.stopPropagation(); // prevent parent click
                          handleCheckboxToggle(idx);
                        }}
                      />
                    )}

                    {withIcons && item.icon && (
                      <span className="size-4">{item.icon}</span>
                    )}

                    <span>{item.label}</span>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-2">
                    {withCount && item.count !== undefined && (
                      <span className="text-xs text-gray-500">
                        {item.count}
                      </span>
                    )}
                    {withShortcuts && item.shortcut && (
                      <span className="text-xs text-gray-400">
                        {item.shortcut}
                      </span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                {showDivider && <hr className="my-1 border-gray-200" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
