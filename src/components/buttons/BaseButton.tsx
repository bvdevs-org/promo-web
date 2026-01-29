import { NavLink } from "react-router-dom";
import type { ButtonProps } from "@interfaces/ButtonProps";

export const BaseButton = ({
  text,
  to,
  onClick,
  className = "",
  activeClassName = "",
}: ButtonProps) => {
  // 1. If it's a link
  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${className} ${isActive ? activeClassName : ""}`
        }
      >
        {text}
      </NavLink>
    );
  }

  // 2. If it's a standard button/div
  return (
    <div onClick={onClick} className={className}>
      {text}
    </div>
  );
};
