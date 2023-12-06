/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import DsCard from "../components/ds-card/DsCard";
import axios from "axios";
import TopicContext from "../topic-context/TopicContext.js";
import { motion } from "framer-motion";
import AppContext from "../app-context/AppContext.js";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import QuestionContext from "../question-context/QuestionContext.js";

const Home = () => {
  const [data, setData] = useState(false);
  const { setTopics } = useContext(TopicContext);
  const { setCompletedQuestions } = useContext(QuestionContext);
  const { user, isAuthenticated } = useContext(AppContext);
  const navigator = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    isAuthenticated
      ? axios
          .get(
            `${
              import.meta.env.VITE_API_ROUTES
            }/questions/getQuestions?user=${user}`
          )
          .then((res) => {
            setData(true);
            setTopics(res.data.questions);
            setCompletedQuestions(res.data.completedQuestions);
          })
          .catch((err) => console.log(err))
      : (enqueueSnackbar("User is Not LoggedIn, Please LogIn", {
          variant: "info",
        }),
        navigator("/"));
  }, [
    enqueueSnackbar,
    isAuthenticated,
    navigator,
    setTopics,
    setCompletedQuestions,
    user,
  ]);

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
        transition={{ duration: 0.4 }}
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
