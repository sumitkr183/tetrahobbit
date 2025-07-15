import Image from "next/image";
import Link from "next/link";

import { AppWrapper } from "@/components/app-wrapper";

export const SocialBar = () => {
  return (
    <div className="bg-primary text-white py-1 md:py-2">
      <AppWrapper>
        <div className="grid justify-center gap-2 md:gap-0 md:flex md:justify-between items-center">
          <div className="flex gap-5 text-sm 2xl:text-base">
            <Link href="tel:+917014541030">+91-7014541030</Link>
            <Link href="mailto:inquiry@tetrahobbit.com">
              inquiry@tetrahobbit.com
            </Link>
          </div>
          <div className="flex justify-between gap-2">
            <Link href="/">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={26}
                height={26}
              />
            </Link>
            <Link href="/">
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={26}
                height={26}
              />
            </Link>
            <Link href="/">
              <Image src="/icons/x.svg" alt="x" width={26} height={26} />
            </Link>
            <Link href="/">
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={26}
                height={26}
              />
            </Link>
            <Link href="/">
              <Image
                src="/icons/youtube.svg"
                alt="youtube"
                width={26}
                height={26}
              />
            </Link>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};
