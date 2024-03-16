import Image from "next/image";

type Props = {
    title: string;
    body: string;
    image: string;
}

export const GridMainItem = ({title, body, image}: Props) => {
    return(
        <div className={`flex flex-row-reverse items-center gap-3 w-full h-max rounded-xl bg-white border border-gray-200 justify-between p-4`}>
            <Image src={image} alt="Celular mostrando a plataforma" width={70} height={0} />
            <div className="flex flex-col gap-3">
                <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-sm">{body}</p>
                </div>
            </div>
        </div>
    );
}