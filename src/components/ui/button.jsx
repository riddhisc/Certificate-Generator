import React from "react";

const Button = ({ className, size = "default", variant = "default", children, ...props }) => {
  const sizeClasses = {
    default: "px-4 py-2",
    lg: "px-6 py-3",
    sm: "px-2 py-1"
  };

  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-gray-100"
  };

  return (
    <button
      className={`rounded-md font-medium transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;