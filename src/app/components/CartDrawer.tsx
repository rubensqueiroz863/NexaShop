import { useCart } from "@/lib/cart";
import { motion } from "framer-motion";

export default function CartDrawer() {
  const cart = useCart();
  return (
    // CartDrawer
    <>
      {/* Overlay */}
      <motion.div
        onClick={() => cart.toggleCart()}
        className="
          fixed inset-0
          bg-black/40
          backdrop-blur-md
          z-40
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Drawer */}
      <motion.div
        className="
          fixed top-0 left-0
          md:w-1/3
          w-1/2
          h-screen
          bg-(--bg-secondary)
          z-50
          shadow-lg
        "
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%"}}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        { /* Conteúdo */}
      </motion.div>
    </>
  )
}