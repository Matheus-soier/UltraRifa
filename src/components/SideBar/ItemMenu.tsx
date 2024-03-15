import { useSideBar } from "@/context/SideBarContext";
import { ItemSideBar } from "@/types/ItemSideBar";
import Link from "next/link";

export const ItemMenu = ({icon, title, link, style, custom}: ItemSideBar) => {
    const useCtx = useSideBar();
    return(
        <Link href={link} className={`${style} flex items-center gap-3 border-b px-4 py-4`} onClick={() => useCtx.setExpanded(false)}>
            <div className={`${custom} flex items-center justify-center text-xl bg-gray-300 w-8 h-8 rounded-md`}>{icon}</div>
            <span>{title}</span>
        </Link>
    );
}