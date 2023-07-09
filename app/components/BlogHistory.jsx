import Link from "next/link";
import Blog from "./Blog";

export default function BlogHistory() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-y-8 dark:bg-zinc-900">
      <Blog />
      <Link href="/about">
        <section className="dark:bg-zinc-950 ">
          <header>
            <div className="title text-xl font-bold">Second Blog</div>
            <div className="date">05-14-2023</div>
          </header>
          <aside>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            nihil, unde blanditiis tempora, nemo magnam neque debitis repellat
            veritatis molestias aliquid? Quisquam corporis cupiditate in
            reiciendis eaque molestias consectetur expedita aliquid earum libero
            labore minus provident rem quia, ad, aliquam magni soluta fugiat
            praesentium recusandae? Impedit ex provident commodi animi!
          </aside>
        </section>
      </Link>
      <Link href="/blog">
        <section className="dark:bg-zinc-950 ">
          <header>
            <div className="title text-xl font-bold">First Blog</div>
            <div className="date">05-15-2023</div>
          </header>
          <aside>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            nihil, unde blanditiis tempora, nemo magnam neque debitis repellat
            veritatis molestias aliquid? Quisquam corporis cupiditate in
            reiciendis eaque molestias consectetur expedita aliquid earum libero
            labore minus provident rem quia, ad, aliquam magni soluta fugiat
            praesentium recusandae? Impedit ex provident commodi animi!
          </aside>
        </section>
      </Link>
    </div>
  );
}
