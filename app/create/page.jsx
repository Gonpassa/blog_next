"use client";
import { useState, useContext } from "react";
import { AuthContext } from "../../lib/contexts";
import Form from "../components/create/Form";
import ButtonsArray from "../components/create/ButtonsArray";

export default function Page({ params }) {
    const [structure, setStructure] = useState(["heading"]);
    const { isAdmin } = useContext(AuthContext);

    function addInput(input) {
        setStructure((prevStructure) => [
            ...prevStructure,
            input.toLowerCase(),
        ]);
    }

    if (!isAdmin) {
        return <></>;
    }
    return (
        <section className="bg-white full-blog mt-12 border-t-[2px] p-6 min-h-screen dark:bg-zinc-950 ">
            <Form structure={structure} />
            <ButtonsArray addInput={addInput} />
        </section>
    );
}
