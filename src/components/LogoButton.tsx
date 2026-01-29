export const LogoButton = ({ isDark = false }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`flex items-center gap-3 h-10 text-3xl md:h-12 cursor-pointer`}
    >
      <div className="h-full aspect-square flex items-center justify-center">
        <img
          src="logo.svg"
          alt="BVDevs Logo"
          className={`transition-all duration-300 ${isDark ? "invert" : ""}`}
        />
      </div>

      {/* Text: Hidden on mobile, flex on medium screens+ */}
      <div className="hidden md:flex flex-col justify-center select-none">
        <span
          className={`font-['Red_Hat_Display',sans-serif] font-bold 
              text-lg lg:text-2xl whitespace-nowrap
              ${isDark ? "text-white" : "text-black"}`}
        >
          BVDevs
        </span>
      </div>
    </div>
  );
};
