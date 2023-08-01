import FullBlog from "../../components/FullBlog";
import Post from "@/models/Post";

async function getBlogData(blogId) {
    const res = await Post.findById(blogId);
    return res;
}

export default async function Page({ params }) {
    const blogId = params.id;
    const blog = await getBlogData(blogId);
    return (
        <section className="bg-white full-blog mt-12 border-t-[2px] p-6 dark:bg-zinc-950 ">
            <FullBlog blog={blog} />
        </section>
    );
}
