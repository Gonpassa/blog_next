import { useState } from "react";
import Editor from "react-simple-wysiwyg";

export default function HeadingInput({ order, id }) {
    return (
        <div className="flex flex-col justify-between mb-4">
            <label htmlFor={id} className="font-bold mb-2">
                Body
            </label>
            <textarea
                name="body"
                id={id}
                rows="3"
                className="dark:bg-zinc-900 rounded-md border-[.0375rem] border-zinc-400 py-1.5 pl-1.5 outline-none focus:ring-2"
            ></textarea>
        </div>
    );
}
