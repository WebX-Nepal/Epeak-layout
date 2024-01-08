import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { Icon } from "@iconify/react";

export default function OurBlog() {
  return (
    <div className="py-16 mt-32 bg-[#f7f7f7]">
      <h3 className="text-center text-5xl font-semibold">
        Our <span className="text-[#26ACE2]">Blog</span>
      </h3>

      <div className="py-8 px-16 mt-8 place-self-center grid grid-cols-4 place-items-center">
        <Link to={"/read-blog"} onClick={() => scrollTo(0, 0)}>
          <BlogCard />
        </Link>

        <Link to={"/read-blog"} onClick={() => scrollTo(0, 0)}>
          <BlogCard />
        </Link>

        <Link to={"/read-blog"} onClick={() => scrollTo(0, 0)}>
          <BlogCard />
        </Link>

        <Link to={"/read-blog"} onClick={() => scrollTo(0, 0)}>
          <BlogCard />
        </Link>
      </div>
      <Link to={"/blog"} onClick={() => scrollTo(0, 0)}>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <Icon icon="mdi:eye" />
          View All
        </div>
      </Link>
    </div>
  );
}
