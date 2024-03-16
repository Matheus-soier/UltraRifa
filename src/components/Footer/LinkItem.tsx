import Link from "next/link";

type Props = {
    link: string;
    label: string;
}

export const LinkItem = ({link, label}: Props) => {
    return(
        <Link href={link} className="hover:underline w-max">
            {label}
        </Link>
    );
}