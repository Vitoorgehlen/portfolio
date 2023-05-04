import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export const Login = () => {
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 17);
  }, []);

  return (
    <div
      className="absolute items-center justify-center inset-0 whitespace-pre-wrap bg-[#001100] text-[#4DE667] text-3xl transition-all"
      style={{
        opacity: isActive ? "1" : "0",
        pointerEvents: isActive ? "all" : "none",
      }}
    >
      <Typewriter
        options={{
          strings: [
            "ACESSANDO O SERVIDOR",
            "Digite seu login . . .      \nadmin123 \nDigite sua senha . . .      \n**********",
            "Favor espere alguns instantes...",
          ],
          autoStart: true,
          skipAddStyles: true,
          delay: 70,
          deleteSpeed: 10,
        }}
      />
    </div>
  );
};
