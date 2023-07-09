import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="post grid grid-cols-1 grid-rows-8 py-6 bg-zinc-50 dark:bg-zinc-950 h-[700px] border-y-2 dark:border-y-[.5px] dark:border-zinc-50">
      <section className="header row-span-3 flex flex-col justify-center px-4 mb-4">
        <Link href="/blog/123">
          <h2 className="text-center text-xl font-bold transition-colors hover:text-sky-300">
            Magna Sed Adipscing
          </h2>
        </Link>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempora?
        </p>
        <span className="date text-center">July 10, 2015</span>
      </section>
      <article className="row-span-4 grid grid-cols-1 grid-rows-5">
        <Link href="/" className="w-full row-span-2 relative overflow-hidden">
          <Image
            src="/banner.jpg"
            fill={true}
            alt="blog banner photo"
            className="hover:scale-105 transition-transform"
          />
        </Link>
        <p className="my-4 row-span-3 px-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          laudantium magni placeat, architecto et voluptas sit ullam eum
          voluptatum in! Id ratione explicabo quaerat pariatur quae.
          Voluptatibus quo, voluptas in id harum architecto modi eligendi ipsam,
          cum neque necessitatibus temporibus? Suscipit commodi officia
          explicabo vero veniam illo tempora provident dolorum.
        </p>
      </article>
      <button
        type="button"
        className="row-span-1 border-2 mx-4 cursor-pointer py-4 hover:text-sky-400 hover:border-sky-400 font-bold transition-colors"
      >
        Continue Reading
      </button>
    </div>
  );
}
