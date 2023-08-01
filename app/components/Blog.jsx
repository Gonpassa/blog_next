import Image from "next/image";
import Link from "next/link";
import getFormattedDate from "@/utils/getDate";

export default function Blog({
    id,
    headings,
    subheadings,
    images,
    body,
    structure,
    date,
}) {
    const bodyHTML = body[body.length - 1];
    const intro = bodyHTML.split("<div>")[0];
    const formattedDate = getFormattedDate(date);
    return (
        <div className="post grid grid-cols-1 grid-rows-8 py-6 bg-zinc-50 dark:bg-zinc-950 row-span-1 border-y-2 dark:border-y-[.5px] dark:border-zinc-50">
            <section className="header row-span-3 flex flex-col justify-center px-4 mb-4">
                <Link href={`blog/${id}`}>
                    <h2 className="text-center tracking-widest text-lg font-bold transition-colors hover:text-sky-300 uppercase my-2">
                        {headings[0]}
                    </h2>
                </Link>
                <p className="text-center leading-snug text-md uppercase ">
                    {subheadings[0]}
                </p>
                <span className="date text-center uppercase font-semibold">
                    {formattedDate}
                </span>
            </section>
            <article className="row-span-4 grid grid-cols-1 grid-rows-5">
                <Link
                    href="/"
                    className="w-full relative overflow-hidden row-span-2"
                >
                    <Image
                        src={images[0]}
                        fill={true}
                        alt="blog banner photo"
                        className="hover:scale-105 transition-transform"
                    />
                </Link>
                <p
                    className="my-4 row-span-3 px-4 leading-normal line-clamp-[9]"
                    dangerouslySetInnerHTML={{ __html: intro }}
                ></p>
            </article>
            <Link
                href={`blog/${id}`}
                className="row-span-1 uppercase border-2 mx-4 cursor-pointer py-4 hover:text-sky-400 hover:border-sky-400 font-bold tracking-wider text-sm transition-colors text-center"
            >
                Continue Reading
            </Link>
        </div>
    );
}

function getMonth(monthIdx) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months[monthIdx];
}
