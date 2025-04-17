import { useState } from "react";

interface InputProps {
  onChange: (value: string | boolean) => void;
  placeholder?: string;
  value?: string | boolean;
  type?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ onChange, placeholder, value, type = "text", className }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputType = e.target.type;
    const newValue = inputType === "checkbox" ? e.target.checked : e.target.value;
    onChange(newValue);
  };

  const isCheckbox = type === "checkbox";

  return (
    <input
      type={type}
      onChange={handleChange}
      {...(!isCheckbox
        ? { value: typeof value === "string" ? value : "", placeholder }
        : { checked: !!value })}
      className={`${
        !isCheckbox
          ? "bg-white text-neutral-950 placeholder-gray rounded-sm mb-2.5 pl-2.5 pt-1.5 pb-1.5 w-full"
          : ""
      } outline-0 ${className}`}
    />
  );
};

export default Input;
