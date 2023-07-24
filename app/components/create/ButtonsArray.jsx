export default function AddButtons({ addInput }) {
    return (
        <div className="flex justify-between w-full mt-8">
            <button
                className="rounded-md bg-zinc-50 px-2.5 py-2 text-sm font-semibold text-zinc-150 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-zinc-950"
                onClick={(e) => addInput(e.target.innerText)}
            >
                Heading
            </button>
            <button
                className="rounded-md bg-zinc-50 px-2.5 py-2 text-sm font-semibold text-zinc-150 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-zinc-950"
                onClick={(e) => addInput(e.target.innerText)}
            >
                Subheading
            </button>
            <button
                className="rounded-md bg-zinc-50 px-2.5 py-2 text-sm font-semibold text-zinc-150 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-zinc-950"
                onClick={(e) => addInput(e.target.innerText)}
            >
                Body
            </button>
            <button
                className="rounded-md bg-zinc-50 px-2.5 py-2 text-sm font-semibold text-zinc-150 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-zinc-950"
                onClick={(e) => addInput(e.target.innerText)}
            >
                Image
            </button>
        </div>
    );
}
