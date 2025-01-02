/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import DsSingleCard from "./DsSingleCard";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const DsCard = () => {
  const { sheetName } = useParams();
  const { topics } = useAppContext();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ROUTES}/v2/sheets/${sheetName}`)
      .then((res) => {
        res?.data && topics?.setTopics(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-zinc-900 mx-2 rounded-xl flex flex-col items-center justify-center h-[85%]">
      <div className="h-[95%] mx-4 my-2 px-4 py-2 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-scroll max-md:mx-1 max-md:px-1">
        {topics?.topics?.map((item, index) => (
          <DsSingleCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DsCard;
