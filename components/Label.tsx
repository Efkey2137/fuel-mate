import { useState } from "react";

interface LabelProps {
  text?: string; 
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, className }) => {
  const [value, setValue] = useState<string>("");


  return <h3 
  className={`text-neutral-200 font-bold mb-1.5 text-l ${className}`}
  >{text}</h3>;
};

export default Label;
