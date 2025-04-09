import { useState } from "react";

interface InputProps {
  onChange: (value: string) => void; // typ funkcji przekazującej wartość
  placeholder?: string; // opcjonalny placeholder
  type?: string; 
  className?: string;
}

const Input: React.FC<InputProps> = ({ onChange, placeholder, type, className }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue); // przekazujesz wartość do rodzica

  };

  return <input 
  type={type || "number"} 
  value={value} 
  onChange={handleChange} 
  placeholder={placeholder} 
  className={`bg-white text-neutral-950 placeholder-gray rounded-sm mb-2.5 pl-2.5 pt-1.5 pb-1.5 w-full outline-0 ${className}`}
  />;
};

export default Input;
