import { Icon } from "@iconify/react";


const overviews = [
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: "Country",
      subTitle: "Nepal",
    },
    {
      icon: <Icon width={35} icon="fa6-brands:think-peaks" />,
      title: "Peak Name",
      subTitle: "Mt. Everest",
    },
    {
      icon: <Icon width={35} color="" icon="game-icons:duration" />,
      title: " Duration",
      subTitle: "60 Days ",
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Route",
      subTitle: "S-Col; SE- Ridge ",
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Rank",
      subTitle: "1 ",
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Co-ordinates",
      subTitle: `27°59'18"N 86°55'33"E `,
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Weather Reports",
      subTitle: `Report `,
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Range",
      subTitle: `Mahalangur Range `,
    },
  ];
export default function DetailFourth() {
  return (
    <div className="h-[40vh] py-16 bg-[#f7f7f7]  px-40 ">
          <div className="grid grid-cols-4 gap-8 ">
            {overviews.map((overview) => {
              return (
                <div key={overview.title} className="flex items-center gap-4">
                  <div className="border-2 bg-[#215D91] rounded-2xl h-16 w-16 flex justify-center items-center">
                    {overview.icon}
                  </div>
                  <div>
                    <div className="text-[#215D91] font-bold ">
                      {overview.title}{" "}
                    </div>
                    <div className="text-black"> {overview.subTitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  )
}
