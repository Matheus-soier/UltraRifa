"use client"

import { MenuOpen } from "@/icons/MenuOpenIcon";
import { MenuClose } from "@/icons/MenuCloseIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSideBar } from "@/context/SideBarContext";

export const Header = () => {

    const useCtx = useSideBar();

    const [image, setImage] = useState<string>("/icon.svg");
    const [imageSize, setImageSize] = useState<number>(60);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImage("/icon.svg");
                setImageSize(60);
            } else {
                setImage("/logo.svg");
                setImageSize(200);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        //Removemos o ouvinte para evitar travamento por vazamento de memória
        return () => window.removeEventListener('rezise', handleResize);
    }, []);

    return(
        <header className="fixed z-10 bg-white w-screen h-fit flex items-center justify-center shadow">
            <div className="max-w-screen-2xl py-2 px-3 flex justify-between items-center w-full h-hull">
                <div className="flex items-center gap-4">
                    <Link href={"/"} className="transition-all ease-in-out hover:opacity-80">
                        <Image src={image} alt={"Logo UltraRifa"} width={imageSize} height={0}/>
                    </Link>
                    <button className="block md:hidden" onClick={() => useCtx.setExpanded(!useCtx.expanded)}>
                        {!useCtx.expanded && <MenuOpen style="text-3xl"/>}
                        {useCtx.expanded && <MenuClose style="text-3xl"/>}
                    </button>
                </div>
            </div>
        </header>
    );
}