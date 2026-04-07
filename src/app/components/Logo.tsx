import { montserrat, Inter } from "@/lib/fonts";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex xl:text-xl items-center">
      <span className={`${montserrat.className} font-bold text-[#00ffe1] neon`}>
        Nexora
      </span>
      <span className={`${Inter.className} text-white`}>
        ShopX
      </span>
    </Link>
  );
}