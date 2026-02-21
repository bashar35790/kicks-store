import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

    const variants = {
      primary: "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg",
      secondary: "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base hidden sm:inline-flex", // wait, just px-6 py-3
      lg: "px-8 py-4 text-lg",
    };

    // Quick fix for sizes.md to ensure it's not hidden
    sizes.md = "px-6 py-3 text-base";

    const variantStyles = variants[variant];
    const sizeStyles = sizes[size];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
