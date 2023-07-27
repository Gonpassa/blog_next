import MyDropzone from "./Dropzone";
import { IoIosTrash } from "react-icons/io";
export default function ImageInput({ type, id, value, handleChange }) {
    return (
        <div className="flex flex-col justify-between mb-4" key={id}>
            <label
                htmlFor={id}
                className="font-bold flex justify-between items-center mb-2"
            >
                Image
                <span className="p-2 bg-zinc-50 rounded-md shadow text-zinc-150 ring-1 ring-gray-300 text-2xl dark:text-zinc-950">
                    <IoIosTrash />
                </span>
            </label>
            <MyDropzone
                className="p-16 border-2 border-dashed border-zinc-150 rounded"
                name={type}
                id={id}
            />
        </div>
    );
}
