import { useState } from "react";
import {
    BtnBold,
    BtnItalic,
    BtnUnderline,
    BtnLink,
    Editor,
    EditorProvider,
    Toolbar,
} from "react-simple-wysiwyg";
import { IoIosTrash } from "react-icons/io";

export default function BodyInput({ type, id, value, handleChange }) {
    return (
        <div className="flex flex-col justify-between mb-4">
            <label
                htmlFor={id}
                className="font-bold flex justify-between items-center mb-2"
            >
                Body
                <span className="p-2 bg-zinc-50 rounded-md shadow text-zinc-150 ring-1 ring-gray-300 text-2xl dark:text-zinc-950">
                    <IoIosTrash />
                </span>
            </label>
            <EditorProvider>
                <Editor
                    value={value}
                    name={type}
                    id={id}
                    onChange={handleChange}
                >
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}
