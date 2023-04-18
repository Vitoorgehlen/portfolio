import Image from "next/image";
interface IconProps {
  name: string;
  image: string;
  onClick: () => void;
}

export const Icon = ({ image, name, onClick }: IconProps) => {
  return (
    <div
      className="cursor-pointer flex flex-col items-center w-24 text-center"
      onClick={onClick}
    >
      <Image src={image} alt={name} width={64} height={64} />
      <h3 className="flex items-center justify-center text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.95)] w-24 leading-5 h-12">
        {name}
      </h3>
    </div>
  );
};
