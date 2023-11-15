/* eslint-disable react/prop-types */
import { useContext } from "react";
import DsSingleCard from "./DsSingleCard";
import TopicContext from "../../topic-context/TopicContext";

const DsCard = () => {
  const { topics } = useContext(TopicContext);

  return (
    <div className="h-[95%] mx-4 my-2 px-4 py-2 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-scroll max-md:mx-1 max-md:px-1">
      {topics?.map((item, index) => (
        <DsSingleCard key={index} item={item} />
      ))}
    </div>
  );
};

export default DsCard;
