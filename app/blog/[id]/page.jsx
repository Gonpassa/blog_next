import FullBlog from "../../components/FullBlog";

async function getBlogData(blogId) {
    const res = await Post.findById(blogId);
    return res.json();
}

export default async function Page({ params }) {
    return (
        <section className="bg-white full-blog mt-12 border-t-[2px] p-6 min-h-screen dark:bg-zinc-950 ">
            <FullBlog />
        </section>
    );
}
