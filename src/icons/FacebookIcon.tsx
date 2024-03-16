import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

export const FacebookIcon = () => {
    return(
        <Link href={'/'}>
            <button className="bg-gray-500 p-2 rounded-lg">
                <FaFacebookF className="text-3xl" />
            </button>
        </Link>
    );
}