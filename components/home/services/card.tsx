import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface IProps {
  image: string;
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description, image }: IProps) => {
  return (
    <div className="border-2 border-black/20 rounded-lg p-4 grid gap-2">
      <Image src={image} alt={title} width={50} height={50} />
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm">{description}</p>

      <Link href="/" className="flex items-center gap-1 w-fit text-sm mt-20">
        View More <ChevronRight size={16} />
      </Link>
    </div>
  );
};
