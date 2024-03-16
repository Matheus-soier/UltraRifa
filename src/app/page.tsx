import { Button } from "@/components/Button";
import { GridMainItem } from "@/components/GridMainItem";
import Image from "next/image";

const Page = () => {
  return(
    <div className="mt-16 md:mt-24 w-screen flex flex-col items-center px-3">
      <section className="max-w-screen-xl w-full h-fit px-3 my-6 grid grid-cols-1 md:grid-cols-2 gap-5 items-center md:pt-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold capitalize text-4xl ss:text-5xl
          md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r to-second from-primary">Crie sua 
          <div className="relative text-black -z-10">
            campanha
            <div className="absolute -bottom-3 ss:-bottom-5 left-0 -z-20">
              <Image src="/rabisco.svg" alt="Rei Ultrarifa" width={400} height={70} className="w-[230px] ss:w-[300px] md:w-[350px] lg:w-[400px]"/>
            </div>
          </div> em questão de minutos!</h1>
          <p>Plataforma completa para você criar suas campanhas e alcançar um público maior através da UltraRifa.</p>
          <Button link="/" value="Criar minha campanha"/>
        </div>
        <div className="relative flex justify-center">
          <div className="relative">
            <Image src="/hero.png" alt="Celular mostrando a plataforma" width={400} height={300} />
            <div className="absolute -top-10 -right-5">
              <Image src="/king-ultrarifa.svg" alt="Rei Ultrarifa" width={70} height={70} />
            </div>
        </div>
       </div>
      </section>
      <section className="max-w-screen-xl flex flex-col items-center gap-6 my-8 md:my-16 w-full h-fit px-3">
        <div className="space-y-2 w-full text-center">
          <h2 className=" font-bold text-3xl capitalize">Veja como é simples.</h2>
          <p>Praticidade e simplicidade para criar com tranquilidade as suas campanhas</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center w-full h-fit">
            <GridMainItem title="Crie" body="Preencha os campos de sua campanha" image="/crie.svg" />
            <GridMainItem title="Publique" body="Pague a taxa de publicação" image="/publique.svg" />
            <GridMainItem title="Compartilhe" body="Compartilhe o seu link" image="/compartilhe.svg" />
            <GridMainItem title="Arrecade" body="Toda a arrecadação vai para você!" image="/arrecade.svg" />
        </div>
      </section>
      
    </div>
  );
}

export default Page;