import Link from "next/link";

export const Menus = () => {
  return (
    <div className="flex justify-center items-center gap-2 xl:gap-4 flex-1 font-semibold text-xs xl:text-sm 2xl:text-base">
      <Link href="/">Home</Link>
      <Link href="/">About Us</Link>
      <Link href="/">Services</Link>
      <Link href="/">Platforms</Link>
      <Link href="/">Platforms</Link>
      <Link href="/">Industries</Link>
      <Link href="/">Overwork</Link>
      <Link href="/">Portfolio</Link>
      <Link href="/">Pricing</Link>
    </div>
  );
};
