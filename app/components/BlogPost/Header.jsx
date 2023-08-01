export default function Header({ heading, subheading }) {
    return (
        <header className="flex flex-col justify-between mb-2">
            <div className="title p-6">
                <h1 className="text-2xl font-bold text-center mb-2">
                    {heading.pop()}
                </h1>
                <h2 className="text-center text-xl">{subheading.pop()}</h2>
            </div>
            <div className="date p-2">
                <p className="text-center text-md text-bold uppercase">
                    July 18, 2023
                </p>
            </div>
        </header>
    );
}
