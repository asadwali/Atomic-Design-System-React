import clsx from 'clsx';

const variantClasses = {
  primary: 'bg-primary',
};

const textVariant = {
  primary: 'text-sm font-medium text-gray-700',
};

const ProgressBar = ({
  progress = 0,
  variant = 'primary',
  showPercentage = 'none',
  className = '',
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const barColor = variantClasses[variant] || variantClasses.primary;
  const textColor = textVariant[variant] || textVariant.primary;

  // === INLINE RIGHT ===
  if (showPercentage === 'inline-right') {
    return (
      <div className={clsx('flex items-center space-x-2 w-full', className)}>
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={clsx('h-full transition-all duration-300 rounded-full', barColor)}
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
        <span className={clsx('', textColor)}>
          {clampedProgress}%
        </span>
      </div>
    );
  }

  // === TOOLTIP RENDERING ===
  return (
    <div className={clsx('relative w-full', className)}>
      {/* Tooltip Top */}
      {showPercentage === 'tooltip-top' && (
        <div
          className="absolute -top-8 transform -translate-x-1/2 z-10"
          style={{ left: `${clampedProgress}%` }}
        >
          <div className={clsx('relative bg-white px-2 py-1 rounded shadow', textColor)}>
            {clampedProgress}%
            <div className="absolute left-1/2 -bottom-1.5 transform bg-white rotate-45 shadow" />
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={clsx('h-full transition-all duration-300 rounded-full', barColor)}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>

      {/* Tooltip Bottom */}
      {showPercentage === 'tooltip-bottom' && (
        <div
          className="absolute top-4 transform -translate-x-1/2 z-10"
          style={{ left: `${clampedProgress}%` }}
        >
          <div className={clsx('relative bg-white px-2 py-1 rounded shadow', textColor)}>
            {clampedProgress}%
            <div className="absolute left-1/2 -top-1.5 transform bg-white rotate-45 shadow" />
          </div>
        </div>
      )}

      {/* Below Right */}
      {showPercentage === 'below-right' && (
        <div className="text-sm text-right mt-2">
          <span className={clsx(textColor)}>{clampedProgress}%</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
