export const BVName = ({ className = "h-10 md:h-12", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-full aspect-square flex items-center justify-center">
        <img
          src="logo.svg"
          alt="BVDevs Logo"
          className="h-[85%] w-auto object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center select-none">
          <span className="font-['Red_Hat_Display',sans-serif] font-bold text-gray-900 tracking-[0.1px] leading-none text-lg lg:text-2xl whitespace-nowrap">
            BVDevs
          </span>
        </div>
      )}
    </div>
  );
};
