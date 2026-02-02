interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-6 px-16 lg:px-80 pb-20 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-5xl lg:text-6xl">{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>
      </div>
    </>
  );
};
