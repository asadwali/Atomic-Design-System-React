import { useState } from "react";
import Input from "../../atoms/InputField/Input";

import { Info, Mail } from 'lucide-react';
import OTPInput from "../../atoms/OTPVerification/OTPVerification";
import Textarea from "../../atoms/TextArea/Textarea";
import InputWithDropDown from "../../molecules/InputWithDropDown/InputWithDropDown";
import DatePicker from "../../atoms/DatePicker/DatePicker";

const InputFieldsTemplate = () => {

    const [otp, setOtp] = useState("");

     const [selectedDate, setSelectedDate] = useState(new Date());
     
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Input Without Icons</h2>
                    <Input disabled type="email" placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input type="email" placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                    <Input label="Email" type="email" placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input label="Email" type="email" placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Input With Left Icons</h2>
                    <Input type="email" iconLeft={<Mail className="size-4" />} placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input type="email" iconLeft={<Mail className="size-4" />} placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                    <Input label="Email" iconLeft={<Mail className="size-4" />} type="email" placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input label="Email" iconLeft={<Mail className="size-4" />} type="email" placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Input With Right Icons</h2>
                    <Input type="email" iconRight={<Mail className="size-4" />} placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input type="email" iconRight={<Mail className="size-4" />} placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                    <Input label="Email" iconRight={<Mail className="size-4" />} type="email" placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input label="Email" iconRight={<Mail className="size-4" />} type="email" placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Input With Icons Both Sides</h2>
                    <Input type="email" iconRight={<Info className="size-4" />} iconLeft={<Mail className="size-4" />} placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input type="email" iconRight={<Info className="size-4" />} iconLeft={<Mail className="size-4" />} placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                    <Input label="Email" iconRight={<Info className="size-4" />} iconLeft={<Mail className="size-4" />} type="email" placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input label="Email" iconRight={<Info className="size-4" />} iconLeft={<Mail className="size-4" />} type="email" placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Input With Span Tag</h2>
                    <Input type="email" disabled fixedLeftText="https://" placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input type="email" fixedLeftText="https://" placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                    <Input label="Email" fixedLeftText="https://" type="email" placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input label="Email" fixedLeftText="https://" type="email" placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Input With Span Tag & Icon</h2>
                    <Input type="email" fixedLeftText="https://" iconRight={<Info className="size-4" />} placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input type="email" fixedLeftText="https://" iconRight={<Info className="size-4" />} placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                    <Input label="Email" fixedLeftText="https://" iconRight={<Info className="size-4" />} type="email" placeholder="olivia@gmail.com" variant="default" size="default" />
                    <Input label="Email" fixedLeftText="https://" iconRight={<Info className="size-4" />} type="email" placeholder="olivia@gmail.com" variant="default" size="default" helperText="This is a hint text to help user." />
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">DropDowns Input</h2>
                    <InputWithDropDown
                        disabled
                        name="dropdownOnly"
                        type="text"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />

                    <InputWithDropDown
                        name="dropdownOnly"
                        type="text"
                        helperText="This is a hint text to help user."
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}

                    />

                    <InputWithDropDown
                        label="Currency"
                        name="dropdownOnly"
                        type="text"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />

                    <InputWithDropDown
                        label="Currency"
                        name="dropdownOnly"
                        type="text"
                        helperText="This is a hint text to help user."
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">DropDowns Input With Icon</h2>
                    {/* Dropdown Without Label and With Icon */}
                    <InputWithDropDown
                        name="price"
                        type="number"
                        placeholder="0.00"
                        size="default"
                        variant="default"
                        // value={price}
                        // onChange={(e) => setPrice(e.target.value)}
                        leftIcon="$"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />

                    {/* Dropdown Without Label and With Icon & hint */}
                    <InputWithDropDown
                        name="price"
                        type="number"
                        placeholder="0.00"
                        size="default"
                        variant="default"
                        helperText="This is a hint text to help user."
                        leftIcon="$"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />

                    {/* Dropdown With Label and With Icon */}
                    <InputWithDropDown
                        label="Currency"
                        name="price"
                        type="number"
                        placeholder="0.00"
                        size="default"
                        variant="default"
                        leftIcon="$"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />

                    {/* Dropdown With Label and With Icon & Hint */}
                    <InputWithDropDown
                        label="Currency"
                        name="price"
                        type="number"
                        placeholder="0.00"
                        size="default"
                        variant="default"
                        helperText="This is a hint text to help user."
                        leftIcon="$"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">DropDowns Input With Right Icon</h2>
                    {/* Dropdown Without Label and With Icon */}
                    <InputWithDropDown
                        name="price"
                        type="number"
                        placeholder="0.00"
                        size="default"
                        variant="default"
                        rightIcon="$"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />

                    {/* Dropdown Without Label and With Icon & hint */}
                    <InputWithDropDown
                        name="price"
                        type="number"
                        placeholder="0.00"
                        size="default"
                        variant="default"
                        helperText="This is a hint text to help user."
                        rightIcon="$"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />

                    {/* Dropdown With Label and With Icon */}
                    <InputWithDropDown
                        label="Currency"
                        name="price"
                        type="number"
                        placeholder="0.00"
                        size="default"
                        variant="default"
                        rightIcon="$"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />

                    {/* Dropdown With Label and With Icon & Hint */}
                    <InputWithDropDown
                        label="Currency"
                        name="price"
                        type="number"
                        placeholder="0.00"
                        size="default"
                        variant="default"
                        helperText="This is a hint text to help user."
                        rightIcon="$"
                        dropdown={{
                            name: "currency",
                            options: ["USD", "CAD", "EUR"],
                            defaultValue: "USD",
                        }}
                    />
                </div>

            </div>

            <div className="grid grid-cols-12 gap-4 mt-8 mb-8">

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Textare Input </h2>

                    <Textarea
                        label="Message"
                        name="message"
                        placeholder="Type your message..."
                        variant="primary"
                    />

                    <Textarea
                        name="bio"
                        placeholder="Bio without label"
                        helperText="This is a hint text to help user."
                    />

                    <Textarea
                        label="Notes"
                        name="notes"
                        variant="danger"
                        error="This is an error message."
                    />

                    <Textarea
                        label="Disabled Input"
                        name="disabled"
                        value="You can't type here"
                        disabled
                    />

                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">OTP Verifications </h2>

                    <OTPInput
                        label="Enter 4-digit OTP"
                        value={otp}
                        onChange={setOtp}
                        length={4}
                        size="sm"
                        helperText="OTP sent to your phone number"
                    />
                    <OTPInput
                        label="Enter 4-digit OTP"
                        value={otp}
                        onChange={setOtp}
                        length={4}
                        size="md"
                        helperText="OTP sent to your phone number"
                    />
                    <OTPInput
                        label="Enter 4-digit OTP"
                        value={otp}
                        onChange={setOtp}
                        length={4}
                        size="lg"
                        helperText="OTP sent to your phone number"
                    />

                    <OTPInput
                        label="Enter 6-digit OTP"
                        value={otp}
                        onChange={setOtp}
                        length={6}
                        size="sm"
                        helperText="OTP sent to your phone number"
                    />
                    <OTPInput
                        label="Enter 6-digit OTP"
                        value={otp}
                        onChange={setOtp}
                        length={6}
                        size="md"
                        helperText="OTP sent to your phone number"
                    />
                    <OTPInput
                        label="Enter 6-digit OTP"
                        value={otp}
                        onChange={setOtp}
                        length={6}
                        size="lg"
                        helperText="OTP sent to your phone number"
                    />

                </div>

            </div>

             <DatePicker date={selectedDate} onDateChange={setSelectedDate} />
        </>
    )
}

export default InputFieldsTemplate;