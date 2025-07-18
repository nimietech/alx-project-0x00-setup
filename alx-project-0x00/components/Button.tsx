import React from "react";
import { ButtonProps } from "@/interfaces";

//PROPS COMPONENT
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-600 text-white font-semibold px-4 py-2 mx-3 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;