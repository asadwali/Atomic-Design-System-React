import { Info } from 'lucide-react';
import Toast from "../../molecules/ToastAlerts/ToastAlerts";
import { useState } from 'react';

const ToastAlertsTemplate = () => {

    const [showToast, setShowToast] = useState(true);
    return (

        <>
            <div className="grid grid-cols-12 gap-4 mt-2 mb-8">
                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-gray-200 dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Toast Alerts</h2>
                    <div className="flex flex-col space-y-4">
                        <Toast
                            type="success"
                            title="Success!"
                            description="Your action was successful."
                            icon={<Info className="size-5" />}
                            onClose={() => setShowToast(false)}
                        />


                        <Toast
                            type="warning"
                            title="Warning!"
                            description="Be cautious with this step."
                            icon={<Info className="size-5" />}
                        />

                        <Toast
                            type="error"
                            title="Error!"
                            description="Something went wrong."
                            icon={<Info className="size-5" />}
                        />

                        <Toast
                            type="primary"
                            title="Info"
                            description="This is an informative message."
                            icon={<Info className="size-5" />}
                        />

                        {showToast && (
                            <Toast
                                type="warning"
                                title="Warning!"
                                description="Be cautious with this step."
                                icon={<Info className="size-5" />}
                                onClose={() => setShowToast(false)} // 👈 hide on close
                            />
                        )}

                        {/* Button to re-open toast for demo */}
                        {!showToast && (
                            <button
                                onClick={() => setShowToast(true)}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                            >
                                Show Toast Again
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ToastAlertsTemplate;