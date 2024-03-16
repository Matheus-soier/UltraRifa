import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return(
    <div className="mt-[90px] w-screen flex flex-col items-center px-3">
      <div className="max-w-screen-xl w-full h-fit px-3 grid grid-cols-1 md:grid-cols-2 gap-5 items-center md:pt-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold capitalize text-4xl ss:text-5xl
          md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r to-second from-primary">Crie sua 
          <div className="relative text-black -z-10">
            campanha
            <div className="absolute -bottom-3 ss:-bottom-5 left-0">
              <Image src="/rabisco.svg" alt="Rei Ultrarifa" width={400} height={70} className="w-[230px] ss:w-[300px] md:w-[350px] lg:w-[400px]"/>
            </div>
          </div> em questão de minutos!</h1>
          <p>Plataforma completa para você criar suas campanhas e alcançar um público maior através da UltraRifa.</p>
          <Link href={'/'}>
            <button className="bg-gradient-to-r to-second from-primary text-white px-6 py-2 font-bold rounded-full">Criar Minha Campanha</button>
          </Link>
        </div>
        <div className="relative flex justify-center">
    <div className="relative -z-10">
     <Image src="/hero.png" alt="Celular mostrando a plataforma" width={400} height={300} />
    <div className="absolute -top-10 -right-5">
      <Image src="/king-ultrarifa.svg" alt="Rei Ultrarifa" width={70} height={70} />
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Page;