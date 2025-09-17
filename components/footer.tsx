import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { AppLogo } from "./app-logo";
import { Button } from "@/components/ui/button";
import { AppWrapper } from "@/components/app-wrapper";
import { COMPANY, SERVICES, SOLUTIONS } from "@/lib/constants";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="bg-primary mt-16 py-10">
        <AppWrapper className="grid grid-cols-3">
          <div className="col-span-1 space-y-16 text-white border-r-2 border-white/20">
            <AppLogo variation="light" />
            <div className="grid gap-3">
              <h1 className="text-xl font-semibold mb-6">Stay Connected</h1>
              <Link href="mailto:inquiry@tetrahobbit.com" className="text-sm">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full mr-2"
                >
                  <Mail />
                </Button>{" "}
                inquiry@tetrahobbit.com
              </Link>
              <Link href="tel:917014541030" className="text-sm">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full mr-2"
                >
                  <Phone />
                </Button>{" "}
                +91-7014541030
              </Link>
            </div>
          </div>
          <div className="col-span-2 grid gap-20 ml-16">
            <div className="grid grid-cols-3 items-start">
              <FooterAction label="Our Solutions" menus={SOLUTIONS} />
              <FooterAction label="Services" menus={SERVICES} />
              <FooterAction label="Company" menus={COMPANY} />
            </div>

            <div className="space-y-3">
              <h2 className="text-white text-lg font-semibold">
                Builds Trust with the advanced solutions and innovative search
              </h2>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-white/20 rounded-sm flex justify-center items-center">
                  <Image
                    src="/images/achivement-1.svg"
                    alt="achivement"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="px-2 py-1 bg-white/20 rounded-sm flex justify-center items-center">
                  <Image
                    src="/images/achivement-2.svg"
                    alt="achivement"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="px-2 py-1 bg-white/20 rounded-sm flex justify-center items-center">
                  <Image
                    src="/images/achivement-3.svg"
                    alt="achivement"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="px-2 py-1 bg-white/20 rounded-sm flex justify-center items-center">
                  <Image
                    src="/images/achivement-4.svg"
                    alt="achivement"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </AppWrapper>
      </footer>
      <div className="bg-black p-2 text-white text-sm text-center">
        © 2025, All rights reserved
      </div>
    </>
  );
};

interface IFooterActionProps {
  label: string;
  menus: { title: string; link: string }[];
}

const FooterAction = ({ label, menus }: IFooterActionProps) => {
  return (
    <div className="grid gap-5 text-white">
      <h1 className="text-xl font-semibold">{label}</h1>
      <ul className="space-y-3 text-sm">
        {menus.map((menu, index) => (
          <li key={index}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
