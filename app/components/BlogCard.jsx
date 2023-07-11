import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ title, img, date }) {
  return (
    <div className="w-[366px] h-[262px] grid grid-cols-1 grid-rows-6 drop-shadow-md bg-zinc-50 dark:bg-zinc-950">
      <div className="image relative row-span-4 overflow-hidden">
        <Image
          src="/bear.jpg"
          fill={true}
          alt="image"
          className="hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="row-span-1 font-bold text-l flex justify-start items-end pl-4">
        Vitae Sed Condimentum
      </h3>
      <span className="row-span-1 text-md flex pl-4 ">July 20, 1998</span>
    </div>
  );
}
