/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import QuestionContext from "../question-context/QuestionContext";
import QuestionTable from "./topic-questions/QuestionTable";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import _ from "lodash";
import axios from "axios";
import AppContext from "../app-context/AppContext";

const Sheet = () => {
  const { dsName } = useParams();
  const { setQuestions, setDescription, description, setCompletedQuestions } =
    useContext(QuestionContext);

  const [data, setData] = useState(false);
  const { user } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_ROUTES}/questions/getQuestions?user=${user}`
      )
      .then((res) => {
        setCompletedQuestions(res.data.completedQuestions);
        const matchingItem = res.data.questions.find(
          (item) => _.lowerCase(item.topicName) === dsName
        );

        if (matchingItem) {
          setData(true);
          setQuestions(matchingItem.questions);
          setDescription(matchingItem.description);
        }
      })
      .catch((err) => console.log(err));
  }, [dsName, setCompletedQuestions, setDescription, setQuestions, user]);

  const MotionLink = motion(Link);

  return (
    <motion.div
      className="flex flex-col gap-4 h-full bg-zinc-800 mx-4 my-1 rounded-xl max-md:mx-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center flex flex-col gap-1 bg-zinc-500 rounded-xl mx-4 my-1 max-md:mx-2 max-sm:mx-0"
        animate={{ x: [100, 50, 0, -10, 0] }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-serif font-bold text-slate-200 max-md:text-2xl">
          DSA CRACKER
        </h1>
        <span className="text-2xl font-mono mb-2 font-semibold text-slate-300 max-sm:text-xl">
          <MotionLink
            to="/home"
            className="italic hover:underline hover:not-italic"
            whileHover={{ color: "#fff" }}
          >
            Topics
          </MotionLink>
          /
          <motion.span
            animate={{ fontFamily: "cursive" }}
            className="capitalize text-white"
          >
            {dsName}
          </motion.span>
        </span>
        <p className="text-xl -tracking-tighter rounded-md mx-2 text-zinc-700 bg-slate-200 font-serif animate-bounce max-md:animate-none max-sm:text-lg">
          {description}
        </p>
      </motion.div>
      <motion.div
        className="border-8 rounded-xl px-1 py-1 border-emerald-500 mx-10 overflow-y-scroll h-[65%] max-md:mx-4 max-sm:mx-2"
        animate={{ x: [-100, -50, 0, 10, 0] }}
        transition={{ duration: 0.4 }}
      >
        {data && <QuestionTable />}
      </motion.div>
    </motion.div>
  );
};

export default Sheet;
