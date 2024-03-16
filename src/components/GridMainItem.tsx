import { GridMainItemsProps } from "@/types/GridMainItem";

export const GridMainItem = ({title, body, rows}: GridMainItemsProps) => {
    return(
        <div className={`row-span-1 lg:row-span-${rows.toString()}h-full bg-white border border-gray-200 rounded-xl flex flex-col lg:flex-row-reverse gap-5`}>
            <div>
                
            </div>
            <div className="flex flex-col gap-3 border-t lg:border-none p-6">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm">{body}</p>
            </div>
        </div>
    );
}