import { Button } from "@/components/Button";
import { FaqItem } from "@/components/FaqItem";
import { GridMainItem } from "@/components/GridMainItem";
import Image from "next/image";

const Page = () => {
  return(
    <div className="mt-20 md:mt-28 w-screen flex flex-col items-center px-3">
      <section id="home" className="max-w-screen-xl w-full h-fit px-3 mb-10 md:mb-28 grid grid-cols-1 md:grid-cols-2 gap-5 items-center md:pt-10">
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
            <Image src="/hero.webp" alt="Celular mostrando a plataforma" width={400} height={300} />
            <div className="absolute -top-10 -right-5">
              <Image src="/king-ultrarifa.svg" alt="Rei Ultrarifa" width={70} height={70} />
            </div>
        </div>
       </div>
      </section>
      <section className="max-w-screen-xl flex flex-col items-center gap-6 mb-10 md:mb-20 w-full h-fit px-3">
        <div className="space-y-5 w-full text-center">
          <h2 className=" font-bold text-3xl md:text-5xl capitalize">Veja como é simples.</h2>
          <p>Praticidade e simplicidade para criar com tranquilidade as suas campanhas</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center w-full h-fit">
            <GridMainItem title="Crie" body="Preencha os campos de sua campanha" image="/crie.svg" />
            <GridMainItem title="Publique" body="Pague a taxa de publicação" image="/publique.svg" />
            <GridMainItem title="Compartilhe" body="Compartilhe o seu link" image="/compartilhe.svg" />
            <GridMainItem title="Arrecade" body="Toda a arrecadação vai para você!" image="/arrecade.svg" />
        </div>
      </section>
      <section className="max-w-screen-xl flex flex-col items-center gap-6 md:gap-12 mb-10 md:mb-28 w-full h-fit px-3">
      <h2 className="font-bold text-3xl md:text-5xl capitalize">Dúvidas Frequentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
    <div className="flex flex-col gap-3 w-full">
        <FaqItem label="Quem recebe o valor dos bilhetes vendidos?">
            <p>O valor dos bilhetes vai diretamente para a sua conta bancária. No painel administrativo da UltraRifa, você adiciona as formas de pagamento que deseja na sua campanha, como PIX, cartão de crédito, etc.</p>
        </FaqItem>
        <FaqItem label="O sistema possui baixa automática dos bilhetes?">
            <p>Sim, na UltraRifa é possível integrar os pagamentos da sua campanha com o Mercado Pago, sendo assim, os bilhetes pagos terão o status alterado automaticamente.
            <br /><br />
            Mas, caso seja do seu interesse ter formas de pagamento manuais, os clientes efetuarão o pagamento na sua campanha, e você irá alterar os pedidos para pago no painel administrativo.</p>
        </FaqItem>
        <FaqItem label="Qual o valor para criar uma campanha?" link={true}/>
    </div>
    <div className="flex flex-col gap-3">
        <FaqItem label="O que acontece com os bilhetes não pagos?">
            <p>Na UltraRifa, você definirá um período entre 10 minutos e 60 dias para a reserva dos bilhetes expirarem. Após este período estabelecido, os bilhetes não pagos ficarão disponíveis para compra novamente.</p>
        </FaqItem>
        <FaqItem label="Quantas campanhas eu posso fazer?">
            <p>Você não tem limite de campanhas na UltraRifa, mas lembre-se que cada campanha criada necessita do pagamento da taxa da plataforma.</p>  
        </FaqItem>
        <FaqItem label="A UltraRifa organiza campanhas online?">
            <p>Não. A UltraRifa disponibiliza toda a plataforma para que os administradores das campanhas realizem suas próprias campanhas. A plataforma não requer eventuais autorizações que o organizador entender necessárias para a realização do seu sorteio.</p>
        </FaqItem>
    </div>
</div>

      </section>
    </div>
  );
}

export default Page;