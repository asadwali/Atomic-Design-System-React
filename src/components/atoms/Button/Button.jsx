import clsx from 'clsx';

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-violet-700 focus:ring-3 focus:ring-violet-100 focus:outline-violet-500 disabled:bg-violet-200',
  secondary: 'bg-violet-100 text-violet-900 hover:bg-violet-200 focus:ring-3 focus:ring-violet-100 focus:outline-violet-50 focus:ring-violet-50 disabled:bg-violet-50 disabled:text-violet-300 border-none outline-none',
  outline: 'bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-3 focus:ring-gray-200 border border-gray-200 text-gray-700 disabled:bg-transparent disabled:text-gray-300',
  ghost: 'bg-transparent text-gray-700 border-none outline-none focus:outline-none focus:ring-0 hover:bg-transparent disabled:text-gray-300',

  primaryRed: 'bg-red-600 text-white hover:bg-red-700 focus:ring-3 focus:ring-red-100 focus:outline-red-500 disabled:bg-red-200',
  secondaryRed: 'bg-red-50 text-red-700 hover:bg-red-100 focus:ring-3 focus:ring-red-100 focus:outline-red-50 focus:ring-red-50 disabled:bg-red-50 disabled:text-red-300 border-none outline-none',
  outlineRed: 'bg-transparent text-red-700 hover:bg-red-50 focus:ring-3 focus:ring-red-200 border border-red-200 text-red-700 disabled:bg-transparent disabled:text-red-300',
  ghostRed: 'bg-transparent text-red-700 border-none outline-none focus:outline-none focus:ring-0 hover:bg-red-50 disabled:text-red-300 disabled:hover:bg-transparent',
};

const sizeClasses = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm rounded-sm',
  lg: 'px-4.5 py-2.5 text-base rounded-sm',
  xl: 'px-5 py-3 text-base rounded-sm',
  "2xl": 'px-7 py-4 text-lg rounded-sm',
};

const iconSizeClasses = {
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-base',
  "2xl": 'text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'lg',
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  ...props
}) => {
  const isIconOnly = !children && (leftIcon || rightIcon);

  return (
    <button
      disabled={disabled}
      className={clsx(
        'rounded-sm font-medium text-center focus:outline-none flex items-center justify-center gap-2 transition-all duration-200',
        variantClasses[variant],
        sizeClasses[size],
        isIconOnly && 'gap-0',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      {...props}
    >

      {leftIcon && (
        <span className={clsx('inline-flex items-center', iconSizeClasses[size])}>
          {leftIcon}
        </span>
      )}

      {!isIconOnly && <span>{children}</span>}

      {rightIcon && (
        <span className={clsx('inline-flex items-center', iconSizeClasses[size])}>
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
