import { BasicButton } from "./buttons/BasicButton";
import { BlackButton } from "./buttons/BlackButton";

export const Navigation = () => {
  return (
    <nav className="fixed top-10 left-[50%] translate-x-[-50%] flex gap-4 items-center rounded-full bg-gray-100 px-5 py-2">
      {/* Home Link */}
      <BasicButton text="Home"></BasicButton>
      {/* Contact Button */}
      <BlackButton text="Contact-us"></BlackButton>
      {/* English Button */}
      <BasicButton text="English"></BasicButton>
      {/* Czech Button */}
      <BasicButton text="Czech"></BasicButton>
    </nav>
  );
};
