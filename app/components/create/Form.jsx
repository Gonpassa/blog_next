"use client";
import { useState, useEffect } from "react";
import HeadingInput from "./HeadingInput";
import SubHeadingInput from "./SubHeadingInput";
import BodyInput from "./BodyInput";
import ImageInput from "./ImageInput";
import { Providers } from "@/lib/Providers";

export default function Form({ structure, removeInput }) {
    const [formData, setFormData] = useState({});
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
                        removeInput={removeInput}
                        value={formData[type] ? formData[type] : ""}
                    />
                );
            case "subheading":
                return (
                    <SubHeadingInput
                        type={type}
                        id={i}
                        handleChange={handleChange}
                        removeInput={removeInput}
                        value={formData[type] ? formData[type] : ""}
                    />
                );
            case "body":
                return (
                    <BodyInput
                        type={type}
                        id={i}
                        handleChange={handleChange}
                        removeInput={removeInput}
                        value={formData[type] ? formData[type] : ""}
                    />
                );
            default:
                return (
                    <ImageInput
                        type={type}
                        id={i}
                        handleChange={handleImageChange}
                        removeInput={removeInput}
                    />
                );
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
    function handleImageChange(file, type) {
        //type === name on the above handleChange function, bad naming :(
        console.log(file);
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [type]: file,
            };
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        //Get image files out of formData
        //Cloudinary info
        const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
        for (const key in formData) {
            if (key.includes("image")) {
                const cloudData = new FormData();
                cloudData.append("file", formData[key]);
                cloudData.append("upload_preset", "blog_preset");
                const response = await fetch(URL, {
                    method: "POST",
                    body: cloudData,
                });
                const data = await response.json();
                //replace current image file inside formData for url
                console.log(data);
                formData[key] = data.secure_url;
            }
        }
        //Hit Cloudinary API, replace value in formData with URL.

        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ formData, structure }),
        };
        const res = await fetch("/api/create", options).then((response) =>
            response.json()
        );
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
