import React from 'react';

// Simple utility to merge classes
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Extending LabelHTMLAttributes ensures 'htmlFor' and other standard props work automatically
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        // Base styles: Standard size, weight, and disabled states
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        // Your custom styles (e.g. text-slate-700)
        className
      )}
      {...props}
    />
  );
}