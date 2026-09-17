import clsx from 'clsx';
import { Plus } from 'lucide-react';

const sizeClasses = {
    sm: 'size-6 text-xs font-medium',
    md: 'size-10 text-sm font-medium',
    lg: 'size-14 text-base font-medium',
};

const borderSize = {
    sm: 'border-[1.5px]',
    md: 'border-2',
    lg: 'border-2',
};

const iconSize = {
    sm: 16,
    md: 16,
    lg: 16,
};

const getInitials = (name) =>
    name
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .toUpperCase();

const AvatarGroup = ({
    avatars = [],
    size = 'md',
    maxVisible = 5,
    showMoreButton = true,
    showAddButton = false,
    onAddClick = () => { },
}) => {
    const visibleAvatars = avatars.slice(0, maxVisible);
    const remaining = avatars.length - maxVisible;

    return (
        <div className="flex items-center gap-2">
            <div className="flex -space-x-2 rtl:space-x-reverse">
                {visibleAvatars.map((avatar, index) => {
                    const isUrl = avatar.startsWith("http") || avatar.includes(".");
                    const initials = !isUrl ? getInitials(avatar) : "";

                    return isUrl ? (
                        <img
                            key={index}
                            className={clsx(
                                sizeClasses[size],
                                borderSize[size],
                                'border-white rounded-full dark:border-gray-800 object-cover'
                            )}
                            src={avatar}
                            alt={`Avatar ${index + 1}`}
                        />
                    ) : (
                        <span
                            key={index}
                            className={clsx(
                                sizeClasses[size],
                                borderSize[size],
                                'flex items-center justify-center border-white rounded-full dark:border-gray-800 bg-blue-50 text-blue-600'
                            )}
                        >
                            {initials}
                        </span>
                    );
                })}


                {showMoreButton && remaining > 0 && (
                    <span

                        className={clsx(
                            'flex items-center justify-center font-medium text-blue-600 bg-blue-50 rounded-full border-white',
                            sizeClasses[size],
                            borderSize[size]
                        )}
                    >
                        +{remaining}
                    </span>
                )}
            </div>

            {showAddButton && (
                <button
                    onClick={onAddClick}
                    className={clsx(
                        'ml-2 flex items-center justify-center text-gray-700 bg-white hover:bg-gray-50',
                        sizeClasses[size],
                        'border border-dashed border-gray-300 rounded-full'
                    )}
                >
                    <Plus size={iconSize[size]} />
                </button>
            )}


        </div>
    );
};

export default AvatarGroup;
