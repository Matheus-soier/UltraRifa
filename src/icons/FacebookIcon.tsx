import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

export const FacebookIcon = () => {
    return(
        <Link href={'/'}>
          <FaFacebookF className="text-3xl" />
        </Link>
    );
}