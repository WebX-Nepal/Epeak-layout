import Navbar from "../components/Navbar/Navbar";
import LastFooter from "../components/landingPage/Last";
import BlogImage from "./assets/blogImage.jpg";
import lady from "./assets/lady.jpg";
import { Icon } from "@iconify/react";
export default function BlogPage() {
  const blogDetails = ` Nepal: one of the most beautiful countries in Asia! With beautiful
    people, incredible nature and amazing mountains! We travelled at a
    slow pace for a month through Nepal. Along the way, we visited busy
    Kathmandu, hip and happening Pokhara and charming Bandipur. We also
    did a twelve-day hike in which we crossed the highest walkable
    mountain pass in the world. With over 5416 meters high, the highest
    place we have ever been to! Are you planning a trip to Nepal? Below
    you will find a lot of blogs with current travel information about
    this beautiful country. All these blogs are filled with
    personal experiences! Blogs with practical tips and information, but
    also diary blogs about our time here. If you have a question, please
    let me know!`;
  let date = new Date();
  console.log(blogDetails)
  return (
    <section>
      <Navbar />

      <div className="p-32 relative">
        <div className="lg:w-[60%] mx-auto">
          <div>
            <h4 className="text-4xl font-semibold mb-8">
              How to Be Happy: 27 Habits to Add to Everest
            </h4>
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <div className="rounded-full border-2 border-blue-400 w-16 h-16 overflow-hidden object-center flex items-center justify-center">
                  <img src={lady} alt="" className="" />
                </div>
                <div>
                  <div className="flex flex-col items-center justify-center ">
                    <p className="font-bold">Arya Stark</p>
                    <p>
                      {date.getDate()}/{date.getMonth() + 1}/
                      {date.getFullYear()}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  gap-4">
                <div className="bg-[#f3ecec] p-1   rounded-full cursor-pointer">
                  <Icon color="26ACE2" width={25} icon="ic:baseline-facebook" />
                </div>
                <div className="bg-[#f3ecec] p-1   rounded-full cursor-pointer">
                  <Icon color="26ACE2" width={25} icon="mdi:twitter" />
                </div>

                <div className="bg-[#f3ecec] p-1   rounded-full cursor-pointer">
                  <Icon
                    color="26ACE2"
                    width={25}
                    icon="material-symbols:share-outline"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="my-8 h-[60vh]   object-center">
            <img
              src={BlogImage}
              alt=""
              className="rounded-xl object-cover w-full h-full "
            />
          </div>
          {/* details */}
          <p className="mt-8">{blogDetails}</p>
          <p className="mt-8"> A conclusion, or blog ending, is a crucial part of your blog post. This point is where you wrap up your argument and leave your readers with something to think about or compel them to take an action. The goal of a blog ending is to leave your readers with something that will keep them interested and motivated that will help them learn more about the topic or take some kind of action.</p>
        </div>
      </div>
      <LastFooter />
    </section>
  );
}
