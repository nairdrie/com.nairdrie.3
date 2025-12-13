import React from 'react';

// A simple utility to merge class names cleanly (optional, but recommended)
// If you don't use this, you can just use template literals: `base-classes ${className}`
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string; // Included so TypeScript doesn't complain about your example usage
}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        // Base Layout Styles (Always applied)
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        // Your Custom Styles (Merged in)
        className
      )}
      {...props}
    />
  );
}