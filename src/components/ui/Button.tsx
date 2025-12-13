import  React from "react";


const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export const Button = React.forwardRef(({ className, ...props }:any, ref) => {
  return (
    <a href={props.href}>
      <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
    </a>
    
  );
});