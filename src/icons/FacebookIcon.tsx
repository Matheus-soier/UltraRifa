import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

export const FacebookIcon = () => {
    return(
        <Link href={'/'} className="bg-gray-200 p-2 rounded-lg hover:opacity-80 transition-all ease-in-out">
            <FaFacebookF className="text-3xl" />
        </Link>
    );
}