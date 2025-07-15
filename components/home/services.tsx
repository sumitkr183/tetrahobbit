import { AppWrapper } from "@/components/app-wrapper";
import { FAQContainer } from "./services/faq-container";
import { CarouselContainer } from "./services/carousel-container";

export const OurServices = () => {
  return (
    <>
      <AppWrapper className="grid gap-10">
        <div className="max-w-3xl m-auto space-y-5">
          <h4 className="text-center font-semibold text-primary-500 text-lg">
            Our Services
          </h4>
          <h1 className="text-center font-semibold text-3xl 2xl:text-4xl">
            Unlock Revenue Grow for your Business
          </h1>
          <p className="text-center text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has the industry&apos;s standard dummy text
            ever since the 1500s
          </p>
        </div>

        <CarouselContainer />
      </AppWrapper>

      <FAQContainer />
    </>
  );
};
