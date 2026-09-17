import { useState, useEffect, useRef } from 'react';
import { Bell, ChevronDown, Sun, Moon, FileIcon, UploadIcon, LogOut, Download } from 'lucide-react';
import AvatarWithInfo from '../AvatarWithInfo/AvatarWithInfo';
import { toggleTheme } from '../../themeSwitch/themeSwitch';
import Dropdowns from '../Dropdown/Dropdown';
import Avatar from '../../atoms/Avatar/Avatar';

const Navbar = ({ className = "" }) => {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const dropdownWrapperRef = useRef(null);

  const handleToggleTheme = () => {
    toggleTheme();
    setTheme(document.body.classList.contains("dark") ? "dark" : "light");
  };

  const items = [
    { label: 'New File', icon: <FileIcon className="size-4" />, checked: true, count: 2, shortcut: '⌘N' },
    { label: 'Upload', icon: <UploadIcon className="size-4" />, checked: true, count: 2, shortcut: '⌘U' },
    { label: 'Download', icon: <Download className="size-4" />, checked: true, count: 2, shortcut: '⌘D' },
    { label: 'Logout', icon: <LogOut className="size-4" />, checked: true, count: 2, shortcut: '⌘Q' },
  ];

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownWrapperRef.current && !dropdownWrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keep theme in sync on mount
  useEffect(() => {
    setTheme(document.body.classList.contains("dark") ? "dark" : "light");
  }, []);

  return (
    <nav className={`${className} border-gray-200 dark:bg-gray-900 grid items-center p-4 w-full`}>
      <div className="flex items-center space-x-4 justify-self-end">
        <button
          onClick={handleToggleTheme}
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        >
          {theme === "dark" ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </button>

        <button className="relative text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
          <Bell className="size-5" />
          <span className="absolute top-0 right-0 block size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900"></span>
        </button>

        {/* Avatar + Dropdown */}
        <div ref={dropdownWrapperRef} className="relative">
          <div className="flex items-center space-x-2">
             <Avatar size="md" imageUrl="https://i.pravatar.cc/300" />
            {/* <AvatarWithInfo
              size="sm"
              type="notification"
              imageUrl="https://i.pravatar.cc/300"
              userName="Asad Wali"
              email="asadwali@gmail.com"
            /> */}
            <ChevronDown
              className="size-4 text-gray-600 dark:text-gray-300 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          {open && (
            <div className="absolute right-0 top-full">
              <Dropdowns
                 withHeader={<AvatarWithInfo size="sm" type="notification" imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />}
                items={items}
                withDivider
                withIcons
                withShortcuts
                onSelect={(item) => {
                  console.log("Selected:", item);
                  setOpen(false); // also close on item select
                }}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
