"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/lib/contexts";

export default function Page() {
    const router = useRouter();
    const [pass, setPass] = useState("");
    const [attempt, setAttempt] = useState(false);
    const { isAdmin, setIsAdmin } = useContext(AuthContext);
    function inputPass(event) {
        setPass(event.target.value);
    }

    const checkPassword = async (event) => {
        event.preventDefault();
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password: pass }),
        });
        if (res.status === 200) {
            setIsAdmin(true);
            router.push("/");
        } else {
            setAttempt(true);
        }
    };

    return (
        <section className="p-8 text-xl font-bold">
            <form onSubmit={checkPassword}>
                {attempt ? (
                    <input
                        type="password"
                        className={`p-4 border-2 focus:outline-none ${
                            !isAdmin && "border-red-600"
                        }`}
                        name="pass"
                        onChange={inputPass}
                        value={pass}
                    />
                ) : (
                    <input
                        type="password"
                        className="p-4 border-2 focus:outline-none"
                        name="pass"
                        onChange={inputPass}
                        value={pass}
                    />
                )}
                <button type="submit" className="p-4 bg-white dark:bg-zinc-950">
                    Login
                </button>
            </form>
        </section>
    );
}
