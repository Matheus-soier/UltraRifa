import { ReactNode } from "react";

export type ItemSideBar = {
    icon: ReactNode;
    title: string;
    link: string;
    style?: string;
    custom?: string;
}