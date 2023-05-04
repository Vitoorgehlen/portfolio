import Link from "next/link";
import Draggable from "react-draggable";
import { Contato } from "./Contato";
import { MeuComputador } from "./MeuComputador";
import { Curriculo } from "./Curriculo";
import { Programas } from "./Programas";
import Image from "next/image";
export const Window = ({ isActive, type, link = "", closeButton }: any) => {
  return (
    <Draggable handle="#handle" defaultPosition={{ x: -300, y: -315 }}>
      <div
        className="absolute top-1/2 left-1/2 flex flex-col items-end bg-taskbar px-1 pb-2 max-w-full overflow-x-hidden -translate-x-1/2 -translate-y-1/2 transition-all"
        style={{
          opacity: isActive ? "1" : "0",
          pointerEvents: isActive ? "all" : "none",
        }}
      >
        <nav className="flex w-full">
          <div id="handle" className="w-full h-full py-4"></div>

          <Link className="relative w-9 h-8" href={link} target="_blank">
            <Image
              className="cursor-pointer p-1"
              src="/icons/open.png"
              alt="X"
              fill
            />
          </Link>

          <div className="relative w-9 h-8">
            <Image
              className="cursor-pointer p-1"
              onClick={closeButton}
              src="/icons/close.png"
              alt="X"
              fill
            />
          </div>
        </nav>
        {type === "app" && (
          <iframe
            className="max-w-screen-sm lg:max-w-screen-2xl bg-white"
            src={link}
            width={600}
            height={600}
          />
        )}
        {type === "contato" && <Contato />}
        {type === "meuComputador" && <MeuComputador />}
        {type === "curriculo" && <Curriculo />}
        {type === "programas" && <Programas />}
      </div>
    </Draggable>
  );
};
