import { ArchivoBlack } from "@/lib/fonts";
import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/"
      className={`${ArchivoBlack.className} font-bold hidden md:flex text-(--text-light) text-[12px] xl:text-[18px] md:text-[16px]`}
    >
      NexaShop
    </Link>
  );
}