import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

interface IProps {
  bgImage: string;
  title: string;
  link: string;
  className?: string;
  theme?: "light" | "dark";
}

export const ServiceCard = ({
  bgImage,
  title,
  link,
  className,
  theme = "dark",
}: IProps) => {
  const bgImagePath = `/images/services/${bgImage}`;

  return (
    <div
      className={cn(
        "bg-contain bg-center bg-no-repeat w-full min-h-32 xl:min-h-40 2xl:h-52 px-5",
        className
      )}
      style={{ backgroundImage: `url(${bgImagePath})` }}
    >
      <div className="grid h-full items-center">
        <div className="space-y-3">
          <h1
            className={cn(
              "font-semibold text-lg xl:text-xl max-w-36",
              theme === "dark" && "text-white",
              theme === "light" && "text-black"
            )}
          >
            {title}
          </h1>
          <Link href={link}>
            <Button
              className="rounded-full text-xs"
              size="sm"
              variant="secondary"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
