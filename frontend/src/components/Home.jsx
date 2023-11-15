/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import DsCard from "../components/ds-card/DsCard";
import axios from "axios";
import TopicContext from "../topic-context/TopicContext.js";
import { motion } from "framer-motion";

const Home = () => {
  const [data, setData] = useState(false);
  const { setTopics } = useContext(TopicContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/completedQuestions/")
      .then((res) => {
        setData(true);
        setTopics(res.data);
      })
      .catch((err) => console.log(err));
  }, [setTopics]);

  return (
    <motion.div
      className="mx-4 my-1 max-md:mx-1 flex flex-col gap-1 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="border-2 rounded-xl border-black bg-zinc-900"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4}}
      >
        <div className="text-7xl text-slate-200 font-extrabold font-mono text-center max-md:text-5xl max-sm:text-3xl">
          DSA Cracker
        </div>
        <div className="text-4xl text-slate-300 text-center font-mono max-md:text-2xl max-sm:text-lg">
          Your Gateway to crack DSA 🔥
        </div>
      </motion.div>
      <div className="bg-zinc-800 mx-2 rounded-xl flex flex-col items-center justify-center h-[73%] ">
        {data && <DsCard />}
      </div>
    </motion.div>
  );
};
export default Home;
