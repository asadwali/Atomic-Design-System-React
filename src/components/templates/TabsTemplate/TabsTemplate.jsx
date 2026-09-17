import { useState } from "react";
import Badge from "../../atoms/Badges/Badges";
import Tabs from "../../molecules/Tabs/Tabs";

const TabsTemplate = () => {
    const [tabs, setTabs] = useState([
        { name: "My Details", current: true, badge: 2, badgeProps: { variant: "gray", size: "sm" } },
        { name: "Profile", current: false },
        { name: "Password", current: false },
        { name: "Team", current: false, badge: 5 },
        { name: "Plan", current: false },
        { name: "Billing", current: false },
    ]);

    const handleTabChange = (name) => {
        setTabs((prevTabs) =>
            prevTabs.map((tab) => ({
                ...tab,
                current: tab.name === name,
            }))
        );
    };

    // Get the active tab
    const activeTab = tabs.find((tab) => tab.current);

    // Content for each tab
    const renderContent = () => {
        switch (activeTab?.name) {
            case "My Details":
                return <p>Here are your personal details...</p>;
            case "Profile":
                return <p>Profile settings go here...</p>;
            case "Password":
                return <p>Change your password here...</p>;
            case "Team":
                return <p>Manage your team here...</p>;
            case "Plan":
                return <p>Plan details and upgrades here...</p>;
            case "Billing":
                return <p>Billing info and invoices here...</p>;
            default:
                return <p>Select a tab to see content.</p>;
        }
    };

    return (
        <div className="grid grid-cols-12 gap-4 mt-8 mb-8">
            <div className="col-span-12 flex flex-col space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Tabs</h2>

                {/* Outline Tabs */}
                <Tabs
                    tabs={tabs}
                    onChange={handleTabChange}
                    variant="outline"
                    size="md"
                />

                {/* Filled Tabs */}
                <Tabs
                    tabs={tabs}
                    onChange={handleTabChange}
                    variant="filled"
                    size="md"
                />

                <Tabs
                    tabs={tabs}
                    onChange={handleTabChange}
                    variant="outline"
                    size="md"
                    color="primary"
                    badgeComponent={Badge}
                />

                {/* Tab Content */}
                <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default TabsTemplate;
