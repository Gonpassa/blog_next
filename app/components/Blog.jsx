import Image from "next/image";

export default function Blog() {
  return (
    <div className="grid grid-cols-1 grid-rows-7 py-6 dark:bg-zinc-950 ">
      <section className="header row-span-2 flex flex-col justify-center px-4 mb-4">
        <h2 className="text-center text-xl font-bold">Magna Sed Adipscing</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempora?
        </p>
        <span className="date text-center">July 10, 2015</span>
      </section>
      <article className="row-span-4 grid grid-cols-1 grid-rows-5">
        <div className="w-full row-span-2 relative">
          <Image
            src="/hero-banner.jpg"
            fill={true}
            alt="blog banner photo"
            className="hover:scale-105 transition-transform"
          />
        </div>
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
        className="row-span-1 border-2 mx-4 cursor-pointer py-4"
      >
        Continue Reading
      </button>
    </div>
  );
}
