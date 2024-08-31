import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=""
      />
    </div>
  );
};

export default FormField;
