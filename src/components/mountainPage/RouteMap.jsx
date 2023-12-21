import { Icon } from "@iconify/react";

export default function RouteMap() {
  return (
    <div className="mt-16">
    <div className="flex items-center gap-2">
      <Icon width={35} icon="material-symbols:map-outline" />
      <h4 className="uppercase text-2xl font-Cormorant font-semibold whitespace-nowrap">
        Route Map
      </h4>
      <div className="w-full">
        <hr />
      </div>
    </div>

    <div>
      <img
        src="https://www.sevensummittreks.com/uploads/original/1-JNng379TIsnlnAEOjpl5xzYMEiupIWBxDn8lzku0.jpg"
        alt=""
      />
    </div>
  </div>
    )
}
