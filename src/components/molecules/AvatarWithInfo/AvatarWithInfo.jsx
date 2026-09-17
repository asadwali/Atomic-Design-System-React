import clsx from 'clsx';
import Avatar from '../../atoms/Avatar/Avatar';

const textSizeMap = {
  sm: {
    name: 'text-sm text-gray-700 font-semibold dark:text-white',
    sub: 'text-xs text-gray-600 font-normal dark:text-gray-400',
  },
  md: {
    name: 'text-sm text-gray-700 font-semibold dark:text-white',
    sub: 'text-sm font-normal text-gray-600 dark:text-gray-400',
  },
  lg: {
    name: 'text-base text-gray-700 font-semibold dark:text-white',
    sub: 'text-base font-normal text-gray-600 dark:text-gray-400',
  },
  xl: {
    name: 'text-lg text-gray-700 font-semibold dark:text-white',
    sub: 'text-base font-normal text-gray-600 dark:text-gray-400',
  },
};

const AvatarWithInfo = ({
  size = 'md',
  userName = '',
  email = '',
  ...avatarProps 
}) => {
  const textClasses = textSizeMap[size] || textSizeMap['md'];

  return (
    <div className="flex items-center gap-4">
      <Avatar size={size} userName={userName} {...avatarProps} />
      <div className="flex flex-col dark:text-white">
        <div className={clsx(textClasses.name)}>{userName}</div>
        {email && <div className={clsx(textClasses.sub)}>{email}</div>}
      </div>
    </div>
  );
};

export default AvatarWithInfo;
