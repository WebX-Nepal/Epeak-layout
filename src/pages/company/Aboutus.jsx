import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import bgImage from "./assets/mountains.jpg";
import aboutus from "./assets/aboutus.png";
import LastFooter from "../../components/landingPage/Last";
export default function Aboutus() {
  return (
    <section>
      <Navbar />

      <div className="p-32">
        <div className="flex gap-4 ">
          <div className="w-[50%] bg-[#f7f7f7]  rounded-xl p-8 flex flex-col gap-24">
            <div>
              <p className="text-[#26ACE2] text-xl font-bold">Who we are?</p>
              <p className="text-4xl font-semibold mt-8 w-[70%]">
                Our Dream Is To Create The Moments For Lifetime{" "}
              </p>
            </div>
            <p>
              As we move forward, let us remain united in our passion for
              exploration. Let the mountains continue to be our teachers,
              reminding us of the significance of perseverance, teamwork, and
              humility. Whether you are a seasoned mountaineer or someone eager
              to embark on their first adventure, know that Epeak is your
              partner in every step of the way.
            </p>
          </div>
          <div className="w-[50%] flex flex-col gap-4 ">
            <div className="">
              <img src={aboutus} alt="" />
            </div>

            <div className="bg-[#f7f7f7] rounded-xl p-12 grid gap-4">
              <div className="flex w-[80%] mx-auto gap-24">
                <div>
                  <p className="text-[#273B91] text-3xl font-bold">17</p>
                  <p>Years Expericnce</p>
                </div>
                <div>
                  <p className="text-[#273B91] text-3xl font-bold">50+</p>
                  <p>Expedition Challenges</p>
                </div>
              </div>
              <div className="flex w-[80%]  m-auto gap-24">
                <div>
                  <p className="text-[#273B91] text-3xl font-bold">100+</p>
                  <p>Positive Reviews</p>
                </div>
                <div>
                  <p className="text-[#273B91] text-3xl font-bold">200+</p>
                  <p>Trusted Travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 w-[80%] mx-auto text-center grid gap-8">
          <p>
            As we move forward, let us remain united in our passion for
            exploration. Let the mountains continue to be our teachers,
            reminding us of the significance of perseverance, teamwork, and
            humility. Whether you are a seasoned mountaineer or someone eager to
            embark on their first adventure, know that Epeak is your partner in
            every step of the way.
          </p>
          <h3 className=" text-3xl font-semibold">
            Our <span className="text-[#26ACE2] ">Vision</span>
          </h3>
          <p>
            As we move forward, let us remain united in our passion for
            exploration. Let the mountains continue to be our teachers,
            reminding us of the significance of perseverance, teamwork, and
            humility. Whether you are a seasoned mountaineer or someone eager to
            embark on their first adventure, know that Epeak is your partner in
            every step of the way.
          </p>
          <h3 className=" text-3xl font-semibold">
            Our
            <span className="text-[#26ACE2]  "> Mission</span>
          </h3>

          <p>

          As we move forward, let us remain united in our passion for exploration. Let the mountains continue to be our teachers, reminding us of the significance of perseverance, teamwork, and humility. Whether you are a seasoned mountaineer or someone eager to embark on their first adventure, know that Epeak is your partner in every step of the way.
          </p>
        </div>
      </div>
      <LastFooter />
    </section>
  );
}
