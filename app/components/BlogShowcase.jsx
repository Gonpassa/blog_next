import Link from "next/link";
import Blog from "./Blog";

export default function BlogHistory({ blogs }) {
    const blogShowcase = blogs.map((blog, i) => {
        return (
            <Blog
                key={i}
                id={blog._id}
                headings={blog.heading}
                subheadings={blog.subheading}
                body={blog.body}
                date={blog.createdAt}
                structure={blog.structure}
                images={blog.image}
            />
        );
    });
    return (
        <div className="grid grid-cols-1 grid-rows-3 gap-y-8 bg-zinc-150 dark:bg-zinc-900 h-[2100px]">
            {blogShowcase}
        </div>
    );
}

/* Attributes needed for Blog Component Only 3 most recent blogs, others go in blog list.
Heading
SubHeading
Date
Image
ContentText
Link to blog ---- blog/1 --- blog/2
*/
