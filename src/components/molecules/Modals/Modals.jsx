import clsx from 'clsx';
import Button from '../../atoms/Button/Button';
import DatePicker from '../../atoms/DatePicker/DatePicker';
import { useState } from "react";
import { CalendarDatePicker } from '../../atoms/DatePicker/RangeCalander';

const VARIANT_CLASSES = {
    primary: 'bg-blue-100 text-blue-600',
    warning: 'bg-yellow-100 text-yellow-600',
    danger: 'bg-red-100 text-red-600',
};

const Modal = ({
    isOpen,
    onClose,
    title,
    description,
    textAlign = 'center',
    variant = 'primary',
    iconPosition = 'center',
    layout = 'default', // New prop: 'default' or 'inline'
    showCheckbox = false,
    checkboxLabel = 'Don’t show again',
    onCheckboxChange = () => { },
    primaryAction = { label: 'OK', onClick: () => { } },
    secondaryAction = { label: 'Cancel', onClick: () => { } },
}) => {

    if (!isOpen) return null;

    const [selectedDate, setSelectedDate] = useState(new Date());


    const [selectedDateRange, setSelectedDateRange] = useState({
        from: new Date(new Date().getFullYear(), 0, 1),
        to: new Date(),
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg mx-4 p-6">
                {layout === 'inline' ? (
                    // ==== Inline Layout ====
                    <div className="flex flex-col gap-4">
                        {/* Icon + Content (title + description + checkbox) */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                            {/* Icon */}
                            <div
                                className={clsx(
                                    'flex h-12 w-12 items-center justify-center rounded-full shrink-0',
                                    VARIANT_CLASSES[variant]
                                )}
                            >
                                <span className="text-xl font-bold">!</span>
                            </div>

                            {/* Title + Description + Checkbox */}
                            <div className="flex flex-col items-center sm:items-start">
                                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                                <p className="mt-1 text-base font-normal text-gray-600">{description}</p>


                                {/* Checkbox + Buttons Row */}

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full mt-5">
                                    {/* Checkbox (left) */}
                                    {showCheckbox && (
                                        <label className="flex items-center text-sm text-gray-700 w-full sm:w-auto">
                                            <input
                                                type="checkbox"
                                                onChange={onCheckboxChange}
                                                className="mr-2 size-4 text-blue-600 border-gray-300 rounded"
                                            />
                                            {checkboxLabel}
                                        </label>
                                    )}

                                    {/* Buttons (right) */}
                                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                        {secondaryAction?.label && (
                                            <Button
                                                variant="outline"
                                                size="base"
                                                className="w-full sm:w-auto"
                                                onClick={secondaryAction.onClick || onClose}
                                            >
                                                {secondaryAction.label}
                                            </Button>
                                        )}
                                        {primaryAction?.label && (
                                            <Button
                                                variant={variant}
                                                size="base"
                                                className="w-full sm:w-auto"
                                                onClick={primaryAction.onClick}
                                            >
                                                {primaryAction.label}
                                            </Button>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>

                ) : (
                    // ==== Default Layout ====
                    <>
                        {/* Icon */}
                        <div
                            className={clsx(
                                'flex h-12 w-12 items-center justify-center rounded-full',
                                VARIANT_CLASSES[variant],
                                {
                                    'mx-auto': iconPosition === 'center',
                                    'mr-2 mb-2': iconPosition === 'left',
                                }
                            )}
                        >
                            <span className="text-xl font-bold">!</span>
                        </div>

                        {/* Title & Description */}
                        <div
                            className={clsx('mt-4', {
                                'text-center': textAlign === 'center',
                                'text-left': textAlign === 'left',
                            })}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                            <p className="mt-2 text-base font-normal text-gray-600">{description}</p>
                            {/* <DatePicker date={selectedDate} onDateChange={setSelectedDate} /> */}

                            {/* <CalendarDatePicker
                                date={selectedDateRange}
                                onDateSelect={setSelectedDateRange}
                            /> */}
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 w-full">
                            {secondaryAction?.label && (
                                <Button
                                    variant="outline"
                                    size="base"
                                    className="w-full sm:flex-1"
                                    onClick={secondaryAction.onClick || onClose}
                                >
                                    {secondaryAction.label}
                                </Button>
                            )}
                            {primaryAction?.label && (
                                <Button
                                    variant={variant}
                                    size="base"
                                    className="w-full sm:flex-1"
                                    onClick={primaryAction.onClick}
                                >
                                    {primaryAction.label}
                                </Button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );

};

export default Modal;
