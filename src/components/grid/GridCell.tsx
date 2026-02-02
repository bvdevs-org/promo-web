import type { ReactNode } from "react";

interface GridCellProps {
  icon: ReactNode;
  name: string;
  text: string;
}

export const GridCell = ({ icon, name, text }: GridCellProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="p-1 w-8 h-8 flex items-center justify-center bg-neutral-600 rounded mb-10">
        {icon}
      </div>
      <h3 className="text-xl">{name}</h3>
      <p className="text-neutral-600 wrap-break-word whitespace-normal">
        {text}
      </p>
    </div>
  );
};
