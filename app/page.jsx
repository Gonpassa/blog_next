import BlogShowcase from "./components/BlogShowcase";
import Banner from "./components/Banner";
import BlogList from "./components/BlogList";
import { getRecentBlogs } from "./api/blogs/route";

export default async function Page({ data }) {
    const blogs = await getRecentBlogs();
    const blogShowcase = blogs.slice(0, 3);
    const blogList = blogs.slice(3, blogs.length);
    return (
        <div className="home bg-inherit h-full w-full">
            <Banner />
            <BlogShowcase blogs={blogShowcase} />
            <BlogList blogs={blogList} />
        </div>
    );
}
