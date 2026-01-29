import { BurgerButton } from "./buttons/BurgerButton";

export const BurgerMenu = ({ isDark = false }) => {
  return (
    <div>
      <BurgerButton isDark={isDark}></BurgerButton>
    </div>
  );
};
