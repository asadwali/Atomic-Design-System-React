import Tooltip from "../../molecules/Tooltips/Tooltips";
import { Info } from "lucide-react";

const TooltipTemplate = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mt-8 mb-8">
                <div className="col-span-6 flex flex-col space-y-6 max-w-full p-6 rounded-xl shadow-md bg-transparent dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Tooltips</h2>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">None</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is tooltip"
                                variant="primary"
                                arrow="none"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Bottom Center</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is tooltip"
                                variant="primary"
                                arrow="bottom-center"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Bottom Left</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is tooltip"
                                variant="primary"
                                arrow="bottom-left"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Bottom Right</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is tooltip"
                                variant="primary"
                                arrow="bottom-right"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Left Arrow</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is tooltip"
                                variant="primary"
                                arrow="left"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Right</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is tooltip"
                                variant="primary"
                                arrow="right"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>


                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Top Center</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is tooltip"
                                variant="primary"
                                arrow="top-center"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                </div>

                <div className="col-span-6 flex flex-col space-y-10 max-w-full p-6 rounded-xl shadow-md bg-transparent dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Tooltips</h2>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">None</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is a tooltip"
                                description="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
                                variant="primary"
                                arrow="none"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Bottom Center</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is a tooltip"
                                description="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
                                variant="primary"
                                arrow="bottom-center"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Bottom Left</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is a tooltip"
                                description="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
                                variant="primary"
                                arrow="bottom-left"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Bottom Right</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is a tooltip"
                                description="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
                                variant="primary"
                                arrow="bottom-right"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">left</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is a tooltip"
                                description="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
                                variant="primary"
                                arrow="left"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Right</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is a tooltip"
                                description="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
                                variant="primary"
                                arrow="right"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 dark:text-gray-200">Top Center</span>
                        <div className="relative w-max">
                            <Tooltip
                                label="This is a tooltip"
                                description="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
                                variant="primary"
                                arrow="top-center"
                                alwaysVisible={false}
                            >
                                <Info className="size-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TooltipTemplate;