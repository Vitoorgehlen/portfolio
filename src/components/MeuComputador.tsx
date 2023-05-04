export const MeuComputador = () => {
  return (
    <div className="flex flex-col gap-3 h-[600px] w-[600px] bg-[#1b1a1f] text-white">
      <div className="flex justify-center pt-3 bg-black">
        <img className="w-80 h-auto" src="/meu-computador.png" />
      </div>
      <h1 className="flex justify-center">
        _______________________________________________________________________
      </h1>
      <div className="flex pl-3 justify-center">
        <img className="flex w-80 h-auto " src="/W10.png" />
      </div>
      <div className="flex justify-center pl-3">
        <div className="flex flex-col text-right">
          <h1>SISTEMA OPERACIONAL:</h1>
          <h1>PROCESSADOR:</h1>
          <br />
          <h1>RAM:</h1>
          <h1>PLACA DE VIDEO:</h1>
        </div>

        <div className="flex flex-col">
          <h1>Windows 10</h1>
          <h1>AMD Ryzen 5 3500U</h1>
          <h1>with Radeon Vega Mobile Gfx</h1>
          <h1>8GB:</h1>
          <h1>GTX 1050</h1>
        </div>
      </div>
      <h1 className="flex justify-center pt-6">
        _______________________________________________________________________
      </h1>
      <h1 className="flex justify-center">
        Olá, esta é a configuração do meu notebook
      </h1>
    </div>
  );
};
