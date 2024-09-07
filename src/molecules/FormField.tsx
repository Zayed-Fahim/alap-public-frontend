import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  className?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  required,
  className,
  onChange,
  onBlur,
}) => {
  return (
    <div>
      <Label htmlFor={id} className="py-0.5 font-semibold">
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        className={className}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
