import Link from "next/link";

type Props = {
    value: string;
    link: string;
    hidden?: boolean;
    custom?: string;
}

export const Button = ({value, link, hidden, custom}: Props) => {
    return(
        <Link href={link} className={`${hidden ? "hidden" : "inline-block" } ss:inline-block bg-gradient-to-r from-primary to-second capitalize font-semibold text-white md:text-lg px-6 py-2 rounded-lg transition-all ease-in-out w-fit hover:opacity-80 ${custom}`}>{value}</Link>
    );
}