import { useState } from "react";
import RemoveButton from "./RemoveButton";
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

export default function BodyInput({
    type,
    id,
    value,
    handleChange,
    removeInput,
}) {
    return (
        <div className="flex flex-col justify-between mb-4">
            <label
                htmlFor={id}
                className="font-bold flex justify-between items-center mb-2"
            >
                Body
                <RemoveButton removeInput={removeInput} id={id} key={id} />
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
