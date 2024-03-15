"use client"

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type SideBarContextProps = {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
}

const SideBarContext = createContext<SideBarContextProps | null>(null);

export const SideBarProvider = ({children}: {children: ReactNode}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return(
        <SideBarContext.Provider value={{ expanded, setExpanded }}>
            {children}
        </SideBarContext.Provider>
    );
}

export const useSideBar = () => {
    const context = useContext(SideBarContext);
    if(context === null) throw new Error("Deve ser usado dentro de um SidebarProvider");
    return context;
};
