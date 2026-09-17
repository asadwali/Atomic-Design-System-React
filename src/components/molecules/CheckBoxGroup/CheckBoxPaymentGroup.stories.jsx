import { CreditCard } from "lucide-react";
import { useState } from "react";
import PaymentCheckBoxCard from "./CheckBoxPaymentGroup";


export default {
  title: "Molecules/PaymentCheckBoxCard",
  component: PaymentCheckBoxCard,
  argTypes: {
    id: { control: "text" },
    name: { control: "text" },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: { type: "radio" },
      options: ["sm", "md"],
    },
    variant: {
      control: { type: "radio" },
      options: ["primary"],
    },
    squareCheckbox: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
    helperText: { control: "text" },
    buttonLabel: { control: "text" },
    onButtonClick: { action: "button clicked" },
    onChange: { action: "checkbox toggled" },
  },
};

// ✅ Default Story
export const Default = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <PaymentCheckBoxCard
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

Default.args = {
  id: "card1",
  name: "payment",
  title: "Visa ending in 1234",
  description: "Expiry 06/2025",
  helperText: "Set as default",
  buttonLabel: "Edit",
  icon: <CreditCard className="text-violet-500" />,
};

// ✅ Checked State
export const Checked = Default.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

// ✅ Disabled
export const Disabled = Default.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

// ✅ With Custom Icon
export const WithCustomIcon = Default.bind({});
WithCustomIcon.args = {
  ...Default.args,
  icon: <img src="/assets/visa.png" alt="visa" className="w-10 h-auto" />,
};

// ✅ Without Button
export const WithoutButton = Default.bind({});
WithoutButton.args = {
  ...Default.args,
  buttonLabel: "",
};
