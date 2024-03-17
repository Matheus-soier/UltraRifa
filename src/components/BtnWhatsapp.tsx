import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const BtnWhatsapp = () => {
    return(
        <Link href={'/'}>
            <button className="fixed bottom-5 right-5 bg-second py-3 px-3 md:py-2 rounded-full shadow-lg flex items-center gap-2">
                <FaWhatsapp className="text-3xl md:text-xl text-white"/>
                <span className="hidden md:inline-block text-white text-sm">Dúvidas?</span>
            </button>
        </Link>
    );
}