import Stepper from "../../molecules/Stepper/Stepper";

const StepperTemplate = () => {


    const steps = [
        {
            id: 1,
            label: 'Job details',
            description: 'Add title, location, and salary info',
            href: '#',
            status: 'done',
        },
        {
            id: 2,
            label: 'Application form',
            description: 'Create custom application questions',
            href: '#',
            status: 'active',
        },
        {
            id: 3,
            label: 'Preview',
            description: 'Make sure everything looks good',
            href: '#',
            status: 'inactive',
        },
        {
            id: 4,
            label: 'Publish',
            description: 'Post job live on website',
            href: '#',
            status: 'inactive',
        },
    ]

    return (
        <Stepper steps={steps} />
    )
}

export default StepperTemplate;