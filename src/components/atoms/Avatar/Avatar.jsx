import clsx from 'clsx';

const sizeMap = {
  xs: 'size-6',
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
  xl: 'size-14',
  '2xl': 'size-16',
};

const dotPositionMap = {
  xs: 'bottom-0 right-0 size-2',
  sm: 'bottom-0 right-0 size-2.5',
  md: 'bottom-0 right-0 size-3',
  lg: 'bottom-0 right-0 size-3.5',
  xl: 'bottom-0 right-0 size-4',
  '2xl': 'bottom-0 right-0 size-4.5',
};

const companyIconMap = {
  xs: 'bottom-0 right-0 size-2',
  sm: 'bottom-0 right-0 size-2.5',
  md: 'bottom-0 right-0 size-3',
  lg: 'bottom-0 right-0 size-3.5',
  xl: 'bottom-0 right-0 size-4',
  '2xl': 'bottom-0 right-0 size-4.5',
};

const stateRing = {
  default: '',
  hover: 'hover:ring-2 hover:ring-blue-400',
  focused: 'focus:ring-2 focus:ring-blue-500 focus:outline-none',
};

const getInitials = (name) => {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();
};

const Avatar = ({
  size = '',
  imageUrl = '',
  state = 'default',
  type = 'image', // 'image' | 'initials' | 'icon'
  userName = '',
  placeholderIcon = null,
  companyIcon = null,
  companyImageUrl = '',
  alt = 'Avatar',
  showNotification = false,
  notificationColor = 'bg-green-500',

  showCompanyIcon = false,
}) => {
  const sizeClass = sizeMap[size] || 'size-4';
  const dotClass = dotPositionMap[size];
  const companyClass = companyIconMap[size] || companyIconMap['md'];
  const initials = userName ? getInitials(userName) : '';

  return (
    <div className={clsx('relative inline-block', sizeClass)}>
      {/* Avatar Content */}
      <div
        tabIndex={0}
        className={clsx(
          'rounded-full overflow-hidden w-full h-full transition-all duration-200',
          stateRing[state]
        )}
      >
        {imageUrl ? (
          <img src={imageUrl} alt={alt} className="object-cover w-full h-full" />
        ) : type === 'initials' && initials ? (
          <div className="flex items-center justify-center w-full h-full bg-blue-50 text-blue-600 font-semibold text-sm uppercase">
            {initials}
          </div>
        ) : type === 'icon' && placeholderIcon ? (
          <div className="flex items-center justify-center w-full h-full bg-blue-50 text-blue-600 text-2xl">
            {placeholderIcon}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400 text-xl">
            ?
          </div>
        )}
      </div>

      {/* Notification Dot */}
      {showNotification && (
        <span
          className={clsx(
            'absolute rounded-full border-2 border-white',
            notificationColor,
            dotClass
          )}
        />
      )}

      {/* Company Icon/Image */}
      {showCompanyIcon && (companyIcon || companyImageUrl) && (
        <div
          className={clsx(
            'absolute bg-white rounded-full shadow-sm flex items-center justify-center overflow-hidden',
            companyClass
          )}
        >
          {companyImageUrl ? (
            <img
              src={companyImageUrl}
              alt="company"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            companyIcon
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
