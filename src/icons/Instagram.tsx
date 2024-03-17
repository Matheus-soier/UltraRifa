import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export const InstagramIcon = () => {
    return(
        <Link href={'/'}>
          <FaInstagram className="text-3xl" />
        </Link>
    );
}