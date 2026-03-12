"use client";

import { useMenu } from "@/lib/menu";
import { motion } from "framer-motion";

export default function Menu() {
  const menu = useMenu();

  return (
    // Botão do menu
    <button
      onClick={() => menu.toggleMenu()}
      className="flex gap-1 flex-col cursor-pointer"
    >
      { /* Linha de cima */}
      <motion.span
        className="bg-(--text-main) w-4.5 md:w-5.5 xl:w-6 h-[2px] xl:h-[3px] rounded-md origin-center"
        animate={{
          rotate: menu.isOpen ? 45 : 0,
          y: menu.isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      { /* Linha do meio */}
      <motion.span
        className="bg-(--text-main) w-4.5 md:w-5.5 xl:w-6 h-[2px] xl:h-[3px] rounded-md origin-center"
        animate={{
          opacity: menu.isOpen ? 0: 1,
        }}
        transition={{ duration: 0.15}}
      />
      { /* Linha de baixo */}
      <motion.span
        className="bg-(--text-main) w-4.5 md:w-5.5 xl:w-6 h-[2px] xl:h-[3px] rounded-md origin-center"
        animate={{
          rotate: menu.isOpen ? -45 : 0,
          y: menu.isOpen ? -6 : 0,
        }}
        transition={{ duration: 0.2 }}
      />   
    </button>
  );
}