import BlogShowcase from "./components/BlogShowcase";
import Banner from "./components/Banner";

export default function Page() {
  return (
    <div className="h-full bg-inherit">
      <Banner />
      <BlogShowcase />
    </div>
  );
}
