import BlogShowcase from "./components/BlogShowcase";
import Banner from "./components/Banner";
import BlogList from "./components/BlogList";

export default function Page() {
  return (
    <div className="home bg-inherit h-full w-full">
      <Banner />
      <BlogShowcase />
      <BlogList />
    </div>
  );
}
