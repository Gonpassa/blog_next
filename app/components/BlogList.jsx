import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <section className="h-screen w-full mt-4 flex flex-col justify-around items-center">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </section>
  );
}
