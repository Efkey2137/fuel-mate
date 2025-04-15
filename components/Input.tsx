import { useState } from "react";

interface InputProps {
  onChange: (value: string | boolean) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}


const Input: React.FC<InputProps> = ({ onChange, placeholder, type = "number", className }) => {
  const [value, setValue] = useState<string | boolean>(type === "checkbox" ? false : "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputType = e.target.type;
    const newValue = inputType === "checkbox" ? e.target.checked : e.target.value;
    setValue(newValue as string); // local value state może być nadal string jeśli nie chcesz checkboxów kontrolować
    onChange(newValue);
  };
  

  return (
    <input
      type={type}
      checked={type === "checkbox" ? (value as boolean) : undefined}
      value={type !== "checkbox" ? (value as string) : undefined}
      onChange={handleChange}
      placeholder={type !== "checkbox" ? placeholder : undefined}
      className={`${
        type !== "checkbox" ? "bg-white text-neutral-950 placeholder-gray rounded-sm mb-2.5 pl-2.5 pt-1.5 pb-1.5 w-full" : ""
      } outline-0 ${className}`}
    />
  );
};

export default Input;
