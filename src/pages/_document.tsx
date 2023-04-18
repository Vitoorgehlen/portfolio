import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="relative bg-[url('/wallpaper.png')] bg-cover bg-top overflow-hidden max-w-full before:absolute before:inset-0 before:crt after:absolute after:inset-0 after:flicker">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
