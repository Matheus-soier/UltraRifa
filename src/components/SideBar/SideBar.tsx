"use client"

import { MoneyIcon } from "@/icons/MoneyIcon";
import { ItemMenu } from "./ItemMenu";
import { SupportIcon } from "@/icons/SupportIcon";
import { AboutUsIcon } from "@/icons/AboutUsIcon";
import { useState } from "react";
import { useSideBar } from "@/context/SideBarContext";

export const SideBar = () => {
   const useCtx = useSideBar();

    return(
        <div className={`${useCtx.expanded ? "left-0" : "left-[-300px]"} fixed bg-white w-[280px] h-full mt-16 flex flex-col border-r md:hidden transition-all ease-in-out`}>
            <ItemMenu icon={<MoneyIcon/>} title={"Preços"} link={"/"}/>
            <ItemMenu icon={<AboutUsIcon/>} title={"Sobre Nós"} link={"/"}/>
            <ItemMenu icon={<SupportIcon/>} title={"Central de Ajuda"} link={"/"}/>
        </div>
    );
}