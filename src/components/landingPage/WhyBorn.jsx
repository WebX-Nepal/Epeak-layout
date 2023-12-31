import { Icon } from "@iconify/react";
export default function WhyBorn() {
  return (
    <div className="px-40 py-32 font-poppins flex flex-col gap-12">
      <h2 className="text-5xl font-Cormorant font-semibold text-center">
        Why <span className="text-[#26ACE2]">Epeak</span> was born?
      </h2>
      <p className="lg:w-[80%] text-center m-auto">
        Epeak was born because Epeak’s team is one of the most time Mt.Everest
        submit group in the world. Had a lot of experience than any other
        company in Nepal. Many have failed because of lack of their knowledge
        but we have fought against the difficulties and achieve impossible goal
        into reality. Epeak owe to take care of every climbers in the world and
        wants to gain trust from the world’s best services in Nepal.{" "}
      </p>

      <div className="flex justify-around lg:w-[70%] m-auto  text-center   ">
        <div>
          <Icon
            className="border border-[#26ACE2] p-2  rounded-full "
            width={70}
            color="#26ACE2"
            icon="ant-design:safety-outlined"
          />
          <span>safety</span>
        </div>

        <div>
          <Icon
            className="border border-[#26ACE2] p-2  rounded-full "
            width={70}
            color="#26ACE2"
            icon="vaadin:handshake"
          />
          <span>Trust</span>
        </div>
        <div>
          <Icon
            className="border border-[#26ACE2] p-2  rounded-full "
            width={70}
            color="#26ACE2"
            icon="mdi:heart"
          />
          <span>Care</span>
        </div>

        <div>
          <Icon
            className="border border-[#26ACE2] p-2  rounded-full "
            width={70}
            color="#26ACE2"
            icon="mdi:brain-freeze"
          />
          <span>Knowledge</span>
        </div>
      </div>
    </div>
  );
}
