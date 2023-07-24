export default function HeadingInput({ order, id }) {
    return (
        <div className="flex flex-col justify-between mb-4">
            <label htmlFor={id} className="font-bold">
                Subheading
            </label>
            <input
                type="text"
                name={id.slice(0, id.length - 1)}
                id={id}
                className="mt-2 py-1.5 pl-1 rounded focus:outline-none border-[.0375rem] border-zinc-400 bg-transparent focus:ring-2 dark:bg-zinc-900"
                autoComplete="off"
            />
        </div>
    );
}
