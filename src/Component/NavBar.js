import React from "react";

const NavBar = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-[#1E2022] pt-2">
      <div className="flex  w-full justify-center items-center ">
        <div className="flex justify-between  w-11/12 items-center pb-2">
          <div className="text-[#CF2D2D] font-bold text-xl py-2">BookUsNow</div>
          <div className="md:hidden flex justify-center items-center flex-row gap-5">
            <img alt="logo" src="search.svg" className="h-6"></img>
            <img alt="logo" src="heart-icon.svg" className="h-5"></img>
            <img alt="logo" src="man.svg" className="h-5"></img>
          </div>
          <div className="flex flex-row  hidden md:inline-flex gap-4">
            <div className="bg-black  text-white flex flex-row justify-center items-center px-3 py-1 gap-2 rounded">
              <img src="menubar.svg" alt="menu" className="h-4"></img>
              <span>Categories</span>
            </div>
            <div className="flex  justify-center items-center border border-t border-b border-solid border-[#B0BABF] px-2 rounded">
              <input
                type="text"
                class="search-input"
                placeholder="DJI phantom"
                className="py-1 pl-3 w-[40rem]  "
              />
              <button class="search-button">
                <img src="search.svg" alt="search" className="h-5 "></img>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-8 hidden md:inline-flex">
            <div className="flex flex-row justify-center items-center gap-2">
              <img src="heart-icon.svg" alt="heart" className="h-3"></img>
              <span>Favorites</span>
            </div>
            <div className="px-2 py-1 border-[#B0BABF] border-solid border rounded-sm">
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="flex hidden md:inline-flex w-full justify-center items-center pb-2">
        <div className="flex justify-between w-11/12 items-center ">
          <div className="flex justify-start gap-0 md:gap-36 items-center ">
            <div className="flex flex-row items-center gap-2">
              <img src="location.svg" alt="location" className="h-4"></img>
              <div>Mumbai, India &gt;</div>
            </div>
            <div className="flex flex-row gap-8 pl-28 overflow-x-scroll remove">
              <span>Live shows</span>
              <span>Streams</span>
              <span>Movies</span>
              <span>Plays</span>
              <span>Events</span>
              <span>Sports</span>
              <span>Activities</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-row gap-4 w-11/12">
        <div className="flex flex-1 flex-row justify-start items-center pb-3 text-xs">
          <img alt="location" src="location.svg" className="h-4"></img>
          <div>Mumbai, India &gt; </div>
        </div>
        <div className="flex flex-1 flex-row gap-5 text-nowrap text-xs overflow-x-scroll remove">
          <span>Live shows</span>
          <span>Streams</span>
          <span>Movies</span>
          <span>Plays</span>
          <span>Events</span>
          <span>Sports</span>
          <span>Activities</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
