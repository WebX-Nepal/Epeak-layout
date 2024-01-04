import Navbar from "../../components/Navbar/Navbar";
import BlogCard from "../../components/landingPage/BlogCard";
import LastFooter from "../../components/landingPage/Last";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="py-32 px-32 grid grid-cols-3 place-content-center place-items-center gap-8 bg-[#f7f7f7]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <LastFooter />
    </>
  );
}
