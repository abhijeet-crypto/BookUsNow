import React from "react";
import RecommendedShows from "./RecommendedShows";
import UpcommingEvent from "./UpcommingEvent";

const MainContainer = () => {
  return (
    <div>
      <div className="relative flex z-0">
        <img src="banner.svg" className="w-full z-0"></img>
        <div className="absolute top-0 left-0 z-10 text-white w-full">
          <div className=" flex justify-center items-center pt-40 flex-col gap-7">
            <span className="text-6xl">Discover Exciting Events Happening</span>
            <span className="text-6xl">Near You - Stay Tuned for Updates!</span>
          </div>
          <div className=" text-gray-300 text-xl flex justify-center items-center pt-5 flex-col ">
            <span>
              Dorem ipsam dolor Sit a , con tetur agipiScirvelit. Nuhq ul ac
              aliquet odio mattis.
            </span>
            <span>
              Class sociosqu ad litora torq taciti trvtyelii interdum, per
              conubia nostra, per
            </span>
          </div>
          <div className="mt-48">
            <RecommendedShows></RecommendedShows>
          </div>
          <div>
            <UpcommingEvent></UpcommingEvent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
