import BlogShowcase from "./components/BlogShowcase";
import Banner from "./components/Banner";
import BlogList from "./components/BlogList";

export default function Page() {
  return (
    <div className="h-full bg-inherit">
      <Banner />
      <BlogShowcase />
      <BlogList />
    </div>
  );
}
