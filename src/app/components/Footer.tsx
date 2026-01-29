import Image from "next/image";

export default function Footer() {

  return (
    <div className="flex items-center gap-2 flex-col text-[16px] md:text-[18px] md:px-0 px-16 justify-center pt-16 pb-12">
      <p className="flex gap-2 items-center text-(--text-main)/80 dark:text-(--text-main)/80">
        Built with:
        <Image
          src={"https://i.postimg.cc/Zqc6YScN/nextjs-original.png"}
          width={128}
          height={128}
          alt="Nextjs logo"
          className="w-5 h-5"
        />
        Next.js
        <Image
          src={"https://i.postimg.cc/Yqd9SSKg/favicon-4.png"}
          width={128}
          height={128}
          alt="Nextjs logo"
          className="w-5 h-5"
        />
        Vercel
        <Image
          src={"https://i.postimg.cc/bNpFY43B/spring-boot-icon.webp"}
          width={128}
          height={128}
          alt="Nextjs logo"
          className="w-4.5 h-4.5"
        />
        Spring Boot
      </p>
      <p className="text-sm text-center text-(--text-secondary)">
        Direitos autorais © Rubens Q. ALves 2026. Todos os direitos reservados.
      </p>
    </div>
  );
}