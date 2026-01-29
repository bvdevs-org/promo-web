import type { GridCellProps } from "@interfaces/GridCellProps";

export const GridCell = ({ icon, name, text }: GridCellProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="p-1 w-8 h-8 flex items-center justify-center bg-neutral-600 rounded mb-10">
        {icon}
      </div>
      <h4 className="text-xl">{name}</h4>
      <p className="text-neutral-600">{text}</p>
    </div>
  );
};
