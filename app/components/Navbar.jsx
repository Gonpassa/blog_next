"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    function changeTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <nav className="flex justify-around items-center w-full text-lg h-12 border-b-[.5px] dark:border-b-zinc-50 dark:bg-zinc-950 drop-shadow px-4 fixed z-50 top-0 inset-x-0 bg-white">
            <Link href="/">
                <h1 className="grow h-full flex justify-center items-center font-bold hover:text-sky-400">
                    Saccades
                </h1>
            </Link>
            <ul className="list-none flex justify-between items-center grow h-full xs:justify-around">
                <Link href="/">
                    <li className="p-4 hover:border-b-2 hover:cursor-pointer transition-transform hover:text-sky-400">
                        Home
                    </li>
                </Link>
                <Link href="/blog/123">
                    <li className="p-4 hover:border-b-2 hover:cursor-pointer transition-transform hover:text-sky-400">
                        Blog
                    </li>
                </Link>
                <Link href="/about">
                    <li className="p-4 hover:border-b-2 hover:cursor-pointer transition-transform hover:text-sky-400">
                        About
                    </li>
                </Link>
            </ul>
            <div
                className="flex justify-center cursor-pointer rounded-full  h-8 w-8 items-center dark:hover:bg-sky-300 dark:hover:text-yellow-300 hover:text-white hover:bg-black transition-colors "
                onClick={changeTheme}
            >
                {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
            </div>
        </nav>
    );
}
