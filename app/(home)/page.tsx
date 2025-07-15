import React from "react";

import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { OurClients } from "@/components/home/clients";
import { OurServices } from "@/components/home/services";

const HomePage = () => {
  return (
    <div className="grid gap-16">
      <Hero />
      <About />
      <OurClients />
      <OurServices />
    </div>
  );
};

export default HomePage;
