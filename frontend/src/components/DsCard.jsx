/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DsSingleCard from "./DsSingleCard";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import Loader from "../partials/Loader";

const DsCard = () => {
  const { sheetName } = useParams();
  const { sheet } = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await sheet?.getSheet(sheetName);
      await sheet?.getTopics(sheetName);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {!loading ? (
        <div className="bg-zinc-900 mx-2 rounded-xl flex flex-col items-center justify-center h-[85%]">
          <h1 className="text-4xl text-slate-50 font-mono">
            {sheet?.sheet?.data?.name}
          </h1>
          <h1 className="text-xl text-slate-50 font-mono">
            {sheet?.sheet?.data?.description}
          </h1>
          <h1 className="text-xl text-slate-50 font-mono border-b-4 w-full text-center">
            Total Topics: {sheet?.sheet?.data?.totalTopics}
          </h1>
          <div className="h-[95%] mx-4 my-2 px-4 py-2 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-scroll max-md:mx-1 max-md:px-1">
            {sheet?.topics?.data?.length > 0 &&
              sheet?.topics?.data?.map((item, index) => (
                <DsSingleCard key={index} item={item} sheetName={sheetName} />
              ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DsCard;
