import { useMenu } from "@/lib/menu";

export default function MenuDrawer() {
  const menu = useMenu();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={menu.closeMenu}
        className="
          fixed inset-0
          bg-black/40
          backdrop-blur-md
          z-40
        "
      />

      {/* Drawer */}
      <div
        className="
          fixed top-0 left-0
          w-1/3
          h-screen
          bg-(--bg-secondary)
          z-50
          shadow-lg
        "
      >
        {/* conteúdo do menu */}
      </div>
    </>
  );
}
