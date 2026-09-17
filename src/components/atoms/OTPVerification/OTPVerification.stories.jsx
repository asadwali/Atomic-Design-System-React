import { useState } from "react";
import OTPInput from "./OTPVerification";

export default {
  title: "Components/OTPInput",
  component: OTPInput,
  argTypes: {
    length: {
      control: { type: "radio" },
      options: [4, 6],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    error: { control: "text" },
    label: { control: "text" },
    helperText: { control: "text" },
  },
};

const Template = (args) => {
  const [otp, setOtp] = useState("");

  return (
    <div className="p-4">
      <OTPInput {...args} value={otp} onChange={setOtp} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  length: 4,
  size: "md",
  label: "Enter OTP",
  helperText: "You will receive an OTP via SMS",
  disabled: false,
  error: "",
};
