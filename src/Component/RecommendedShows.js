import React, { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";

const RecommendedShows = () => {
  const [showData, setShowData] = useState(null);

  const apiLink = process.env.REACT_APP_API_URL;
  const fetchRecommendedShowsData = async () => {
    const res = await fetch(apiLink);
    const data = await res.json();
    console.log("hello ", data);
    setShowData(data);
  };
  useEffect(() => {
    fetchRecommendedShowsData();
  }, []);
  //   if (showData) console.log(showData.events[0].imgUrl);
  if (!showData) return;
  return (
    <div className="flex justify-center flex-col items-center text-white ">
      <div className="w-10/12 flex justify-between items-center pb-4">
        <div className="text-lg font-medium">Recommended Shows -&gt;</div>
        <div className="font-medium">See All</div>
      </div>
      <div className="flex  w-10/12 gap-4 overflow-x-scroll remove">
        {showData.events.map((data, index) => (
          <RecommendedCard
            key={index}
            data={data}
            img={index + 1}
          ></RecommendedCard>
        ))}
      </div>
    </div>
  );
};

export default RecommendedShows;
