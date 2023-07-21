"use client";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../lib/contexts";
import HeadingInput from "./HeadingInput";
import SubHeadingInput from "./SubHeadingInput";
import BodyInput from "./BodyInput";
import ImageInput from "./ImageInput";

export default function Form({ structure }) {
    const { isAdmin } = useContext(AuthContext);
    console.log(structure);
    const inputs = structure.map((input) => {
        switch (input) {
            case "heading":
                return <HeadingInput />;
            case "subheading":
                return <SubHeadingInput />;
            case "body":
                return <BodyInput />;
            default:
                return <ImageInput />;
        }
    });
    if (!isAdmin) {
        return <></>;
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            {inputs}
            <button type="submit">Submit btn</button>
        </form>
    );
}
