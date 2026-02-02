import type { ReactNode } from "react";

interface CardProps {
  title: string;
  text: string;
  icon: ReactNode;
}

export const Card = ({ title, text, icon }: CardProps) => {
  return (
    <>
      <div className="px-6 lg:px-50 pb-20">
        <div className="border border-neutral-400 rounded-3xl px-10 py-20 flex flex-col gap-8">
          {/* Icon */}
          <div className="p-4 bg-gray-100 rounded-full place-self-center">
            {icon}
          </div>

          {/* Information */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl">{title}</h2>
            <p className="text-gray-500 text-lg">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
