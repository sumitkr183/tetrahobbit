import Image from "next/image";

interface IProps {
  variation: "dark" | "light";
}

export const AppLogo = ({ variation }: IProps) => {
  const image =
    variation === "dark" ? "/images/logo.svg" : "/images/footer-logo.svg";

  return (
    <div className="relative w-[172px] md:w-[200px] 2xl:w-[345px] h-auto">
      <Image
        src={image}
        alt="tetrahobbit - brand logo"
        width={345}
        height={61}
        sizes="(max-width: 768px) 172px, (max-width: 1536px) 200px, 345px"
        style={{ height: "auto", width: "100%" }}
        priority
      />
    </div>
  );
};
