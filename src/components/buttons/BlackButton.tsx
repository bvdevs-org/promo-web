import type { PublicButtonProps } from "../../interfaces/ButtonProps";
import { BaseButton } from "./BaseButton";

export const BlackButton = (props: PublicButtonProps) => {
  return (
    <BaseButton
      {...props} // Pass through text, to, onClick
      className="bg-black text-white rounded-full px-5 py-2 border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-gray-200 cursor-pointer"
    />
  );
};
