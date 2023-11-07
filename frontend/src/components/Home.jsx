/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import DsCard from "../components/ds-card/DsCard";
import Questions from "/questions.js";
import TopicContext from "../topic-context/TopicContext";

const Home = () => {
  const { setTopics } = useContext(TopicContext);

  useEffect(() => {
    setTopics(Questions);
  }, []);

  return (
    <>
      <div className="bg-zinc-800 mx-4 my-1 rounded-xl flex flex-col items-center justify-center h-[90%] max-md:mx-1">
        <DsCard />
      </div>
    </>
  );
};
export default Home;
