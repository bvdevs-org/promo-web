import type { ButtonProps } from "../../interfaces/ButtonProps";

export const BasicButton = ({text}: ButtonProps) => {
  return (
    <div className="py-3 px-2 cursor-pointer text-gray-800 transition-colors duration-300 hover:text-gray-500">
      {text}
    </div>
  );
};
