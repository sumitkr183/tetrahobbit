import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ServiceCard } from "./card";

export const CarouselContainer = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="basis-1/4">
          <ServiceCard
            title="Coding Practice"
            description="Lorem Ipsum is simply where dummy the many of the printing typesetting industry."
            image="/services/coding.svg"
          />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <ServiceCard
            title="App Development"
            description="Lorem Ipsum is simply where dummy the many of the printing typesetting industry."
            image="/services/application.svg"
          />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <ServiceCard
            title="Website Development"
            description="Lorem Ipsum is simply where dummy the many of the printing typesetting industry."
            image="/services/website.svg"
          />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <ServiceCard
            title="Skill Based Assignments"
            description="Lorem Ipsum is simply where dummy the many of the printing typesetting industry."
            image="/services/skill.svg"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
