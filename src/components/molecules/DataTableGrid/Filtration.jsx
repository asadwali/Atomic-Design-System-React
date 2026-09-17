
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { ListFilter, RotateCcw, Search } from "lucide-react";
import { useState } from "react";
import Button from "../../atoms/Button/Button";
import DatePicker from "../../atoms/DatePicker/DatePicker";
import Input from "../../atoms/InputField/Input";
import DropdownSelect from "../Dropdown/SelectDropdown";

const FilterPanel = ({ onSearch, onReset }) => {
    const [filters, setFilters] = useState({
        name: "",
        email: "",
        status: "",
    });

    const handleReset = () => {
        setFilters({ name: "", email: "", status: "" });
        if (onReset) onReset();
    };

    const handleSearch = () => {
        if (onSearch) onSearch(filters);
    };

    const status = [
        { name: 'Active', statusColor: 'text-green-500' },
        { name: 'Vacation', statusColor: 'text-yellow-400' },
        { name: 'Left', statusColor: 'text-red-500' },
        { name: 'Other Leave', statusColor: 'text-red-500' },
    ];

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    className="ml-auto sm:ml-0"
                    leftIcon={<ListFilter size={20} />}
                >
                    Filters
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="p-0 flex flex-col w-xs sm:w-sm bg-white border-l-0"
            >
                {/* Header */}
                <SheetTitle className="text-lg bg-primary text-white px-6 py-4 font-semibold">Filter Records</SheetTitle>

                {/* Body */}
                <div className="flex-1 px-6 py-4 overflow-y-auto space-y-4">
                    <Input
                        label="Name"
                        type="text"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                        placeholder="Enter name"
                        variant="default"
                        size="default"
                    />

                    <Input
                        label="Email"
                        type="email"
                        value={filters.email}
                        onChange={(e) => setFilters({ ...filters, email: e.target.value })}
                        placeholder="Enter email"
                        variant="default"
                        size="default"
                    />

                    <DropdownSelect
                        label="Status"
                        items={status}
                        variant="statusIndicator"
                        placeholder="Select a status"
                        searchable={true}
                        showPlaceholderIcon={true}
                        placeholderIcon={<Search className="size-5 text-gray-400" />}
                        value={filters.status}
                        onChange={(selected) => {
                            setFilters({ ...filters, status: selected.name });
                        }}
                    />

                    <DatePicker label= "To" date={selectedDate} onDateChange={setSelectedDate} />
                </div>

                {/* Footer Buttons */}
                <div className="w-full px-6 py-4 border-t border-gray-200 bg-white flex gap-3">
                    <Button
                        size="sm"
                        className="w-1/2"
                        onClick={handleSearch}
                        leftIcon={<Search size={20} />}
                    >
                        Search
                    </Button>

                    <Button
                        size="sm"
                        variant="outline"
                        className="w-1/2"
                        onClick={handleReset}
                        leftIcon={<RotateCcw size={20} />}
                    >
                        Reset
                    </Button>
                </div>

            </SheetContent>
        </Sheet>
    );
};

export default FilterPanel;
