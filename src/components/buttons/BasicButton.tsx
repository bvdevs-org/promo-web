import type { PublicButtonProps } from "@interfaces/ButtonProps";
import { BaseButton } from "./BaseButton";

export const BasicButton = (props: PublicButtonProps) => {
  return (
    <BaseButton
      {...props} // Pass through text, to, onClick
      className="py-3 px-2 cursor-pointer text-gray-800 transition-colors duration-300 hover:text-gray-500"
    />
  );
};
