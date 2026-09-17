import { useState } from "react";
import { Info } from "lucide-react";
import CardCheckboxWithHeader from "./CheckBoxGroupWithHeader";


export default {
    title: "Molecules/CardCheckboxWithHeader",
    component: CardCheckboxWithHeader,
    argTypes: {
        id: { control: "text" },
        name: { control: "text" },
        title: { control: "text" },
        label: { control: "text" },
        helperLabel: { control: "text" },
        description: { control: "text" },
        icon: { control: false }, 
        badge: { control: "text" },
        checked: { control: "boolean" },
        indeterminate: { control: "boolean" },
        disabled: { control: "boolean" },
        size: {
            control: { type: "select" },
            options: ["sm", "md"],
        },
        variant: {
            control: { type: "select" },
            options: ["primary", "secondary"],
        },
    },
};

const Template = (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    return (
        <CardCheckboxWithHeader
            {...args}
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
        />
    );
};

// ✅ Default Example
export const Default = Template.bind({});
Default.args = {
    id: "pro-plan",
    name: "subscription-plan",
    title: "Pro Plan",
    label: "$20",
    helperLabel: "per month",
    description: "Includes up to 25 users, 100GB data and all pro features.",
    badge: "Limited offer",
    badgeProps: { variant: "gray", size: "md" },
    icon: <Info />,
    checked: false,
    indeterminate: false,
    disabled: false,
    size: "sm",
    variant: "primary",
};

// ✅ Disabled Example
export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    checked: true,
    disabled: true,
    badge: "Disabled",
};

// ✅ Grouped Example (radio-like behavior)
export const Grouped = () => {
    const [selected, setSelected] = useState("pro-plan");

    return (
        <div className="space-y-4">
            <CardCheckboxWithHeader
                id="basic-plan"
                name="subscription-plan"
                title="Basic Plan"
                label="$10"
                description="Good for individuals."
                checked={selected === "basic-plan"}
                onChange={() => setSelected("basic-plan")}
            />

            <CardCheckboxWithHeader
                id="pro-plan"
                name="subscription-plan"
                title="Pro Plan"
                label="$20"
                description="Includes up to 25 users, 100GB data and all pro features."
                checked={selected === "pro-plan"}
                onChange={() => setSelected("pro-plan")}
                badge="Most Popular"
                icon={<Info />}
            />

            <CardCheckboxWithHeader
                id="enterprise-plan"
                name="subscription-plan"
                title="Enterprise Plan"
                label="$50"
                description="Best for large teams."
                checked={selected === "enterprise-plan"}
                onChange={() => setSelected("enterprise-plan")}
            />
        </div>
    );
};
