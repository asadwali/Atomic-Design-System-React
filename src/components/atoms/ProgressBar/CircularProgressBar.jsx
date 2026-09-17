import clsx from 'clsx';

const sizeMap = {
  xs: { diameter: 64, stroke: 4, text: 'text-sm font-semibold', labelSize: 'text-xs', sizeClass: 'size-16' },
  sm: { diameter: 160, stroke: 18, text: 'text-2xl font-semibold', labelSize: 'text-xs', sizeClass: 'size-40' },
  md: { diameter: 200, stroke: 18, text: 'text-3xl font-semibold', labelSize: 'text-xs', sizeClass: 'size-52' },
  lg: { diameter: 240, stroke: 18, text: 'text-4xl font-semibold', labelSize: 'text-sm', sizeClass: 'size-60' },
  xl: { diameter: 280, stroke: 18, text: 'text-5xl font-semibold', labelSize: 'text-sm', sizeClass: 'size-72' },
};


const colorVariants = {
  primary: 'text-primary stroke-primary',
};

const CircularProgressBar = ({
  size = 'md',
  percentage = 0,
  label = '',
  variant = 'primary',
  bgColor = 'stroke-gray-200',
  className,
}) => {
  const { diameter, stroke, text, sizeClass, labelSize } = sizeMap[size];
  const radius = (diameter - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={clsx('flex flex-col items-center justify-center', className)}>
      <svg className={clsx('transform -rotate-90', sizeClass)} viewBox={`0 0 ${diameter} ${diameter}`}>
        {/* Background Circle */}
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="transparent"
          strokeWidth={stroke}
          className={bgColor}
        />

        {/* Progress Circle */}
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={clsx('transition-all duration-300', colorVariants[variant])}
        />

        {/* Centered Texts */}
        <g transform={`rotate(90, ${diameter / 2}, ${diameter / 2})`}>
          <text
            x="50%"
            y={label ? '55%' : '50%'}
            textAnchor="middle"
            dominantBaseline="middle"
            className={clsx('font-semibold fill-black', text)}
          >
            {percentage}%
          </text>
        </g>
      </svg>

      {label && (
        size === 'xs' ? (
          <span className={clsx('mt-1 text-gray-600 font-medium', labelSize)}>
            {label}
          </span>
        ) : (
          <svg
            className={clsx('transform -rotate-90', sizeClass, 'absolute pointer-events-none')}
            viewBox={`0 0 ${diameter} ${diameter}`}
          >
            <g transform={`rotate(90, ${diameter / 2}, ${diameter / 2})`}>
              <text
                x="50%"
                y="42%"
                textAnchor="middle"
                dominantBaseline="middle"
                className={clsx('fill-gray-600 font-medium', labelSize)}
              >
                {label}
              </text>
            </g>
          </svg>
        )
      )}
    </div>
  );
};

export default CircularProgressBar;
