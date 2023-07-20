"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [pass, setPass] = useState("");
  const [admin, setAdmin] = useState(false);
  const [attempt, setAttempt] = useState(false);

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
    console.log(admin);
    if (res.status === 200) {
      setAdmin(true);
    } else {
      setAttempt(true);
    }
  };

  useEffect(() => {
    if (admin) {
      sessionStorage.setItem("writer", "true");
    }
  }, [admin]);

  return (
    <section className="p-8 text-xl font-bold">
      <form onSubmit={checkPassword}>
        {attempt ? (
          <input
            type="password"
            className={`p-4 border-2 focus:outline-none ${
              !admin && "border-red-600"
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
