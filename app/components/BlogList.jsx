import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <section className="min-h-screen h-screen max-w-full flex mt-12 border-t-[1px] justify-center pt-12">
      <div className="w-full px-8 h-full sm:flex sm:flex-wrap sm:flex-row sm:justify-between">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
