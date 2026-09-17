import Toggle from "../../molecules/Toggle/Toggle";

const ToggleSwitchTemplate = () => {
    return (

        <div className="grid grid-cols-12 gap-4 mt-8 mb-8">

            <div className="col-span-6 flex flex-col space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Toggle/Switch</h2>
                <Toggle disabled />

                <Toggle size="sm"/>

                <Toggle size= "sm" label="Remember me" />


                <Toggle
                    label="Enable Notifications"
                    description="Save my login details for next time."
                />
            </div>
        </div>
    )
}

export default ToggleSwitchTemplate;