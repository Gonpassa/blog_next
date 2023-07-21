"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { AuthContext, AuthProvider } from "./contexts";

export function Providers({ children }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <AuthProvider>{children}</AuthProvider>;
    }

    return (
        <ThemeProvider attribute="class">
            <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
    );
}
