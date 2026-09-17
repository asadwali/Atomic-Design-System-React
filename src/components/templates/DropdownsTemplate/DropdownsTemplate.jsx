import { FileIcon, UploadIcon } from "lucide-react";
import AvatarWithInfo from "../../molecules/AvatarWithInfo/AvatarWithInfo";
import Dropdowns from "../../molecules/Dropdown/Dropdown";
import DropdownSelect from "../../molecules/Dropdown/SelectDropdown";
import { User, Search } from 'lucide-react';
import ComboboxDropdown from "../../molecules/ComboSearchBoxDropdowns/ComboSearchBoxDropdowns";

const DropdownsTemplate = () => {
    const items = [
        { label: 'New File', icon: <FileIcon className="size-4" />, checked: true, count: 2, shortcut: '⌘N' },
        { label: 'Upload', icon: <UploadIcon className="size-4" />, checked: true, count: 2, shortcut: '⌘N' },
        { label: 'Download', icon: <FileIcon className="size-4" />, checked: true, count: 2, shortcut: '⌘N' },
        { label: 'Share', icon: <FileIcon className="size-4" />, checked: true, count: 2, shortcut: '⌘N' },
        { label: 'Print', icon: <FileIcon className="size-4" />, checked: true, count: 2, shortcut: '⌘N' },
        { label: 'Delete', icon: <FileIcon className="size-4" />, checked: true, count: 2, shortcut: '⌘N' },
    ];

    const users = [
        { name: 'Asad Wali', tag: '@asad' },
        { name: 'Sarah Khan', tag: '@sarah' },
        { name: 'Ali Raza', tag: '@ali' },
    ];

    const avatars = [
        { name: 'Hassan Ali', url: "https://i.pravatar.cc/300" },
        { name: 'Iqra Aslam', url: "https://i.pravatar.cc/300" },
    ];

    const team = [
        { name: 'Asad Wali', statusColor: 'text-green-500' },
        { name: 'Sara Khan', statusColor: 'text-yellow-400' },
        { name: 'Ali Raza', statusColor: 'text-red-500' },
    ];

    const peopleList = [
        {
            name: "Leslie Alexander",
            username: "@lesliealexander",
        },
        {
            name: "Michael Foster",
            username: "@mfoster",

        }
    ];

    return (
        <div className="grid grid-cols-12 gap-4 mt-2 mb-20">

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Dropdown Without Icon</h2>
                <Dropdowns
                    items={items}
                    withDivider
                    onSelect={(item) => console.log('Selected:', item)}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Dropdown With Icon</h2>
                <Dropdowns
                    items={items}
                    withDivider
                    withIcons

                    onSelect={(item) => console.log('Selected:', item)}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Dropdown With Checkbox</h2>
                <Dropdowns
                    items={items}
                    withDivider
                    withCheckbox

                    onSelect={(item) => console.log('Selected:', item)}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Dropdown With Header</h2>
                <Dropdowns
                    withHeader="Account Menu"
                    items={items}
                    withDivider
                    withShortcuts
                    onSelect={(item) => console.log('Selected:', item)}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Dropdown With Header</h2>
                <Dropdowns
                    withHeader="Account Menu"
                    items={items}
                    withDivider
                    withIcons
                    withShortcuts
                    onSelect={(item) => console.log('Selected:', item)}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Dropdown With Header</h2>
                <Dropdowns
                    withHeader="Account Menu"
                    items={items}
                    withDivider
                    withCheckbox
                    withCount
                    onSelect={(item) => console.log('Selected:', item)}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Dropdown With Header</h2>
                <Dropdowns
                    withHeader={<AvatarWithInfo size="sm" type="notification" imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />}
                    items={items}
                    withDivider
                    withIcons
                    onSelect={(item) => console.log('Selected:', item)}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Select Simple Dropdown</h2>
                <DropdownSelect
                    items={users}
                    type="simple"
                    onChange={(val) => console.log('Selected:', val)}
                    placeholder="Select your user"
                    
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Select Dropdown With icon</h2>
                <DropdownSelect
                    items={users}
                    type="userIcon"
                    placeholder="Choose a member"
                    showPlaceholderIcon={true}
                    placeholderIcon={<User className="size-5 text-gray-400" />}
                    showTag={true}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Select Dropdown With Avatar</h2>
                <DropdownSelect
                    items={avatars}
                    type="avatar"
                    placeholder="Choose a member"
                    showPlaceholderIcon={true}
                    placeholderIcon={<User className="size-5 text-gray-400" />}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Select Dropdown With Status Indicator</h2>
                <DropdownSelect
                    items={team}
                    type="statusIndicator"
                    placeholder="Select a team member"
                    showPlaceholderIcon={false}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Select Search Dropdown With Status Indicator</h2>
                <DropdownSelect
                    label="Dropdowns"
                    items={team}
                    type="statusIndicator"
                    placeholder="Select a team member"
                    searchable={true}
                    showPlaceholderIcon={true}
                    placeholderIcon={<Search className="size-5 text-gray-400" />}
                />
            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">ComboBox Select Search Dropdown </h2>
                <ComboboxDropdown
                    label="Search"
                    placeholder="Type for Search"
                    leftIcon={<Search size={18} className="size-5 text-gray-400" />}
                    showSecondaryText={true}
                    items={users}
                    type="userIcon"
                    showTag={true}

                />
            </div>

        </div>

        
    );
};

export default DropdownsTemplate;
