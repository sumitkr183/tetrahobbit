import { AppWrapper } from "@/components/app-wrapper";

export const Footer = () => {
  return (
    <>
      <footer className="bg-primary mt-16 py-10">
        <AppWrapper className="grid grid-cols-3">
          <div className="col-span-1">1</div>
          <div className="col-span-2">2</div>
        </AppWrapper>
      </footer>
      <div className="bg-black p-2 text-white text-sm text-center">
        © 2025, All rights reserved
      </div>
    </>
  );
};
