"use client"

import { Logo } from "../Logo";
import { InstagramIcon } from "@/icons/Instagram";
import { FacebookIcon } from "@/icons/FacebookIcon";
import { ArrowTopIcon } from "@/icons/ArrowTopIcon";
import { LinkItem } from "./LinkItem";
import { BtnWhatsapp } from "../BtnWhatsapp";

export const Footer = () => {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      };

    return(
        <footer className="w-screen h-fit flex justify-center bg-white border-t py-10 border-gray-200">
            <div className="max-w-screen-xl w-full px-3 ">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 border-b border-dashed border-gray-200">
                    <div className="flex flex-col gap-5 items-start border-b border-dashed border-gray-200 pb-5 xl:border-none">
                        <Logo link="/logo.svg" size={200}/>
                        <p className="w-fit text-gray-500 text-sm ss:text-base">Plataforma para você criar e gerenciar suas campanhas com segurança e praticidade.</p>
                        <div className="flex items-center gap-3">
                            <FacebookIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full pb-5">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl">Páginas</h3>
                            <ul className="flex flex-col gap-2 text-gray-500 text-sm ss:text-base">
                                <LinkItem link="/" label="Inicio"/>
                                <LinkItem link="/prices" label="Preços"/>
                                <LinkItem link="/" label="Sobre Nós"/>
                                <LinkItem link="/" label="Termos de Uso"/>
                                <LinkItem link="/" label="Políticas de Privacidade"/> 
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-2xl">Ajuda</h3>
                            <ul className="flex flex-col gap-2 text-gray-500 text-sm ss:text-base">
                                <LinkItem link="/" label="Central de Ajuda"/>
                                <LinkItem link="/" label="Dúvidas Frequentes"/>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-2xl">Contato</h3>
                            <ul className="flex flex-col gap-2 text-gray-500 text-sm ss:text-base">
                                <LinkItem link="https://wa.link/6n6jsm" label="Whatsapp"/>
                                <LinkItem link="/" label="contato@ultrarifa.com.br"/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between pt-5 items-center text-center lg:text-start gap-3">
                    <p className="text-gray-500 text-sm ss:text-base">Copyright © 2024 UltraRifa <br /> Todos os direitos reservados</p>
                    <button onClick={scrollToTop} className="bg-primary text-white px-2 py-1 rounded-md flex items-center gap-1 hover:opacity-80 transition-all ease-in-out">
                        <ArrowTopIcon />
                        <span>Voltar ao Topo</span>
                    </button>
                </div>
            </div>
            <BtnWhatsapp />
        </footer>
    );
};
