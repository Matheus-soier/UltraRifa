import { ItemSideBar } from "@/types/ItemSideBar";
import Link from "next/link";

export const ItemMenu = ({icon, title, link}: ItemSideBar) => {
    return(
        <Link href={link} className="flex items-center gap-3 border-b px-4 py-4">
            <div className="flex items-center justify-center text-xl bg-gray-300 w-8 h-8 rounded-md">{icon}</div>
            <span>{title}</span>
        </Link>
    );
}