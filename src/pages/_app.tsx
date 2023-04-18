import { TaskBar } from "@/components/TaskBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { VT323, Press_Start_2P } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        className={`${vt323.variable} ${pressStart.variable} flex flex-col justify-between h-[100svh] max-h-[100svh]  font-sans text-xl`}
      >
        <Component {...pageProps} />
        <TaskBar />
        <ToastContainer position="top-center" theme="dark" />
      </div>
    </>
  );
}
