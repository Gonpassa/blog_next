import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <section className="h-screen max-w-full flex mt-12 pt-12 border-t-[1px] justify-center px-12">
      <div className="h-auto w-full grid grid-cols-1 grid-rows-4 gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
