import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const AppWrapper = ({ children, className }: IProps) => {
  return (
    <div className={cn("container m-auto px-3 md:px-5 2xl:px-0", className)}>
      {children}
    </div>
  );
};
