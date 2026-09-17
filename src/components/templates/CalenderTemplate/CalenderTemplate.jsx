import { CalendarDatePicker } from "../../atoms/DatePicker/RangeCalander";
import { useState } from "react";

const CalendarTemplate = () => {


    const [selectedDateRange, setSelectedDateRange] = useState({
        from: new Date(new Date().getFullYear(), 0, 1),
        to: new Date(),
    });

    return (

        <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

            <div className="col-span-12 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Rannge Calender</h2>
                <div className=" flex flex-wrap gap-3 relative">
                    <CalendarDatePicker
                        date={selectedDateRange}
                        onDateSelect={setSelectedDateRange}
                        variant="secondary"
                    />
                </div>
            </div>
        </div>
    )
}

export default CalendarTemplate;