"use client";
import { useState, useEffect } from "react";
import HeadingInput from "./HeadingInput";
import SubHeadingInput from "./SubHeadingInput";
import BodyInput from "./BodyInput";
import ImageInput from "./ImageInput";

export default function Form({ structure }) {
    const [formData, setFormData] = useState({
        heading0: "",
    });
    const inputs = structure.map((input, i) => {
        const type = input + i.toString();
        //When input is added, add an empty property to formData, pass that prop as value to input components.
        switch (input) {
            case "heading":
                return (
                    <HeadingInput
                        type={type}
                        id={i}
                        handleChange={handleChange}
                        value={formData[type] ? formData[type] : ""}
                    />
                );
            case "subheading":
                return (
                    <SubHeadingInput
                        type={type}
                        id={i}
                        handleChange={handleChange}
                        value={formData[type] ? formData[type] : ""}
                    />
                );
            case "body":
                return (
                    <BodyInput
                        type={type}
                        id={i}
                        handleChange={handleChange}
                        value={formData[type] ? formData[type] : ""}
                    />
                );
            default:
                return <ImageInput type={type} id={i} />;
        }
    });
    function handleChange(event) {
        const { name, value, type } = event.target;
        //TODO : fix so image input turns img to URL by CDN and store the url
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
        console.log(formData);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ formData, structure }),
        };
        const res = await fetch("/api/create", options);
        console.log(res);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">{inputs}</div>
            <button
                type="submit"
                className="rounded-md bg-zinc-50 px-2.5 py-2 text-sm font-semibold text-zinc-150 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-zinc-950"
            >
                Submit
            </button>
        </form>
    );
}
