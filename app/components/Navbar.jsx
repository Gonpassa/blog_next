import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <h1 className="grow">Saccades</h1>
      <ul className="list-none flex justify-between items-center grow">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog/123">Blogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
