import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export const InstagramIcon = () => {
    return(
        <Link href={'/'} className="bg-gray-200 p-2 rounded-lg hover:opacity-80 transition-all ease-in-out">
            <FaInstagram className="text-3xl" />
        </Link>
    );
}