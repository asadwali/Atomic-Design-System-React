import CircularProgressBar from "../../atoms/ProgressBar/CircularProgressBar";
import ProgressBar from "../../atoms/ProgressBar/ProgressBar";
import SemiCircularProgressBar from "../../atoms/ProgressBar/SemiCircleProgressBar";

const ProgressIndicatorTemplate = () => {
    return (

        <>
            <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

                <div className="col-span-12 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Progress Bar</h2>

                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="text-xs text-white mb-1">No Percentage</p>
                            <ProgressBar progress={40} variant="primary" showPercentage="none" />
                        </div>

                        <div>
                            <p className="text-xs text-white mb-1">Below Right</p>
                            <ProgressBar progress={70} variant="primary" showPercentage="below-right" />
                        </div>

                        <div>
                            <p className="text-xs text-white mb-1">Inline Right</p>
                            <ProgressBar progress={70} variant="primary" showPercentage="inline-right" />
                        </div>

                        <div>
                            <p className="text-xs text-white mb-1">Tooltip Top</p>
                            <ProgressBar progress={40} variant="primary" showPercentage="tooltip-top" />
                        </div>

                        <div>
                            <p className="text-xs text-white mb-1">Tooltip Bottom</p>
                            <ProgressBar progress={60} variant="primary" showPercentage="tooltip-bottom" />
                        </div>
                    </div>
                </div>

                <div className="col-span-12 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Circular Progress</h2>
                    <div className="flex flex-wrap gap-3">
                        <CircularProgressBar size="xs" percentage={40} />
                        <CircularProgressBar size="sm" percentage={40} />
                        <CircularProgressBar size="md" percentage={40} />
                        <CircularProgressBar size="lg" percentage={40} />
                        <CircularProgressBar size="xl" percentage={40} />
                    </div>
                </div>

                <div className="col-span-12 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Circular Progress With Active User</h2>
                    <div className="flex flex-wrap gap-3">
                        <CircularProgressBar size="xs" percentage={40} label="users"/>
                        <CircularProgressBar size="sm" percentage={40} label="Active users" />
                        <CircularProgressBar size="md" percentage={40} label="Active users" />
                        <CircularProgressBar size="lg" percentage={40} label="Active users" />
                        <CircularProgressBar size="xl" percentage={40} label="Active users" />
                    </div>
                </div>

                <div className="col-span-12 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Semi-Circular Progress</h2>
                    <div className="flex flex-wrap gap-3">
                        <SemiCircularProgressBar size="xs" percentage={40} label="Active users" />
                        <SemiCircularProgressBar size="sm" percentage={75} label="Active users" />
                        <SemiCircularProgressBar size="md" percentage={95} label="Active users" />
                        <SemiCircularProgressBar size="lg" percentage={50} label="Active users" />
                        <SemiCircularProgressBar size="xl" percentage={90} label="Active users" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProgressIndicatorTemplate;