import clsx from 'clsx';

const SIZE_VARIANTS = {
  sm: {
    track: 'w-9 h-5',
    thumb: 'after:h-4 after:w-4 after:top-0.5 after:start-0.5',
    translate: 'peer-checked:after:translate-x-4',
    label: 'text-sm font-medium text-gray-700 dark:text-gray-300',
    description: 'text-sm text-gray-600 dark:text-gray-400',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'after:h-5 after:w-5 after:top-0.5 after:start-0.5',
    translate: 'peer-checked:after:translate-x-5',
    label: 'text-base font-medium text-gray-700 dark:text-gray-300',
    description: 'text-base text-gray-600 dark:text-gray-400',
  },
  lg: {
    track: 'w-14 h-8',
    thumb: 'after:h-7 after:w-7 after:top-0.5 after:start-0.5',
    translate: 'peer-checked:after:translate-x-6',
    label: 'text-lg font-medium text-gray-900 dark:text-gray-300',
    description: 'text-base text-gray-500 dark:text-gray-400',
  },
};

const COLOR_CLASSES = {
  primary: {
    ring: 'peer-focus:ring-2 peer-focus:ring-gray-200 dark:peer-focus:ring-violet-800',
    checked: 'peer-checked:bg-violet-600 dark:peer-checked:bg-violet-500',
  },
};

const Toggle = ({
  label,
  description,
  color = 'primary',
  size = 'md',
  checked,
  onChange,
  disabled = false,
  name,
  id,
  defaultChecked,
  className,
  ...props
}) => {
  const colorClass = COLOR_CLASSES[color] || COLOR_CLASSES.primary;
  const sizeClass = SIZE_VARIANTS[size] || SIZE_VARIANTS.md;

  return (
    <label
      className={clsx(
        'inline-flex items-start gap-2 group',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={id}
        {...props} // ✅ extra props
      />
      <div
        className={clsx(
          'relative rounded-full bg-gray-100 dark:bg-gray-200 transition-all',
           'group-hover:bg-gray-200 dark:group-hover:bg-gray-200', 
          sizeClass.track,
          colorClass.checked,
          colorClass.ring,
          sizeClass.thumb,
          sizeClass.translate,
          "after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all rtl:peer-checked:after:-translate-x-full dark:border-gray-600"
        )}
      />
      {(label || description) && (
        <div className="flex flex-col">
          {label && <span className={sizeClass.label}>{label}</span>}
          {description && <span className={sizeClass.description}>{description}</span>}
        </div>
      )}
    </label>
  );
};

export default Toggle;
