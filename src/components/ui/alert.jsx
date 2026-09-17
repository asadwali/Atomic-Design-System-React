import { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-5 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-5 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        inverted: "bg-white text-gray-800 border-border [&>svg]:size-5",
        success: "bg-success text-white border-success [&>svg]:text-white [&>svg]:size-5",
        danger: "bg-danger text-white border-danger [&>svg]:text-white [&>svg]:size-5",
        warning: "bg-warning text-zinc-900 border-warning [&>svg]:text-zinc-900 [&>svg]:size-5",
        default: "bg-gray-900 text-white border-gray-700 [&>svg]:text-white [&>svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const defaultIcons = {
  success: <CheckCircle2 />,
  danger: <AlertCircle />,
  warning: <AlertTriangle />,
  default: <Info />,
  inverted: <Info />,
};

function Alert({
  className,
  variant = "default",
  type = "title-text-icon", // "text", "text-icon", "title-text", "title-text-icon"
  title,
  text,
  icon,
  ...props
}) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const showIcon = type.includes("icon");
  const showTitle = type.includes("title");

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {showIcon && (icon || defaultIcons[variant])}

      <div className="flex flex-col col-start-2 gap-1">
        {showTitle && <AlertTitle>{title}</AlertTitle>}
        {text && <AlertDescription>{text}</AlertDescription>}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
        className="absolute right-5 top-4 rounded p-1 hover:bg-black/10 cursor-pointer"
      >
        <X className="size-5" />
      </button>

    </div>
  );
}

function AlertTitle({ className, ...props }) {
  return (
    <div
      data-slot="alert-title"
      className={cn("line-clamp-1 min-h-4 font-bold text-lg tracking-tight", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }) {
  return (
    <div
      data-slot="alert-description"
      className={cn("text-base font-normal [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
