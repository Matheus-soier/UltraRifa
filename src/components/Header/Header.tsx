"use client"

import { MenuOpen } from "@/icons/MenuOpenIcon";
import { MenuClose } from "@/icons/MenuCloseIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSideBar } from "@/context/SideBarContext";
import { BarItemMenu } from "./BarItemMenu";

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
            <div className="max-w-screen-xl md:py-1 px-3 flex justify-between items-center w-full h-hull">
                <div className="flex items-center gap-4">
                    <Link href={"/"} className="transition-all ease-in-out hover:opacity-80">
                        <Image src={image} alt={"Logo UltraRifa"} width={imageSize} height={0}/>
                    </Link>
                    <button className="block md:hidden" onClick={() => useCtx.setExpanded(!useCtx.expanded)}>
                        {!useCtx.expanded && <MenuOpen style="text-3xl"/>}
                        {useCtx.expanded && <MenuClose style="text-3xl"/>}
                    </button>
                </div>
                <ul className="hidden md:flex items-center gap-5">
                <div className="flex flex-col w-fit group cursor-pointer">
                    <Link href={'/'} className="transition-all ease-in-out hover:text-primary">
                        <li>Preços</li>
                    </Link>
                    <BarItemMenu/>
                </div>
                <div className="flex flex-col w-fit group cursor-pointer">
                    <Link href={'/'} className="transition-all ease-in-out hover:text-primary">
                        <li>Sobre Nós</li>
                    </Link>
                    <BarItemMenu/>
                </div>
                <div className="flex flex-col w-fit group cursor-pointer">
                    <Link href={'/'} className="transition-all ease-in-out hover:text-primary">
                        <li>Ajuda</li>
                    </Link>
                    <BarItemMenu/>
                </div>
                </ul>
                <div className="flex items-center gap-0 md:gap-5">
                    <Link href={'/'} className="pr-4 md:pr-0 font-semibold text-primary text-lg transition-all ease-in-out hover:text-green-900">Login</Link>
                    <Link href={'/'} className="hidden ss:inline-block bg-gradient-to-r from-primary to-second font-semibold text-white text-lg px-6 py-1 rounded-lg transition-all ease-in-out hover:opacity-80">Criar Conta</Link>
                </div>
            </div>
        </header>
    );
}