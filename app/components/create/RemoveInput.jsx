import { IoIosTrash } from "react-icons/io";
export default function RemoveInput({ removeInput, id }) {
    return (
        <button
            className="p-2 bg-zinc-50 rounded-md shadow text-zinc-150 ring-1 ring-gray-300 text-2xl dark:text-zinc-950"
            onClick={removeInput}
            id={id}
            type="button"
        >
            <IoIosTrash />
        </button>
    );
}
