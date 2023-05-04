export const Contato = () => {
  return (
    <div className="flex flex-col gap-3 h-[600px] w-[600px] bg-[#1b1a1f] text-white">
      <div className="flex justify-center pt-3 bg-black">
        <img className="w-80 h-auto" src="/contato.png" />
      </div>
      <div className="p-3">
        <h1>Se interessou pelo meu trabalho?</h1>
        <h1>
          Tenho certeza que não vai se arrepender de usar um tempinho seu para
          me mandar uma mensagem!!
        </h1>
      </div>
      <br />

      <a
        className="flex flex-row p-4 gap-2"
        href="https://wa.me/5554991963922?text=Ol%C3%A1%2C+estava+no+seu+portf%C3%B3lio"
        target="_blank"
      >
        <button className="cursor-pointer w-30">
          <img src="/icons/whatsapp.png" className="flex w-7 h-auto" />
        </button>
        <div className="flex flex-col">
          <h1>Vou deixar aqui meu WhatsApp.</h1>
          <h1 className="text-2xl">(54) 9 9196-3922</h1>
        </div>
      </a>

      <div className="flex flex-row p-4 gap-2">
        <button className="cursor-pointer w-30">
          <img src="/icons/gmail.png" className="flex w-7 h-auto" />
        </button>
        <div className="flex flex-col">
          <h1>Prefere por e-mail? Sem problema.</h1>
          <h1 className="text-2xl">vitoorgehlen@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};
