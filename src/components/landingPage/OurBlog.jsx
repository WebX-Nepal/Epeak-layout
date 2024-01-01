import React from "react";
import BlogCard from "./BlogCard";
import { Icon } from '@iconify/react';
export default function OurBlog() {
  return (
    <div className="py-32" >
      <h3 className="text-center text-5xl font-semibold">
        Our <span className="text-[#26ACE2]">Blog</span>
      </h3>

      <div className="py-8 px-16 mt-8 place-self-center grid grid-cols-4 place-items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <div className="flex items-center justify-center gap-2">
      <Icon icon="mdi:eye" />
        View All
      </div>
    </div>
  );
}
