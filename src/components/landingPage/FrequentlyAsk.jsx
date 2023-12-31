import what from "./assets/what.png";
import { useState } from "react";
export default function FrequentlyAsk() {
  const ques1 = [
    {
      id: 1,
      question: "How to apply for Nepal’s VISA?",
      answer:
        "In the heart of the towering Himalayas, where the air is thin and the winds whisper tales of bravery, one climber embarked on a journey to touch the sky.",
    },
    {
      id: 2,
      question:
        " What type of services do we receive after we land to your country?",
      answer:
        "In the heart of the towering Himalayas, where the air is thin and the winds whisper tales of bravery, one climber embarked on a journey to touch the sky.",
    },
    {
      id: 3,
      question: " What are your safety and health guarantees?",
      answer:
        "In the heart of the towering Himalayas, where the air is thin and the winds whisper tales of bravery, one climber embarked on a journey to touch the sky.",
    },
    {
      id: 4,
      question: "Can I travel alone to submit Mount Everest?",
      answer:
        "In the heart of the towering Himalayas, where the air is thin and the winds whisper tales of bravery, one climber embarked on a journey to touch the sky.",
    },
  ];

  const ques2 = [
    {
      question: "2How to apply for Nepal’s VISA?",
      answer:
        "2In the heart of the towering Himalayas, where the air is thin and the winds whisper tales of bravery, one climber embarked on a journey to touch the sky.",
    },
    {
      question:
        "2 What type of services do we receive after we land to your country?",
      answer:
        "2In the heart of the towering Himalayas, where the air is thin and the winds whisper tales of bravery, one climber embarked on a journey to touch the sky.",
    },
    {
      question: " 2What are your safety and health guarantees?",
      answer:
        "2In the heart of the towering Himalayas, where the air is thin and the winds whisper tales of bravery, one climber embarked on a journey to touch the sky.",
    },
    {
      question: "2Can I travel alone to submit Mount Everest?",
      answer:
        "2In the heart of the towering Himalayas, where the air is thin and the winds whisper tales of bravery, one climber embarked on a journey to touch the sky.",
    },
  ];

  const [answer, setAnswer] = useState("");

  console.log(answer)
  return (
    <div className="px-40 py-32">
      <h3 className="text-5xl  text-center font-semibold">
        Frequently Ask <span className="text-[#26ACE2]">Question</span>
      </h3>

      {/* new section */}
      <div className="flex mt-16  justify-center gap-8 ">
        <div className="flex flex-col justify-center items-center ">
          <div>
            <img src={what} alt="" />
          </div>
          <div className="text-[#273B91] font-bold">
            Question about expeditions
          </div>
          <div>Ask for the processes</div>
        </div>
        <div className=" w-[70%] mt-4">
          {ques1.map((ques, index) => (
            <div key={ques.question} className="font-semibold">
              <div onClick={() => setAnswer(index+1)} className="cursor-pointer">
                {ques.question}
              </div>
              <p
                className={`text-slate-400 pb-4 pt-1 px-2 ${
                  answer == ques.id ? "block" : "hidden"
                }`}
              >
                {ques.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
