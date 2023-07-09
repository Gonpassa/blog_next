"use client";
import Link from "next/link";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="md:h-[10%] flex justify-between items-center mx-auto w-full text-lg p-4 border-b-[.5px] dark:border-b-zinc-50 border-b-zinc-900 dark:bg-zinc-950">
      <h1 className="grow h-full flex justify-center items-center">Saccades</h1>
      <ul className="list-none flex justify-between items-center grow h-full">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog/123">Blogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className="grow flex justify-center">
        <BsSunFill className="cursor-pointer" />
      </div>
    </nav>
  );
}
