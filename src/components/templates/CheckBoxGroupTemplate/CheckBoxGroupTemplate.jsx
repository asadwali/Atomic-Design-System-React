import { useState } from "react";
import CheckBoxGroup from "../../molecules/CheckBoxGroup/CheckBoxGroup";
import CardCheckboxWithHeader from "../../molecules/CheckBoxGroup/CheckBoxGroupWithHeader";
import { User, CreditCard, Info } from "lucide-react";
import PaymentCheckBoxCard from "../../molecules/CheckBoxGroup/CheckBoxPaymentGroup";
import Badge from "../../atoms/Badges/Badges";


const CheckBoxGroupTemplate = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(false);
    return (
        <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group With Icon and checkbox on right</h2>
                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    iconholder={<User />}
                    checkboxPosition="right"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="sm"
                />

                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    iconholder={<User />}
                    checkboxPosition="right"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="md"
                />
            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group With Icon and checkbox on left</h2>
                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    iconholder={<User />}
                    checkboxPosition="left"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="sm"
                />

                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    iconholder={<User />}
                    checkboxPosition="left"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="md"
                />
            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group With Icon and square checkbox on Right</h2>
                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    iconholder={<User />}
                    checkboxPosition="right"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="sm"
                    squareCheckbox={true}
                />

                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    iconholder={<User />}
                    checkboxPosition="right"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="md"
                    squareCheckbox={true}
                />
            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group With Icon and square checkbox on left</h2>
                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    iconholder={<User />}
                    checkboxPosition="left"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="sm"
                    squareCheckbox={true}
                />

                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    iconholder={<User />}
                    checkboxPosition="left"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="md"
                    squareCheckbox={true}
                />
            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group With Image</h2>
                <CheckBoxGroup
                    id="premium"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    image="https://i.pravatar.cc/300"
                    // image={<img src="https://i.pravatar.cc/300" alt="icon" className="size-8 rounded-full" />}
                    checkboxPosition="right"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="sm"
                />

                <CheckBoxGroup
                    id="premium"
                    type="checkbox"
                    label="Basic plan"
                    helperLabel="$10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    image="https://i.pravatar.cc/300"
                    // image={<img src="https://i.pravatar.cc/300" alt="icon" className="size-8 rounded-full" />}
                    checkboxPosition="right"
                    mediaPosition="left"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    size="md"
                />
            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group with radio check</h2>
                <CheckBoxGroup
                    id="basic"
                    type="radio"
                    name="plan" // group radios together
                    label="Basic plan $10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    checkboxPosition="left"
                    checked={selectedPlan}
                    size="sm"
                    onChange={(e) => setSelectedPlan(e.target.checked)}
                />
                <CheckBoxGroup
                    id="basic"
                    type="radio"
                    name="plan" // group radios together
                    label="Basic plan $10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    checkboxPosition="left"
                    checked={selectedPlan}
                    size="md"
                    onChange={(e) => setSelectedPlan(e.target.checked)}
                />

            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group disabled states</h2>
                <CheckBoxGroup
                    id="premium"
                    label="Basic plan $10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    checkboxPosition="left"
                    disabled={true}
                    size="sm"
                />
                <CheckBoxGroup
                    id="premium"
                    label="Basic plan $10/month"
                    description="Includes up to 10 users, 20GB indiviual data and access to all features."
                    checkboxPosition="left"
                    disabled={true}
                    size="md"
                />

            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group</h2>
                <CardCheckboxWithHeader
                    id="pro-plan"
                    title="Pro Plan"
                    label="$20"
                    helperLabel="per month"
                    description="Includes up to 25 users, 100GB data and all pro features."
                    badge="Limited offer"
                    icon={<Info />}
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    shape="rounded-full"
                    size="sm"
                    badgeProps={{ variant: "gray", size: "md" }}
                />


            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group</h2>
                <CardCheckboxWithHeader
                    id="pro-plan"
                    title="Pro Plan"
                    label="$20"
                    helperLabel="per month"
                    icon={<Info />}
                    description="Includes up to 25 users, 100GB data and all pro features."
                    badge={<Badge variant="primary" size="md">Hot Deal</Badge>}
                    // icon={<Info />}
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    shape="rounded-full"
                    size="md"
                    disabled={true}
                />


            </div>


            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox Group</h2>
                <PaymentCheckBoxCard
                    id="card1"
                    name="payment"
                    size="md"
                    checked={false}
                    onChange={() => console.log("checked")}
                    // icon={<img src="/assets/visa.png" alt="visa" className="w-10 h-auto" />}
                    icon={<CreditCard className="text-violet-500" />}
                    title="Visa ending in 1234"
                    description="Expiry 06/2025"
                    helperText="Set as default"
                    buttonLabel="Edit"
                    onButtonClick={() => alert("Edit clicked!")}
                />


            </div>

        </div>
    )
}

export default CheckBoxGroupTemplate