import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex mt-20 flex-col items-center justify-center gap-3 px-6 md:px-0 pt-16 pb-12 bg-[var(--bg-main)] border-t border-[var(--text-secondary)]">
      <div className="flex flex-wrap items-center justify-center gap-2 text-[12px] md:text-[16px] text-[var(--text-secondary)]">
        <p className="text-[var(--text-muted)]">Built with:</p>
        <div className="flex items-center gap-1">
          <Image
            src="https://i.postimg.cc/Zqc6YScN/nextjs-original.png"
            width={128}
            height={128}
            alt="Next.js logo"
            className="w-5 h-5"
          />
          <span className="text-[var(--text-dark)]">Next.js</span>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="https://i.postimg.cc/Yqd9SSKg/favicon-4.png"
            width={128}
            height={128}
            alt="Vercel logo"
            className="w-5 h-5"
          />
          <span className="text-[var(--text-dark)]">Vercel</span>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="https://i.postimg.cc/bNpFY43B/spring-boot-icon.webp"
            width={128}
            height={128}
            alt="Spring Boot logo"
            className="w-4 h-4"
          />
          <span className="text-[var(--text-dark)]">Spring Boot</span>
        </div>
      </div>
      <p className="text-xs md:text-sm text-center text-[var(--text-muted)]">
        © 2026 Rubens Q. Alves. All rights reserved.
      </p>
    </footer>
  );
}