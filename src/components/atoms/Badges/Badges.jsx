import clsx from 'clsx';
import { X } from 'lucide-react';
import Avatar from '../Avatar/Avatar';
import { useState } from 'react';

const variantStyles = {
  primary: 'bg-violet-100 text-violet-800 dark:bg-violet-200 dark:text-violet-900',
  success: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
  error: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
  gray: 'bg-gray-100 text-gray-800 dark:bg-gray-200 dark:text-gray-900',
  blueGray: 'bg-gray-50 text-indigo-800',
  sky: 'bg-sky-50 text-sky-700',
  blue: 'bg-blue-50 text-blue-700',
  indigo: 'bg-indigo-50 text-indigo-700',
  pink: 'bg-pink-50 text-pink-700',
  rose: 'bg-rose-50 text-rose-700',
  orange: 'bg-orange-50 text-orange-700',
};

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1',
};

const iconOnlySizeStyles = {
  sm: 'size-6 p-1 justify-center',
  md: 'size-7 p-1.5 justify-center',
  lg: 'size-8 p-2 justify-center',
};

const dotSizeStyles = {
  sm: 'w-1.5 h-1.5',
  md: 'size-2',
  lg: 'w-2.5 h-2.5',
};

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  dotLeft = false,
  dotRight = false,
  className = '',
  image,
  closable = false,
  ...props
}) => {
  const isIconOnly = !children && (leftIcon || rightIcon);

  const badgeClasses = clsx(
    'inline-flex gap-1.5 items-center font-medium rounded-sm',
    variantStyles[variant],
    isIconOnly ? iconOnlySizeStyles[size] : sizeStyles[size],
    className
  );

  const dotClasses = clsx('rounded-full bg-current', dotSizeStyles[size]);

    const [visible, setVisible] = useState(true);
    if (!visible) return null;

  return (
    <span className={badgeClasses} {...props}>
      {image && (
           <Avatar  imageUrl={image} />
      )}
      {/* Normal children + icons */}
      {dotLeft && <span className={clsx(dotClasses, '')} />}
      {leftIcon && <span className={children ? '' : ''}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={children ? '' : ''}>{rightIcon}</span>}
      {dotRight && <span className={clsx(dotClasses, '')} />}

      {/* Chip close button */}
      {closable && (
        <button
          type="button"
         onClick={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
          className="inline-flex items-center justify-center rounded-full hover:bg-black/10 size-4"
        >
          <X className="size-3" />
        </button>
      )}
    </span>
  );
};

export default Badge;
