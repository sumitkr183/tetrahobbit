import { AppWrapper } from "@/components/app-wrapper";
import { AboutCard } from "@/components/cards/about";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ABOUT_US_DATA } from "@/lib/constants";

export const About = () => {
  return (
    <AppWrapper className="grid gap-10">
      <div className="max-w-3xl m-auto space-y-5">
        <h1 className="text-center font-semibold text-3xl 2xl:text-4xl">
          Who Using{" "}
          <span className="bg-[url(/shapes/title.svg)] bg-no-repeat bg-bottom bg-contain">
            Tertahobbit
          </span>
        </h1>
        <p className="text-center text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has the industry&apos;s standard dummy text ever
          since the 1500s
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {ABOUT_US_DATA.map((about) => (
            <CarouselItem className="basis-1/3" key={about.id}>
              <AboutCard {...about} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext variant="secondary-gradient" />
        <CarouselPrevious variant="secondary-gradient" />
      </Carousel>
    </AppWrapper>
  );
};
