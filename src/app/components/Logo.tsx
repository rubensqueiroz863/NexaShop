import { ArchivoBlack } from "@/lib/fonts";
import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/"
      className={`${ArchivoBlack.className} md:flex text-(--text-main)`}
    >
      ECOMMERCE
    </Link>
  );
}