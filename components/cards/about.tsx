import Image from "next/image";

interface IProps {
  image: string;
  title: string;
  description: string;
}

export const AboutCard = ({ title, description, image }: IProps) => {
  return (
    <div className="border-2 border-black/20 rounded-lg p-4 grid gap-2">
      <Image src={image} alt={title} width={50} height={50} />
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};
