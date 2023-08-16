"use client";

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    //TODO CHANGE TO FALSE AFTER TESTING
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const admin = sessionStorage.getItem("writer");
        if (admin) {
            setIsAdmin(JSON.parse(admin));
        }
    });
    useEffect(() => {
        if (isAdmin) {
            sessionStorage.setItem("writer", JSON.stringify(isAdmin));
        }
    }, [isAdmin]);

    return (
        <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}
