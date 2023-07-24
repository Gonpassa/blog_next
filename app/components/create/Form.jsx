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
        const id = input + i.toString();
        //When input is added, add an empty property to formData, pass that prop as value to input components.
        switch (input) {
            case "heading":
                return (
                    <HeadingInput
                        order={i}
                        id={id}
                        handleChange={handleChange}
                        value={formData[id] ? formData[id] : ""}
                    />
                );
            case "subheading":
                return (
                    <SubHeadingInput
                        order={i}
                        id={id}
                        handleChange={handleChange}
                        value={formData[id] ? formData[id] : ""}
                    />
                );
            case "body":
                return (
                    <BodyInput
                        order={i}
                        id={id}
                        handleChange={handleChange}
                        value={formData[id] ? formData[id] : ""}
                    />
                );
            default:
                return <ImageInput order={i} id={id} />;
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
    }

    function handleSubmit(e) {
        e.preventDefault();
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
