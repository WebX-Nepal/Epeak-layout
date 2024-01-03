import blogImg from "./assets/blog.png";

export default function BlogCard() {
  return (
    <div className="h-[375px] w-[305px] bg-white p-2 rounded-lg flex flex-col  gap-2">
      <div className="rounded-lg">
        <img src={blogImg} alt="log" />
      </div>

      <div className="font-semibold flex flex-col gap-4">
        Rest is the second step of going forward
        <div className="text-xs flex justify-between">
          <span className="text-[#26ACE2] italic">Read more</span>
          <span>Jan 1st 2023</span>
        </div>
      </div>
    </div>
  );
}
