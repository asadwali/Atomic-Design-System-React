import { useState } from "react";
import CheckBox from "../../molecules/CheckBox/CheckBox";


const CheckBoxRadioTemplate = () => {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox</h2>
                <div className="flex flex-wrap gap-3">
                    <div className="space-y-4">
                        <div>
                            <CheckBox
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk2"
                                size="sm"
                            />
                        </div>


                        <div>
                            <CheckBox
                                id="chk4"
                                type="checkbox"
                                checked={false}
                                indeterminate={true}
                                onChange={() => { }}
                                size="sm"

                            />
                        </div>

                        <div>
                            <CheckBox
                                type="checkbox"
                                id="chk1"
                                disabled
                                size="sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <CheckBox
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk2"
                                size="md"
                            />
                        </div>


                        <div>
                            <CheckBox
                                id="chk4"
                                checked={false}
                                indeterminate={true}
                                onChange={() => { }}
                                size="md"

                            />
                        </div>

                        <div>
                            <CheckBox
                                type="checkbox"
                                id="chk1"
                                disabled
                                size="md"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox</h2>
                <div className="flex flex-wrap gap-3">
                    <div className="space-y-4">
                        <div>
                            <CheckBox
                                type="checkbox"
                                id="chk1"
                                label="Remember me"
                                disabled
                                size="sm"
                            />
                        </div>

                        <div>
                            <CheckBox
                                type="checkbox"
                                label="Remember me"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk2"
                                size="sm"
                            />
                        </div>

                        <div>
                            <CheckBox
                                id="chk4"
                                label="Remember me"
                                checked={false}
                                indeterminate={true}
                                onChange={() => { }}
                                size="sm"

                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <CheckBox
                                type="checkbox"
                                id="chk1"
                                label="Remember me"
                                disabled
                                size="md"
                            />
                        </div>

                        <div>
                            <CheckBox
                                type="checkbox"
                                label="Remember me"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk2"
                                size="md"
                            />
                        </div>

                        <div>
                            <CheckBox
                                id="chk4"
                                label="Remember me"
                                checked={false}
                                indeterminate={true}
                                onChange={() => { }}
                                size="md"

                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">CheckBox</h2>
                <div className="flex flex-wrap gap-3">
                    <div className="space-y-4">
                        <div>
                            <CheckBox
                                type="checkbox"
                                id="chk1"
                                label="Remember me"
                                description="Save my login details for next time."
                                disabled
                                size="sm"
                            />
                        </div>

                        <div>
                            <CheckBox
                                type="checkbox"
                                label="Remember me"
                                description="Save my login details for next time."
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk2"
                                size="sm"
                            />
                        </div>


                        <div>
                            <CheckBox
                                id="chk4"
                                label="Remember me"
                                description="Save my login details for next time."
                                checked={false}
                                indeterminate={true}
                                onChange={() => { }}
                                size="sm"

                            />
                        </div>
                    </div>


                    <div className="space-y-4">
                        <div>
                            <CheckBox
                                type="checkbox"
                                id="chk1"
                                label="Remember me"
                                description="Save my login details for next time."
                                disabled
                                size="md"
                            />
                        </div>

                        <div>
                            <CheckBox
                                type="checkbox"
                                label="Remember me"
                                description="Save my login details for next time."
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk2"
                                size="md"
                            />
                        </div>


                        <div>
                            <CheckBox
                                id="chk4"
                                label="Remember me"
                                description="Save my login details for next time."
                                checked={false}
                                indeterminate={true}
                                onChange={() => { }}
                                size="md"

                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Radio</h2>
                <div className="flex flex-wrap gap-3">
                    <div className="space-y-4">
                        <div>
                            <CheckBox
                                type="radio"
                                id="chk1"
                                disabled
                                size="sm"
                            />
                        </div>

                        <div>
                            <CheckBox
                                type="radio"
                                label="Remember me"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk2"
                                size="sm"
                            />
                        </div>

                        <div>
                            <CheckBox
                                type="radio"
                                label="Remember me"
                                description="Save my login details for next time."
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk3"
                                size="sm"
                            />
                        </div>
                    </div>


                    <div className="space-y-4">
                        <div>
                            <CheckBox
                                type="radio"
                                id="chk1"
                                disabled
                                size="md"
                            />
                        </div>

                        <div>
                            <CheckBox
                                type="radio"
                                label="Remember me"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk2"
                                size="md"
                            />
                        </div>

                        <div>
                            <CheckBox
                                type="radio"
                                label="Remember me"
                                description="Save my login details for next time."
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                id="chk3"
                                size="md"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckBoxRadioTemplate;