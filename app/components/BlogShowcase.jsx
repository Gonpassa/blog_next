import Link from "next/link";
import Blog from "./Blog";

export default function BlogHistory() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-y-8 bg-zinc-150 dark:bg-zinc-900">
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
}

/* Attributes needed for Blog Component
Title
SubHeading
Date
Image
ContentText
Link to blog ---- blog/1 --- blog/2
*/
