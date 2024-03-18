import { Button } from "@/components/Button";
import { MoneyIcon } from "@/icons/MoneyIcon";
import Image from "next/image";
import Celular from "/public/cell-prices.png";
import King from "/public/king-ultrarifa.svg";
import { TicketIcon } from "@/icons/TicketIcon";
import { PremiumIcon } from "@/icons/PremiumIcon";
import { InfinityIcon } from "@/icons/InfinityIcon";
import { GraphicIcon } from "@/icons/GraphicIcon";
import { CartIcon } from "@/icons/CartIcon";
import { SupportIcon } from "@/icons/SupportIcon";
import Link from "next/link";

const Page = () => {
    return(
        <section className="mt-20 md:mt-28 w-screen flex flex-col items-center px-3">
            <div className="max-w-screen-xl w-full h-fit flex flex-col items-center gap-5 mb-10 md:mb-20">
                <h1 className="text-center font-bold text-3xl capitalize md:text-5xl">Planos</h1>
               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white border gap-5 border-gray-200 rounded-xl p-5">
                 <div className="flex flex-col gap-6">
                     <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-2xl">Taxas</h2>
                        <p className="text-sm">Confira nossas taxas por campanha clicando no botão abaixo. Na UltraRifa, atendemos Rifas de todos os tamanhos. Encontre a opção ideal para você:</p>
                            <Button value="Ver Taxas" />                     
                    </div>
                     <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-2xl">Começe Agora!</h2>
                        <p className="text-sm">
                            Esqueça as plataformas obsoletas que desapontam clientes. Comece agora sua campanha na UltraRifa e veja nossas vantagens.</p>
                            <Button value="criar minha campanha" link="/"/>
                    </div>
                 </div>
                    <div className="space-y-2">
                    <h2 className="font-bold text-2xl">Benefícios</h2>
                        <div className="flex items-center gap-1">
                            <div className="border border-gray-200 p-2 rounded-full">
                                <MoneyIcon />
                            </div>
                            <p className="capitalize">Valor Ilimitado por Bilhete</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="border border-gray-200 p-2 rounded-full">
                                <TicketIcon />
                            </div>
                            <p className="capitalize">até 1 milhão de bilhetes</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="border border-gray-200 p-2 rounded-full">
                                <PremiumIcon />
                            </div>
                            <p className="capitalize">bilhetes premiados</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="border border-gray-200 p-2 rounded-full">
                                <InfinityIcon />
                            </div>
                            <p className="capitalize">Prêmios ilimitados</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="border border-gray-200 p-2 rounded-full">
                                <GraphicIcon />
                            </div>
                            <p className="capitalize">função de order bump</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="border border-gray-200 p-2 rounded-full">
                                <CartIcon />
                            </div>
                            <p className="capitalize">Recuperação de bilhetes abandonados</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="border border-gray-200 p-2 rounded-full">
                                <SupportIcon />
                            </div>
                            <p className="capitalize">suporte exclusivo</p>
                        </div>
                    </div>
                    <div>
                        <Image src={Celular} alt="Plataforma UltraRifa"/>
                    </div>
                 </div>
               </div>
        </section>
    );
}

export default Page;