import Image from "next/image";
import Link from "next/link";

type Props = {
    size: number;
    link: string;
}

export const Logo = ({size, link}: Props) => {
    return(
        <Link href={"/"} className="transition-all ease-in-out hover:opacity-80">
            <Image src={link} alt={"Logo UltraRifa"} width={size} height={0}/>
        </Link>
    );
}