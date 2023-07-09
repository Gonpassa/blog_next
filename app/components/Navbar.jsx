"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <nav className="flex justify-around items-center mx-auto w-full text-lg h-16 border-b-[.5px] dark:border-b-zinc-50 border-b-zinc-900 dark:bg-zinc-950 shadow">
      <h1 className="grow h-full flex justify-center items-center font-bold">
        Saccades
      </h1>
      <ul className="list-none flex justify-between items-center grow h-full">
        <li className="p-4 hover:border-x-2 hover:cursor-pointer transition-transform hover:text-sky-400 hover:border-sky-950">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4 hover:border-x-2 hover:cursor-pointer transition-transform hover:text-sky-400 hover:border-sky-950">
          <Link href="/blog/123">Blogs</Link>
        </li>
        <li className="p-4 hover:border-x-2 hover:cursor-pointer transition-transform hover:text-sky-400 hover:border-sky-950">
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div
        className="flex justify-center cursor-pointer rounded-full border-2 h-8 w-8 items-center dark:hover:bg-sky-300 dark:hover:text-yellow-300 hover:text-white hover:bg-black"
        onClick={() => setTheme("light")}
      >
        {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
      </div>
    </nav>
  );
}
