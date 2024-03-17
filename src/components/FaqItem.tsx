"use client"

import { ReactNode, useState } from "react";
import Link from "next/link";
import { MinusIcon } from "@/icons/MinusIcon";
import { PlusIcon } from "@/icons/PlusIcon";
import { LinkIcon } from "@/icons/LinkIcon";

type Props = {
    label: string;
    link?: boolean;
    children?: ReactNode;
};

export const FaqItem = ({ children, label, link = false }: Props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {!link && (
                <div className="bg-white rounded-2xl border border-gray-200 cursor-pointer hover:border-primary/30 transition-all ease-in-out duration-300 overflow-hidden">
                    <button className="text-start w-full px-6 py-3 flex items-center justify-between gap-3 font-bold" onClick={toggleExpanded}>
                        {label}
                        <div>
                            {!expanded && <PlusIcon />}
                            {expanded && <MinusIcon />}
                        </div>
                    </button>
                    <div 
                        className={`transition-[max-height] duration-300 ease-in-out ${expanded ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                        <div className="px-6 pb-3 text-gray-600">
                            {children}
                        </div>
                    </div>
                </div>
            )}
            {link && (
                <Link href={'/'}>
                    <span className="bg-white px-6 py-3 rounded-2xl border border-gray-200 cursor-pointer hover:border-primary/30 transition-all ease-in-out duration-300 flex items-center justify-between gap-3 font-bold">
                        {label}
                        <div>
                            <LinkIcon />
                        </div>
                    </span>
                </Link>
            )}
        </>
    );
};
