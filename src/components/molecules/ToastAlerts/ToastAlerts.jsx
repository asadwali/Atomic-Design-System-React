import clsx from 'clsx';

const typeStyles = {
  primary: {
    iconBg: 'bg-blue-100 dark:bg-blue-800',
    iconText: 'text-blue-500 dark:text-blue-200',
  },
  success: {
    iconBg: 'bg-green-100 dark:bg-green-800',
    iconText: 'text-green-500 dark:text-green-200',
  },
  warning: {
    iconBg: 'bg-orange-100 dark:bg-orange-700',
    iconText: 'text-orange-500 dark:text-orange-200',
  },
  error: {
    iconBg: 'bg-red-100 dark:bg-red-800',
    iconText: 'text-red-500 dark:text-red-200',
  },
};

const Toast = ({
  type = 'primary', // 'primary' | 'success' | 'warning' | 'error'
  title = 'Notification',
  description = 'This is a toast message.',
  icon,
  onClose = () => { },
  className = '',
}) => {
  const styles = typeStyles[type] || typeStyles.primary;

  return (
    <div
      role="alert"
      className={clsx(
        'relative flex items-start rounded-xl p-4 pr-12 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300',
        className
      )}
    >
      {/* Left icon */}
      <div
        className={clsx(
          'inline-flex items-center justify-center size-8 rounded-lg shrink-0 mr-4', // 16px gap
          styles.iconBg,
          styles.iconText
        )}
      >
        {icon}
      </div>

      {/* Message Content */}
      <div className="flex-1 text-sm font-normal">
        <div className="font-semibold text-gray-900 dark:text-white mb-1">{title}</div>
        <div>{description}</div>
      </div>

      {/* Close button (right icon) */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-label="Close"
      >
        <svg
          className="size-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
