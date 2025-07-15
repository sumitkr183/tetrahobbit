import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AppWrapper } from "@/components/app-wrapper";
import { ServiceCard } from "@/components/cards/service";

export const Hero = () => {
  return (
    <div className="bg-[url(/images/hero-bg.svg)] py-10 bg-no-repeat bg-cover">
      <AppWrapper>
        <div className="grid grid-cols-5 gap-4 xl:gap-10 items-center">
          <div className="col-span-2 space-y-4">
            <h2 className="text-purple-500 text-xl font-semibold">
              Welcome Tetrahobbit
            </h2>
            <h1 className="text-4xl font-semibold leading-12">
              Best Web & App Development Company in India
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the dummy text ever since the
              1500s.
            </p>

            <Button
              variant="secondary-gradient"
              className="rounded-full mt-3"
              size="lg"
            >
              Read More
              <span className="p-1 bg-white rounded-full">
                <ChevronRight className="text-purple" />
              </span>
            </Button>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-5">
              <ServiceCard
                link="/"
                title="App Development"
                bgImage="app-dev.svg"
                theme="dark"
              />
              <ServiceCard
                link="/"
                title="Web Development"
                bgImage="web-dev.svg"
                theme="light"
              />
              <ServiceCard
                link="/"
                title="Digital Marketing"
                bgImage="digital-market.svg"
              />
              <ServiceCard
                link="/"
                title="Software Development"
                bgImage="software-dev.svg"
              />
              <ServiceCard
                link="/"
                title="E-commerce Development"
                bgImage="ecommerce-dev.svg"
              />
              <ServiceCard
                link="/"
                title="Graphic Design"
                bgImage="graphic-design.svg"
              />
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};
