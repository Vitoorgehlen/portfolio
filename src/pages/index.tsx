import Head from "next/head";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { Window } from "@/components/Window";
import { toast } from "react-toastify";
import { Login } from "@/components/Login";

interface Repos {
  name: string;
  svn_url: string;
}

export default function Home() {
  const [repos, setRepos] = useState<Repos[]>([]);
  const [isWindowActive, setWindowActive] = useState(false);
  const [windowType, setWindowType] = useState("app");
  const [windowLink, setWindowLink] = useState(
    "https://vitoorgehlen.github.io/jogo-da-velha/"
  );

  async function getGithubRepos() {
    const response = await fetch(
      "https://api.github.com/users/vitoorgehlen/repos"
    ).then((res) => {
      res.json().then((data) => {
        setRepos(data);
      });
    });
  }

  function handleOpenWindow(type: string, link = "") {
    setWindowActive(true);
    setWindowType(type);
    setWindowLink(link);
  }

  useEffect(() => {
    toast("Precione F11 para tela cheia");
  }, []);
  return (
    <>
      <Head>
        <title>Portifólio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex gap-4 flex-col flex-wrap content-start w-screen h-[95svh] items-start p-4">
        <Icon onClick={() => {}} name="Lixeira" image="/icons/trash.png" />
        <Icon
          onClick={() => {}}
          name="Meu Computador"
          image="/icons/computer.png"
        />
        <Icon
          onClick={() => {}}
          name="Curriculo"
          image="/icons/text_file_2.png"
        />
        <Icon onClick={() => {}} name="Programas" image="/icons/tools.png" />
        <Icon
          onClick={() => {
            handleOpenWindow("contato");
          }}
          name="Contato"
          image="/icons/phone.png"
        />
        <Icon
          onClick={() => {
            handleOpenWindow(
              "app",
              "https://lista-de-tarefas-ruby.vercel.app/"
            );
          }}
          name="Lista de Tarefas"
          image="/icons/notepad.png"
        />

        <Icon
          onClick={() => {
            handleOpenWindow(
              "app",
              "https://vitoorgehlen.github.io/jogo-da-velha/"
            );
          }}
          name="Jogo da Velha"
          image="/icons/joystick.png"
        />

        <Icon
          onClick={() => {
            handleOpenWindow(
              "app",
              "https://vitoorgehlen.github.io/reflexos-avancados/"
            );
          }}
          name="Reflexos Avançados"
          image="/icons/joystick.png"
        />

        <Icon
          onClick={() => {
            handleOpenWindow(
              "app",
              "https://vitoorgehlen.github.io/jokenpo/index.html"
            );
          }}
          name="Jokenpô"
          image="/icons/joystick.png"
        />

        <Window
          isActive={isWindowActive}
          link={windowLink}
          type={windowType}
          closeButton={() => {
            setWindowActive(false);
          }}
        />
      </main>

      <Login />
    </>
  );
}
