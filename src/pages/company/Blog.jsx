import Navbar from "../../components/Navbar/Navbar";
import BlogCard from "../../components/landingPage/BlogCard";
import LastFooter from "../../components/landingPage/Last";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="py-32 px-32 grid grid-cols-3 place-content-center place-items-center gap-8 bg-[#f7f7f7]">
        
        <Link to={'/read-blog'}>
        <BlogCard onClick={() => ()=>scrollTo(0, 0)}/>
        </Link>
        <Link to={'/read-blog'}>
        <BlogCard onClick={() => ()=>scrollTo(0, 0)}/>
        </Link>
        <Link to={'/read-blog'}>
        <BlogCard onClick={() => ()=>scrollTo(0, 0)}/>
        </Link>
        <Link to={'/read-blog'}>
        <BlogCard onClick={() => ()=>scrollTo(0, 0)}/>
        </Link>
        <Link to={'/read-blog'}>
        <BlogCard onClick={() => ()=>scrollTo(0, 0)}/>
        </Link>
        <Link to={'/read-blog'}>
        <BlogCard onClick={() => ()=>scrollTo(0, 0)}/>
        </Link>
        <Link to={'/read-blog'}>
        <BlogCard onClick={() => ()=>scrollTo(0, 0)}/>
        </Link>
      
      </div>
      <LastFooter />
    </>
  );
}
