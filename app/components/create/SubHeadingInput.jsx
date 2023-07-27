import { IoIosTrash } from "react-icons/io";
export default function HeadingInput({ type, id, value, handleChange }) {
    return (
        <div className="flex flex-col justify-between mb-4">
            <label
                htmlFor={id}
                className="font-bold flex justify-between items-center"
            >
                Subheading
                <span className="p-2 bg-zinc-50 rounded-md shadow text-zinc-150 ring-1 ring-gray-300 text-2xl dark:text-zinc-950">
                    <IoIosTrash />
                </span>
            </label>
            <input
                type="text"
                name={type}
                id={id}
                className="mt-2 py-1.5 pl-1 rounded focus:outline-none border-[.0375rem] border-zinc-400 bg-transparent focus:ring-2 dark:bg-zinc-900"
                autoComplete="off"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}
