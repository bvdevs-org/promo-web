import { BurgerButton } from "./buttons/BurgerButton";
import { NavigationItems } from "./NavigationItems";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dispatch, SetStateAction } from "react";

export interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isDark?: boolean;
}

export const BurgerMenu = ({
  isOpen,
  setIsOpen,
  isDark = false,
}: BurgerMenuProps) => {
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Pass state (isOpen, isDark) and control (onClick) to the button */}
      <BurgerButton isDark={isDark} isOpen={isOpen} onClick={toggleMenu} />

      {isOpen && (
        <>
          {/* THE DROPDOWN MENU */}
          <div
            className="fixed top-24 left-5 right-5 bg-white rounded-4xl p-4 z-50 border border-gray-200 shadow-xl"
            role="menu"
          >
            <nav className="flex flex-col gap-3">
              <div className="flex flex-col w-max">
                <NavigationItems onItemClick={toggleMenu}></NavigationItems>
              </div>
              <div className="w-max pt-6">
                <LanguageSwitcher></LanguageSwitcher>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
