import Image from "next/image";

import { FAQItem } from "./faq-item";
import { AppWrapper } from "@/components/app-wrapper";

export const FAQContainer = () => {
  return (
    <div className="bg-primary-500">
      <AppWrapper className="grid grid-cols-2 gap-10 py-8">
        <div className="grid gap-5">
          <h1 className="text-3xl font-semibold text-white">
            We Create New Solution And Transform Existing Ones.
          </h1>
          <p className="text-sm text-white leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type Lorem Ipsum is simply then
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard dummy text ever Lorem Ipsum is
            simply dummy text of the printing and typesetting.
          </p>
          <div className="w-3/4 h-96 relative mt-5">
            <Image
              src="/services/server.svg"
              alt="server"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <FAQItem />
        </div>
      </AppWrapper>
    </div>
  );
};
