"use client"

import { MoneyIcon } from "@/icons/MoneyIcon";
import { ItemMenu } from "./ItemMenu";
import { SupportIcon } from "@/icons/SupportIcon";
import { AboutUsIcon } from "@/icons/AboutUsIcon";
import { useEffect} from "react";
import { useSideBar } from "@/context/SideBarContext";
import { LoginIcon } from "@/icons/LoginIcon";
import { SignInIcon } from "@/icons/SigninIcon";

export const SideBar = () => {
   const useCtx = useSideBar();

   useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && !target.closest(".side-bar")) useCtx.setExpanded(false);
    };

    if (useCtx.expanded) document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);

  }, [useCtx]);

    return(
        <div className={`${useCtx.expanded ? "left-0" : "left-[-300px]"} fixed side-bar bg-white w-[280px] h-full mt-[58px] flex flex-col border-r md:hidden transition-all ease-in-out z-10`}>
            <ItemMenu icon={<LoginIcon/>} title={"Login"} link={"/"} style="ss:hidden" custom="bg-primary/30 text-primary"/>
            <ItemMenu icon={<SignInIcon/>} title={"Criar Conta"} link={"/"} style="ss:hidden" custom="bg-primary/30 text-primary"/>
            <ItemMenu icon={<MoneyIcon/>} title={"Preços"} link={"/"}/>
            <ItemMenu icon={<AboutUsIcon/>} title={"Sobre Nós"} link={"/"}/>
            <ItemMenu icon={<SupportIcon/>} title={"Central de Ajuda"} link={"/"}/>
        </div>
    );
}