import React from "react";
import RecommendedShows from "./RecommendedShows";
import UpcommingEvent from "./UpcommingEvent";

const MainContainer = () => {
  return (
    <div>
      <div className="relative hidden md:inline flex z-0">
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

      <div className="relative flex z-0 h-screen md:hidden">
        <img src="banner.svg" className="h-full object-cover"></img>

        <div className="absolute flex top-20 left-0 w-full text-white justify-center items-center flex-col">
          <div className=" w-10/12 flex flex-col ">
            <div className="text-wrap flex flex-col gap-2 justify-center items-center text-2xl">
              <span>Discover Exciting Events</span>
              <span>Happening Near You -</span>
              <span>Stay Tuned for Updates!</span>
            </div>
            <div className=" text-gray-300 text-lg flex justify-center items-center pt-12 px-4 flex-col ">
              <span>Dorem ipsam dolor Sit a , con </span>
              <span>Class sociosqu ad litora</span>
              <span>conubia nostra, per</span>
            </div>
          </div>
          <div className=" w-full mt-20">
            <RecommendedShows></RecommendedShows>
          </div>
          <div className="w-full">
            <UpcommingEvent></UpcommingEvent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
