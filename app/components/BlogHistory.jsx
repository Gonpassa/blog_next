import Link from "next/link";

export default function BlogHistory() {
  return (
    <div>
      <Link href="/">
        <section>
          <header>
            <div className="title">Third blog</div>
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
      <Link href="/about">
        <section>
          <header>
            <div className="title">Second Blog</div>
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
        <section>
          <header>
            <div className="title">First Blog</div>
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
