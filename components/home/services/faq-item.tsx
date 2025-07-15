"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { SERVICE_FAQ } from "@/lib/constants";

export const FAQItem = () => {
  const [activeItem, setActiveItem] = useState("cloud");

  return (
    <Accordion
      type="single"
      defaultValue="cloud"
      collapsible
      className="w-full space-y-3"
      onValueChange={(value) => setActiveItem(value)}
    >
      {SERVICE_FAQ.map((service) => (
        <AccordionItem
          key={service.id}
          value={service.slug}
          className={cn(
            "rounded bg-primary-800 px-4 border-b-0 text-white",
            activeItem === service.slug && "bg-white text-primary-500"
          )}
        >
          <AccordionTrigger className="text-lg">
            <div className="flex gap-4">
              <Image
                src={service.icon}
                alt={service.slug}
                width={26}
                height={26}
              />
              {service.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-black text-sm ml-11">
            {service.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
