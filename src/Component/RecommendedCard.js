import React, { useState, useEffect } from "react";

const RecommendedCard = ({ data, img }) => {
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
  const image = "image" + img + ".svg";
  function convertMetersToKilometers(meters) {
    const kilometers = meters.toFixed(0);
    return kilometers;
  }
  const metersString = data.distanceKm;
  const distanceInKilometers = convertMetersToKilometers(
    parseFloat(metersString)
  );

  return (
    <>
      <div className="min-w-72 relative z-0">
        <img alt="demo" src={image} className=""></img>
        <div className="absolute bottom-1 z-10 text-white flex flex-col w-fit">
          <div className="p-2 flex flex-row  justify-between gap-4 items-center">
            <div className="text-l text-nowrap  overflow-x-scroll remove w-36 ">
              {data.eventName}
            </div>
            <div className="text-xs">{output}</div>
          </div>
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
    </>
  );
};

export default RecommendedCard;
