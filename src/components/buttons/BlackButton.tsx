import type { ButtonProps } from "../../interfaces/ButtonProps";

export const BlackButton = ({ text }: ButtonProps) => {
  return (
    <div className="bg-black text-white rounded-full px-5 py-2 border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-gray-200 cursor-pointer">
      {text}
    </div>
  );
};
