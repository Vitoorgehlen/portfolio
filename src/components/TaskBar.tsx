import { Icon } from "@/components/Icon";
import Image from "next/image";

export const TaskBar = () => {
  return (
    <footer
      className="flex items-center p-1 w-full bg-taskbar"
      style={{ border: "3px outset" }}
    >
      <button
        className="cursor-pointer flex items-center gap-2 w-30 py-1 px-4 text-xl hover:brightness-90 active:brightness-75"
        style={{ border: "3px outset" }}
      >
        <Image src="/icons/logo.png" alt="logo" width={16} height={16} />
        <h2 className="pt-1 font-display text-xs">Iniciar</h2>
      </button>
      <nav></nav>
    </footer>
  );
};
