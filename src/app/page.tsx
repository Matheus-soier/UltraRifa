import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return(
    <div className="mt-[60px] w-screen flex flex-col items-center px-3">
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
          <Link href={'/'}>
            <button className="bg-gradient-to-r to-second from-primary text-white px-6 py-2 font-bold rounded-full">Criar Minha Campanha</button>
          </Link>
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
      <section className="max-w-screen-xl flex flex-col gap-6 my-6 w-full h-fit px-3">
        <h2 className="text-center font-bold text-3xl capitalize">a maneira mais fácil de criar uma Rifa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 gap-5 items-center">
          <div className="row-span-2 h-full border border-gray-50 shadow p-6 rounded-xl">
            Teste
          </div>
          <div className="row-span-3 h-full border border-gray-50 shadow p-6 rounded-xl">
            Teste
          </div>
          <div className="row-span-2 h-full border border-gray-50 shadow p-6 rounded-xl">
            Teste
          </div>
          <div className="row-span-1 h-full border border-gray-50 shadow p-6 rounded-xl">
            Teste
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;