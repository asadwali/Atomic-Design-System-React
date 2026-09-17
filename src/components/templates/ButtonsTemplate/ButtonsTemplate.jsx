import { ChevronLeft, ChevronRight, Mail, Plus, Dot } from 'lucide-react';
import Button from "../../atoms/Button/Button";
import ButtonGroup from "../../atoms/ButtonGroup/ButtonGroup";
import SocialButton from "../../molecules/SocialMediaButtons/SocialMediaButtons";
import { useState } from 'react';

const ButtonsTemplate = () => {

    const buttons = [
        { label: 'Profile', leftIcon: <Plus /> },
        { label: 'Settings', leftIcon: <Plus /> },
        { label: 'Messages', leftIcon: <Plus /> },
    ];
    const buttonsWithOutIcons = [
        { label: 'Profile' },
        { label: 'Settings' },
        { label: 'Messages' },
    ];

    const buttonsGroup = [
        { leftIcon: <ChevronLeft /> },
        { leftIcon: <Plus /> },
        { leftIcon: <ChevronRight /> },
    ];

    const [activeIndex, setActiveIndex] = useState(0)
    const handleButtonClick = (index) => {
        alert(`You clicked button at index: ${index}`)
        setActiveIndex(index) // update active state
    }

    return (

        <>
            <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-xl">Button Variant Types</h2>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" size="sm" onClick={() => alert("Button clicked!")}>Button CTA</Button>
                        <Button variant="secondary" size="md" disabled>Button CTA</Button>
                        <Button variant="outline" size="lg" disabled>Button CTA</Button>
                        <Button variant="ghost" size="lg" disabled>Button CTA</Button>

                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-xl">Button Variant Types</h2>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primaryRed" size="sm" disabled>Button CTA</Button>
                        <Button variant="secondaryRed" size="md" disabled>Button CTA</Button>
                        <Button variant="outlineRed" size="lg" disabled>Button CTA</Button>
                        <Button variant="ghostRed" size="lg" disabled>Button CTA</Button>


                        <Button variant="secondaryRed" size="lg" leftIcon={<Dot strokeWidth={8} color="red" />}>Error</Button>

                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-xl">Sizes</h2>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" size="sm">Button CTA</Button>
                        <Button variant="primary" size="md">Button CTA</Button>
                        <Button variant="primary" size="lg">Button CTA</Button>
                        <Button variant="primary" size="xl">Button CTA</Button>
                        <Button variant="primary" size="2xl">Button CTA</Button>
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-xl">Button With Left Icon</h2>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" size="sm" leftIcon={<Plus />}>Button CTA</Button>
                        <Button variant="primary" size="md" leftIcon={<Plus />}>Button CTA</Button>
                        <Button variant="primary" size="lg" leftIcon={<Plus />}>Button CTA</Button>
                        <Button variant="primary" size="xl" leftIcon={<Plus />}>Button CTA</Button>
                        <Button variant="primary" size="2xl" leftIcon={<Plus />}>Button CTA</Button>
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-xl">Button With Right Icon</h2>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" size="sm" rightIcon={<Plus />}>Button CTA</Button>
                        <Button variant="primary" size="md" rightIcon={<Plus />}>Button CTA</Button>
                        <Button variant="primary" size="lg" rightIcon={<Plus />}>Button CTA</Button>
                        <Button variant="primary" size="xl" rightIcon={<Plus />}>Button CTA</Button>
                        <Button variant="primary" size="2xl" rightIcon={<Plus />}>Button CTA</Button>
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-xl">Icon Button</h2>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" size="sm" rightIcon={<Plus />}></Button>
                        <Button variant="primary" size="md" rightIcon={<Plus />}></Button>
                        <Button variant="primary" size="lg" rightIcon={<Plus />}></Button>
                        <Button variant="primary" size="xl" rightIcon={<Plus />}></Button>
                        <Button variant="primary" size="2xl" rightIcon={<Plus />}></Button>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-12 gap-4 mt-8 mb-8">

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-xl">Group Button</h2>
                    <div className="flex flex-wrap gap-3">
                        <ButtonGroup buttons={buttonsWithOutIcons} size="md" variant="primary" />
                        <ButtonGroup buttons={buttons} size="md" variant="primary" />
                        <ButtonGroup buttons={buttonsGroup} activeIndex={activeIndex}
                            onClick={handleButtonClick} />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-xl">Social Button</h2>
                    <div className="flex flex-wrap gap-3">
                        <SocialButton icon={<Mail />} disabled={false} onClick={() => alert("Google Sign-in Clicked!")} label="Sign in with Google" variant="google" />
                        <SocialButton icon={<Mail />} variant="google" showLabel={false} />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <SocialButton icon={<Mail />} label="Sign in with Google" variant="facebook" />
                        <SocialButton icon={<Mail />} variant="facebook" showLabel={false} />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <SocialButton icon={<Mail />} label="Sign in with Google" variant="apple" />
                        <SocialButton icon={<Mail />} variant="apple" showLabel={false} />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <SocialButton icon={<Mail />} label="Sign in with Google" variant="twitter" />
                        <SocialButton icon={<Mail />} variant="twitter" showLabel={false} />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <SocialButton icon={<Mail />} label="Sign in with Google" variant="figma" />
                        <SocialButton icon={<Mail />} variant="figma" showLabel={false} />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <SocialButton icon={<Mail />} label="Sign in with Google" variant="dribble" />
                        <SocialButton icon={<Mail />} variant="dribble" showLabel={false} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ButtonsTemplate;