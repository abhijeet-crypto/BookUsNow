import React, { useEffect, useState, useRef } from "react";
import UpcommingEventCard from "./UpcommingEventCard";

const UpcommingEvent = () => {
  const [upcommingData, setUpcommingData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const apiLink = process.env.REACT_APP_API_URL2;
  const containerRef = useRef(null);

  const fetchEventData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiLink}&page=${page}&type=upcoming`);
      const data = await response.json();
      setUpcommingData((prevData) => [...prevData, ...data.events]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, []); // Fetch initial data on mount
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight && !loading) {
        fetchEventData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div className="text-black flex justify-center items-center pt-20 flex-col">
      <div className="w-10/12 flex justify-between items-center pb-4">
        <div className="text-lg font-medium">Upcomming Events -&gt;</div>
        <div className="font-medium">See All</div>
      </div>
      <div
        className="w-10/12 flex flex-row justify-between flex-wrap overflow-y-scroll max-h-[600px] remove"
        ref={containerRef}
      >
        {upcommingData.map((data, index) => (
          <UpcommingEventCard data={data} key={index}></UpcommingEventCard>
        ))}
      </div>
      <div>{loading && <p>Loading...</p>}</div>
    </div>
  );
};

export default UpcommingEvent;
