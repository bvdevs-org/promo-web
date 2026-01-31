import type { PublicButtonProps } from "@interfaces/ButtonProps";
import { BaseButton } from "./BaseButton";

export const OutlineButton = (props: PublicButtonProps) => {
  return (
    <BaseButton
      {...props} // Pass through text, to, onClick
      className="text-black bg-white rounded-full px-5 py-2
        border border-black transition-colors duration-300
        cursor-pointer hover:bg-gray-50 hover:text-black "
    />
  );
};
