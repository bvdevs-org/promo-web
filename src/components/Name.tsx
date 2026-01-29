import logoblend from "@assets/logo-blend.svg";

export const BVName = ({ className = "h-10 md:h-12", showText = true }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`flex items-center gap-3 ${className} cursor-pointer`}
    >
      <div className="h-full aspect-square flex items-center justify-center">
        <img
          src={logoblend}
          alt="BVDevs Logo"
          className="h-[85%] w-auto object-contain"
        />
      </div>

      {/* Text: Hidden on mobile, flex on medium screens+ and if showText is true */}
      {showText && (
        <div className="hidden md:flex flex-col justify-center select-none">
          <span className="font-['Red_Hat_Display',sans-serif] font-bold text-white tracking-[0.1px] leading-none text-lg lg:text-2xl whitespace-nowrap">
            BVDevs
          </span>
        </div>
      )}
    </div>
  );
};
