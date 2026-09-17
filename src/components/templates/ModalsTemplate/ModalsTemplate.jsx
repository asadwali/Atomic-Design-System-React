import { useState } from 'react';
import Modal from '../../molecules/Modals/Modals';

const ModalTemplate = () => {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleDelete = () => {
        console.log('Item deleted');
        setIsModalOpen(false);
    };
    return (

        <div className="p-10">
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => setIsModalOpen(true)}
            >
                Open Modal
            </button>

            {/* <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Blog post published"
                description="Are you sure you want to delete this post? This action cannot be undone."
                textAlign="center"
                variant="primary"
                iconPosition="center"
                primaryAction={{
                    label: 'Delete',
                    onClick: handleDelete
                }}
                secondaryAction={{
                    label: 'Cancel',
                    onClick: () => setIsModalOpen(false)
                }}
            /> */}

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                layout="default"
                variant="primary"
                title="Storage Limit Reached"
                description="You’ve used 95% of your allocated space. Upgrade to increase your limit."
                showCheckbox={true}
                checkboxLabel="Don’t remind me again"
                onCheckboxChange={(e) => console.log(e.target.checked)}
                primaryAction={{
                    label: 'Upgrade',
                    onClick: () => console.log('Upgraded')
                }}
                secondaryAction={{
                    label: 'Dismiss',
                    onClick: () => setIsModalOpen(false)
                }}
                textAlign="center"
                iconPosition="center"
            />


        </div>


    );
}

export default ModalTemplate;