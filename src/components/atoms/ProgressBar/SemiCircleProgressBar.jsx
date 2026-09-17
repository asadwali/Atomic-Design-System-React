import clsx from "clsx";

const sizeMap = {
  xs: { diameter: 64, stroke: 4, text: "text-sm font-semibold", labelSize: "text-xs", sizeClass: "w-16 h-8" },
  sm: { diameter: 160, stroke: 18, text: "text-2xl font-semibold", labelSize: "text-xs", sizeClass: "w-40 h-20" },
  md: { diameter: 200, stroke: 18, text: "text-3xl font-semibold", labelSize: "text-xs", sizeClass: "w-52 h-26" },
  lg: { diameter: 240, stroke: 18, text: "text-4xl font-semibold", labelSize: "text-sm", sizeClass: "w-60 h-30" },
  xl: { diameter: 280, stroke: 18, text: "text-5xl font-semibold", labelSize: "text-sm", sizeClass: "w-72 h-36" },
};

const colorVariants = {
  primary: "text-primary stroke-primary",
};

const SemiCircularProgressBar = ({
  size = "md",
  percentage = 0,
  label = "",
  variant = "primary",
  bgColor = "stroke-gray-200",
  className,
}) => {
  const { diameter, stroke, text, sizeClass, labelSize } = sizeMap[size];
  const radius = (diameter - stroke) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const arcPath = `
    M ${stroke / 2} ${diameter / 2}
    A ${radius} ${radius} 0 0 1 ${diameter - stroke / 2} ${diameter / 2.001}
  `;

  return (
    <div className={clsx('flex flex-col items-center justify-center', className)}>
      <svg
        className={sizeClass}
        viewBox={`0 0 ${diameter} ${diameter / 2 + stroke}`}
        fill="none"
      >
        {/* Background arc */}
        <path
          d={arcPath}
          strokeWidth={stroke}
          className={bgColor}
          strokeLinecap="round"
        />

        {/* Progress arc */}
        <path
          d={arcPath}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={clsx("transition-all duration-300", colorVariants[variant])}
        />

        {/* Label inside (for sizes > xs) */}
        {label && size !== "xs" && (
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            className={clsx("fill-gray-600 font-medium", labelSize)}
          >
            {label}
          </text>
        )}

        {/* Percentage inside */}
        <text
          x="50%"
          y={label && size !== "xs" ? "90%" : "80%"}
          textAnchor="middle"
          className={clsx("font-semibold fill-black", text)}
        >
          {percentage}%
        </text>
      </svg>

      {/* Label below for xs */}
      {label && size === "xs" && (
        <span className={clsx("mt-1 text-gray-600 font-medium", labelSize)}>
          {label}
        </span>
      )}
    </div>
  );
};

export default SemiCircularProgressBar;
