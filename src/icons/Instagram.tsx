import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export const InstagramIcon = () => {
    return(
        <Link href={'/'}>
            <button className="bg-gray-500 p-2 rounded-lg">
                <FaInstagram className="text-3xl" />
            </button>
        </Link>
    );
}