import { CheckCircle, Info, UserIcon } from 'lucide-react';
import Badge from "../../atoms/Badges/Badges";
import BadgeGroup from "../../molecules/BadgeGroup/BadgeGroup";

const BadgesTemplate = () => {
    return (

        <>
            <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

                <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Sizes</h2>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="primary" size="sm">Online</Badge>
                        <Badge variant="primary" size="md">Online</Badge>
                        <Badge variant="primary" size="lg">Online</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="success" size="sm">Online</Badge>
                        <Badge variant="success" size="md">Online</Badge>
                        <Badge variant="success" size="lg">Online</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="warning" size="sm">Online</Badge>
                        <Badge variant="warning" size="md">Online</Badge>
                        <Badge variant="warning" size="lg">Online</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="error" size="sm">Online</Badge>
                        <Badge variant="error" size="md">Online</Badge>
                        <Badge variant="error" size="lg">Online</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="gray" size="sm">Online</Badge>
                        <Badge variant="gray" size="md">Online</Badge>
                        <Badge variant="gray" size="lg">Online</Badge>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Badge variant="sky" size="sm">Online</Badge>
                        <Badge variant="sky" size="md">Online</Badge>
                        <Badge variant="sky" size="lg">Online</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="blueGray" size="sm">Online</Badge>
                        <Badge variant="blueGray" size="md">Online</Badge>
                        <Badge variant="blueGray" size="lg">Online</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="blue" size="sm">Online</Badge>
                        <Badge variant="blue" size="md">Online</Badge>
                        <Badge variant="blue" size="lg">Online</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="indigo" size="sm">Online</Badge>
                        <Badge variant="indigo" size="md">Online</Badge>
                        <Badge variant="indigo" size="lg">Online</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="rose" size="sm">Online</Badge>
                        <Badge variant="rose" size="md">Online</Badge>
                        <Badge variant="rose" size="lg">Online</Badge>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Badge variant="orange" size="sm">Online</Badge>
                        <Badge variant="orange" size="md">Online</Badge>
                        <Badge variant="orange" size="lg">Online</Badge>
                    </div>
                </div>

                <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Status Indicator</h2>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="primary" size="sm" dotLeft>Online</Badge>
                        <Badge variant="primary" size="md" dotLeft>Online</Badge>
                        <Badge variant="primary" size="lg" dotLeft>Online</Badge>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Badge variant="primary" size="sm" image="https://i.pravatar.cc/300">Online</Badge>
                        <Badge variant="primary" size="md" image="https://i.pravatar.cc/300">Online</Badge>
                        <Badge variant="primary" size="lg" image="https://i.pravatar.cc/300">Online</Badge>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Badge variant="primary" size="sm" closable >Online</Badge>
                        <Badge variant="primary" size="md" closable >Online</Badge>
                        <Badge variant="primary" size="lg" closable >Online</Badge>
                    </div>
                </div>

                <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Badge With Icons</h2>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="primary" size="sm" leftIcon={<CheckCircle size={14} />}>Primary</Badge>
                        <Badge variant="primary" size="md" leftIcon={<CheckCircle size={14} />}>Primary</Badge>
                        <Badge variant="primary" size="lg" leftIcon={<CheckCircle size={14} />}>Primary</Badge>

                        <Badge variant="primary" size="sm" rightIcon={<CheckCircle size={14} />}>Primary</Badge>
                        <Badge variant="primary" size="md" rightIcon={<CheckCircle size={14} />}>Primary</Badge>
                        <Badge variant="primary" size="lg" rightIcon={<CheckCircle size={14} />}>Primary</Badge>
                    </div>
                </div>

                <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Icon Only Badge</h2>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="primary" size="sm" rightIcon={<CheckCircle size={14} />}></Badge>
                        <Badge variant="primary" size="md" rightIcon={<CheckCircle size={14} />}></Badge>
                        <Badge variant="primary" size="lg" rightIcon={<CheckCircle size={14} />}></Badge>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-12 gap-4 mt-8 mb-8">

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Badge Group </h2>
                    <div className="flex flex-wrap gap-3">
                        <BadgeGroup label="We’ve just released a new feature" buttonIcon showButton="true" buttonLabel="New Feature" variant="primary" size="md" buttonPosition="left" />
                        <BadgeGroup label="We’ve just released a new feature" showButton="true" buttonLabel="New Feature" variant="primary" size="lg" buttonPosition="left" />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Badge Group</h2>
                    <div className="flex flex-wrap gap-3">
                        <BadgeGroup
                            label="We’ve just released a new feature"
                            icon={<Info className="size-4" />}
                            showButton="true"
                            buttonLabel="New Feature"
                            variant="primary"
                            size="md"
                            iconPosition="right"
                            buttonPosition="left"
                        />

                        <BadgeGroup
                            label="New Feature"
                            variant="primary"
                            size="md"
                            showButton={true}
                            buttonLabel="Add"
                            buttonIcon={<Info size={15} />}            
                            buttonIconPosition="right"      
                            buttonPosition="right"          
                        />

                        <BadgeGroup
                            label="We’ve just released a new feature"
                            icon={<Info className="size-4" />}
                            showButton="true"
                            buttonLabel="New Feature"
                            variant="primary"
                            size="lg"
                            iconPosition="right"
                            buttonPosition="left"
                        />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Badge Group</h2>
                    <div className="flex flex-wrap gap-3">
                        <BadgeGroup
                            label="We’ve just released a new feature"
                            showButton="true"
                            buttonLabel="New Feature"
                            variant="primary"
                            size="md"
                            buttonPosition="right"
                        />

                        <BadgeGroup
                            label="We’ve just released a new feature"
                            showButton="true"
                            buttonLabel="New Feature"
                            variant="primary"
                            size="lg"
                            buttonPosition="right"
                        />
                    </div>
                </div>


            </div>
        </>
    )
}

export default BadgesTemplate;