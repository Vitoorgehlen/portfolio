export const Programas = () => {
  return (
    <div className="flex flex-col h-[600px] w-[600px] bg-[#1b1a1f] text-white">
      <div className="flex justify-center pt-3 bg-black">
        <img className="w-80 h-auto" src="/programas.png" />
      </div>
      <div className="p-3">
        <h1>Programas que domino:</h1>
        <h1>Photoshop</h1>
        <h1>Ilustrator</h1>
        <h1>HTML</h1>
        <br />
        <h1 className="flex justify-center">
          _______________________________________________________________________
        </h1>
        <h1>Programas que estou aprendendo:</h1>
        <h1>Next</h1>
        <h1>Node</h1>
        <br />
        <h1 className="flex justify-center">
          _______________________________________________________________________
        </h1>
        <h1>Programas que se precisar me viro:</h1>
        <h1>Premiere</h1>
      </div>
      <div className="flex justify-center gap-2 pt-3">
        <img src="/icons/html.png" className="w-20 h-auto" />
        <img src="/icons/next.png" className="w-20 h-auto" />
        <img src="/icons/node.png" className="w-20 h-auto" />
        <img src="/icons/photoshop.png" className="w-20 h-auto" />
        <img src="/icons/ilustrator.png" className="w-20 h-auto" />
        <img src="/icons/premiere.png" className="w-20 h-auto" />
      </div>
    </div>
  );
};
