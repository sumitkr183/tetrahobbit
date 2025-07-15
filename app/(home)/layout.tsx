import React, { ReactNode } from "react";

import { Navbar } from "@/components/navbar";
import { SocialBar } from "@/components/home/social-bar";
import { Footer } from "@/components/footer";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SocialBar />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
