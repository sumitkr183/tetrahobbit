import { AppWrapper } from "@/components/app-wrapper";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const OurClients = () => {
  return (
    <AppWrapper>
      <div className="grid grid-cols-5 gap-5 bg-radial-[at_50%_50%] from-white to-[#FFC097] top-50% p-8 rounded-2xl">
        <div className="col-span-2 space-y-4">
          <Badge size="lg" variant="light" className="text-[#FF882E]">
            Our Clients
          </Badge>
          <h1 className="text-3xl font-semibold">
            Over <span className="text-[#F57A1E]">700+</span> Completed Projects
          </h1>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been dummy text ever since the 1500s,
          </p>
        </div>
        <div className="col-span-3 grid grid-cols-4 gap-5 [&>*:nth-child(odd)]:rounded-tl-none [&>*:nth-child(odd)]:rounded-br-none [&>*:nth-child(even)]:rounded-bl-none [&>*:nth-child(even)]:rounded-tr-none">
          <ClientLogo image="/clients/unacedmy.svg" alt="unacedmy" />
          <ClientLogo image="/clients/udemy.svg" alt="udemy" />
          <ClientLogo image="/clients/udacity.svg" alt="udacity" />
          <ClientLogo image="/clients/unacedmy.svg" alt="unacedmy" />
          <ClientLogo image="/clients/udemy.svg" alt="udemy" />
          <ClientLogo image="/clients/udacity.svg" alt="udacity" />
          <ClientLogo image="/clients/unacedmy.svg" alt="unacedmy" />
          <ClientLogo image="/clients/udemy.svg" alt="udemy" />
        </div>
      </div>
    </AppWrapper>
  );
};

const ClientLogo = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div className="border-2 border-[#FF882E] grid justify-center items-center p-4 rounded-4xl bg-white">
      <Image
        src={image}
        alt={alt}
        width={137}
        height={30}
        className="object-contain"
      />
    </div>
  );
};
