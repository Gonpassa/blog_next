"use client";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/lib/contexts";
export default function Banner() {
    const { isAdmin } = useContext(AuthContext);
    let content;

    if (isAdmin) {
        content = <button>hello</button>;
    } else {
        content = (
            <>
                <h1 className="text-4xl font-bold uppercase">Saccades</h1>
                <div className="text-center text-xl uppercase">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </>
        );
    }
    return (
        <div className="w-full h-64 flex justify-around flex-col items-center bg-inherit  dark:border-b-zinc-50 border-b-[.5px] p-4">
            {content}
        </div>
    );
}
