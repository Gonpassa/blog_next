import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ title, img, date }) {
  return (
    <div className="h-[35%] mb-6 sm:w-[48%]">
      <div className="min-h-full grid grid-cols-1 grid-rows-[5fr_1fr_1fr] drop-shadow-sm border-[1px] bg-zinc-50 dark:bg-zinc-950 dark:border-zinc-900">
        <Link href="/" className="image relative overflow-hidden">
          <Image
            src="/bear.jpg"
            fill={true}
            alt="image"
            className="hover:scale-105 transition-transform"
          />
        </Link>
        <h3 className="row-span-1 font-bold text-l flex justify-start items-end pl-4">
          Vitae Sed Condimentum
        </h3>
        <span className="row-span-1 text-md flex pl-4 ">July 20, 1998</span>
      </div>
    </div>
  );
}
