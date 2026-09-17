import { parseDate } from "chrono-node";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

function formatDate(date) {
    if (!date) {
        return "";
    }

    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

const DatePicker = ({ date, onDateChange }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(date ? formatDate(date) : "In 2 days");
    const [month, setMonth] = useState(date);

    useEffect(() => {
        if (date) {
            setValue(formatDate(date));
            setMonth(date);
        }
    }, [date]);

    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Schedule Date
            </Label>
            <div className="relative">

                <Input
                    label="Select Date"
                    value={value}
                    placeholder="Tomorrow or next week"
                    className="bg-white pr-10"
                    onChange={(e) => {
                        setValue(e.target.value);
                        const parsedDate = parseDate(e.target.value);
                        if (parsedDate) {
                            console.log("Parsed Date:", parsedDate); // Debugging log
                            onDateChange(parsedDate);
                            setMonth(parsedDate);
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setOpen(true);
                        }
                    }}
                />
                <Popover
                    open={open}
                    onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            className="cursor-pointer absolute top-1.5 right-2 size-6"
                        >
                            <CalendarIcon className="size-4 " />
                            <span className="sr-only">Select date</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        align="end"
                        className="bg-white shadow-lg border border-gray-200 rounded-md p-0 w-full"
                    >
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            month={month}
                            fromYear={2000}
                            toYear={2030}
                            onMonthChange={setMonth}
                            onSelect={(selectedDate) => {
                                onDateChange(selectedDate);
                                setValue(formatDate(selectedDate));
                                setOpen(false);
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default DatePicker;