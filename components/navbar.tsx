import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { AppLogo } from "@/components/app-logo";
import { Menus } from "@/components/home/menus";
import { Button } from "@/components/ui/button";
import { AppWrapper } from "@/components/app-wrapper";

export const Navbar = () => {
  return (
    <nav className="py-3">
      <AppWrapper className="flex justify-between items-center gap-3">
        <AppLogo variation="dark" />
        <Menus />
        <div className="flex gap-1 xl:gap-3">
          <Button variant="primary-gradient" className="rounded-full px-2">
            <Image src="/icons/bank.svg" alt="bank" width={25} height={25} />
            <span className="text-xs xl:text-sm">Pay Now</span>
            <ChevronDown />
          </Button>
          <Image src="/icons/call.svg" alt="call" width={35} height={35} />
          <Image
            src="/icons/support.svg"
            alt="support"
            width={35}
            height={35}
          />
        </div>
      </AppWrapper>
    </nav>
  );
};
