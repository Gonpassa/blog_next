import RemoveInput from "./removeInput";
export default function HeadingInput({
    type,
    id,
    value,
    handleChange,
    removeInput,
}) {
    return (
        <div className="flex flex-col justify-between mb-4" key={id}>
            <label
                htmlFor={id}
                className="font-bold flex justify-between items-center"
            >
                Heading
                <RemoveInput removeInput={removeInput} id={id} key={id} />
            </label>
            <input
                type="text"
                accept="image/*"
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
