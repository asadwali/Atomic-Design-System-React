import clsx from 'clsx';

const variantStyles = {
  google: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-3 focus:ring-gray-100 focus:outline-gray-500 disabled:bg-gray-200',
  facebook: 'bg-blue-500 text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:ring-blue-100',
  apple: 'bg-gray-900 text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-100',
  twitter: 'bg-blue-400 text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-100',
  figma: 'bg-gray-900 text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-100',
  dribble: 'bg-rose-500 text-white hover:bg-rose-600 focus:ring-2 focus:ring-rose-100',
};

const sizeStyles = {
  iconOnly: 'p-2.5',
  withText: 'px-4 py-2.5',
};

const SocialMediaButton = ({
  icon,
  label,
  variant = '',
  showLabel = true,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const hasLabel = showLabel && label;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus:outline-none cur',
        variantStyles[variant],
        hasLabel ? sizeStyles.withText : sizeStyles.iconOnly,
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      {...props}
    >
      <span className="text-lg">{icon}</span>
      {hasLabel && <span className="text-base font-medium">{label}</span>}
    </button>

  );
};

export default SocialMediaButton;
