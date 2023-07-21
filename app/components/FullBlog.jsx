import Image from "next/image";
import Post from "../../models/Post";

export default function FullBlog() {
    return (
        <article>
            <header className="flex flex-col justify-between mb-8">
                <div className="title p-6">
                    <h1 className="text-2xl font-bold text-center mb-2">
                        Magne sed Apisicum
                    </h1>
                    <h2 className="text-center text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                    </h2>
                </div>
                <div className="date p-2">
                    <p className="text-center text-lg">July 18, 2023</p>
                </div>
            </header>
            <div className="img-wrapper relative h-40 mb-4 ml-[-1.6rem] mr-[-1.6rem]">
                <Image src="/banner.jpg" fill={true} alt="img" />
            </div>
            <div className="content-wrapper">
                <p className="text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse nemo officiis a officia voluptates? Officia culpa eos
                    eaque hic dolore officiis sunt numquam, iusto dolores!
                    Placeat rerum ex doloremque officia corporis, quae error
                    porro asperiores eos earum corrupti repudiandae expedita id!
                    Odio officia corporis dicta, quasi nisi praesentium vel
                    consequatur blanditiis, a fuga natus? Aut, mollitia deserunt
                    perferendis accusantium repellat enim maxime eveniet, ut
                    ipsa voluptatum possimus quas sint placeat quos aliquid
                    praesentium voluptate pariatur eos earum assumenda? Ipsam,
                    ipsa nemo. Minus iste magni laborum similique voluptates
                    labore accusantium placeat nobis voluptatem nesciunt
                    exercitationem officia ex neque assumenda doloribus velit,
                    esse sint tempora natus illum repellendus? Deleniti amet
                    natus, deserunt praesentium explicabo voluptates at tempore
                    omnis provident officia quam quae qui molestiae nulla. Quasi
                    obcaecati illum id, recusandae cupiditate, dicta autem, iure
                    explicabo totam earum modi quae quas eaque sed adipisci
                    libero sunt repellat ab quidem eligendi minima architecto
                    nam vero neque. Quae fugiat neque nesciunt eveniet ipsa
                    nulla assumenda ipsam natus dolorum provident repudiandae
                    distinctio sunt, ducimus, inventore, quidem animi reiciendis
                    perferendis. Omnis enim nam velit assumenda quod eius.
                    Mollitia nemo commodi minima temporibus ipsum. Tempore illum
                    id dicta repudiandae voluptas omnis? Consequuntur, officiis!
                    Voluptate soluta quae debitis quam. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Velit vero sint eius
                    commodi nisi quis doloremque perferendis corporis, ipsum
                    omnis magni quibusdam iusto dolorem iure laboriosam eaque at
                    voluptatem delectus maxime dolorum quas? Temporibus tempore
                    voluptatum quae et recusandae sed fugiat ducimus debitis
                    enim! Consequuntur qui sapiente aut nemo assumenda. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                    assumenda mollitia explicabo atque dolorum quisquam
                    consequatur dignissimos qui. Quam quas quos alias beatae
                    vero culpa accusamus molestiae nemo tenetur ab eius quae
                    neque incidunt quisquam sed praesentium, ex non deleniti
                    aperiam omnis? Rerum aliquam itaque suscipit delectus
                    doloribus id nulla.
                </p>
            </div>
        </article>
    );
}
