export default function AddButtons({ addInput }) {
    return (
        <div>
            <button onClick={(e) => addInput(e.target.innerText)}>
                Heading
            </button>
            <button onClick={(e) => addInput(e.target.innerText)}>
                Subheading
            </button>
            <button onClick={(e) => addInput(e.target.innerText)}>Body</button>
            <button onClick={(e) => addInput(e.target.innerText)}>Image</button>
        </div>
    );
}
