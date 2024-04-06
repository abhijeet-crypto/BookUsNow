import React from "react";

const UpcommingEventCard = ({ data }) => {
  const url = data.imgUrl;
  const startIndex = url.indexOf("/d/") + 3;
  const endIndex = url.indexOf("/", startIndex);
  const fileId = url.substring(startIndex, endIndex);
  function convertMetersToKilometers(meters) {
    const kilometers = meters.toFixed(0);
    return kilometers;
  }
  const metersString = data.distanceKm;
  const distanceInKilometers = convertMetersToKilometers(
    parseFloat(metersString)
  );
  const dateString = data?.date;
  const [year, month, day] = dateString.split("T")[0].split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[parseInt(month) - 1];
  const output = `${parseInt(day)} ${monthName}, ${parseInt(year)}`;
  const img = "https://drive.google.com/thumbnail?id=" + fileId;
  return (
    <div className=" border-[#B0BABF] border-solid border rounded-md p-0 flex flex-col justify-center items-center mb-8 relative">
      <div className="w-72 md:w-96 h-70">
        <img alt="logo" src={img} className="h-full w-full"></img>
      </div>
      <div className="absolute left-0 bottom-[62px] md:bottom-[68px] w-full text-white flex justify-center items-center">
        <div className="rounded-b-xl py-2 w-11/12 px-4 bg-black bg-opacity-40">
          {output}
        </div>
      </div>
      <div className="flex flex-col w-full px-3">
        <div className="font-medium text md:text-xl ">{data.eventName}</div>
        <div className="flex flex-row justify-between items-center px-2 pb-2 gap-4">
          <div className="flex flex-row gap-1 items-center justify-center">
            <img alt="logo" src="location.svg" className="h-3"></img>
            <div className="text-xs">{data.cityName}</div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1 text-xs">
            <div>{data.weather}</div>
            <div>|</div>
            <div>{distanceInKilometers} km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEventCard;
