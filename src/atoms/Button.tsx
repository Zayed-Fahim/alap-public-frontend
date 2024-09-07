import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
  className,
  title,
}) => {
  return (
    <button
      title={title}
      type={type}
      onClick={onClick}
      className={`${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
