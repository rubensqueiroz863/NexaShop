import { OpenSans } from "@/lib/fonts";
import Image from "next/image";

export default function PhoneCategoryCard() {
  return (
    <div className={`flex ${OpenSans.className} flex-row xl:flex-row items-center py-4 md:py-12 pl-10 pr-2 xl:h-74 rounded-[46px] justify-between w-full bg-linear-to-r from-[#010101] to-[#35695c]`}>
      
      {/* Texto principal e botão */}
      <div className="flex flex-col gap-6 z-10">
        <div>
          <p className="text-white text-[34px] font-bold leading-none">
            PHONE
          </p>
          <p className="text-white text-[34px] font-bold leading-none">
            Shop
          </p>
        </div>
        <button className="text-white cursor-pointer hover:opacity-70 transition-all border text-sm rounded-full px-4 py-2 font-medium">
          Shop by Category
        </button>
      </div>
      {/* Imagem */}
      <Image
        src="/images/phones.png"
        alt="Phones category"
        width={1280}
        height={1280}
        className="xl:w-58 w-48 h-auto"
      />
    </div>
  );
}