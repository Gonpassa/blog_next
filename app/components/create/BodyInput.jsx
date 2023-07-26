import { useState } from "react";
import {
    BtnBold,
    BtnItalic,
    Editor,
    EditorProvider,
    Toolbar,
} from "react-simple-wysiwyg";

export default function BodyInput({ type, id, value, handleChange }) {
    return (
        <div className="flex flex-col justify-between mb-4">
            <label htmlFor={id} className="font-bold mb-2">
                Body
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
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}
