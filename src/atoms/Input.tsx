import React from "react";

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value?: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  id,
  placeholder,
  value,
  className,
  required,
  onChange,
  onBlur,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      required={required}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
