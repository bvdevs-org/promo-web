import type { BurgerButtonProps } from "@interfaces/BurgerButtonProps";

export const BurgerButton = ({
  isDark = false,
  isOpen,
  onClick,
}: BurgerButtonProps) => {
  // Define generic classes for both lines
  // We explicitly set 'y' to 12 in the SVG line tag below
  const lineClass = `origin-center transition-transform duration-300 ease-in-out`;

  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className={`p-2 focus:outline-none ${isDark ? "invert" : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 stroke-black"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Top Line */}
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          className={`${lineClass} ${
            isOpen ? "rotate-45" : "-translate-y-0.75"
          }`}
        />

        {/* Bottom Line */}
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          className={`${lineClass} ${
            isOpen ? "-rotate-45" : "translate-y-0.75"
          }`}
        />
      </svg>
    </button>
  );
};
