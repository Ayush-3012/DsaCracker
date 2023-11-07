/* eslint-disable react/prop-types */
import { useContext } from "react";
import QuestionContext from "../question-context/QuestionContext";
import QuestionTable from "./topic-questions/QuestionTable";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sheet = () => {
  const { questions, description } = useContext(QuestionContext);
  const { dsName } = useParams();

  const MotionLink = motion(Link);

  return (
    <motion.div
      className="flex flex-col gap-4 h-full bg-zinc-800 mx-4 flex-wrap  my-1 rounded-xl max-md:mx-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center flex flex-col flex-wrap gap-1 bg-zinc-500 rounded-xl mx-4 my-1"
        animate={{ x: [100, 50, 0, -10, 0] }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-serif font-bold text-slate-200">
          DSA CRACKER
        </h1>
        <span className="text-2xl font-mono font-semibold text-slate-300">
          <MotionLink
            to="/"
            className="italic hover:underline hover:not-italic"
            whileHover={{ color: "#fff" }}
          >
            Topics
          </MotionLink>
          /<motion.span animate={{fontFamily: 'cursive'}} className="capitalize text-white">{dsName}</motion.span>
        </span>
        <p className="text-xl -tracking-tighter rounded-md mx-2 text-zinc-700 bg-slate-200 font-serif animate-bounce">
          {description}
        </p>
      </motion.div>
      <motion.div
        className="border-8 rounded-xl px-1 py-1 border-emerald-500 mx-10 overflow-y-scroll h-[65%]"
        animate={{ x: [-100, -50, 0, 10, 0] }}
        transition={{ duration: 0.4 }}
      >
        <div>
          {questions?.map((item, index) => (
            <QuestionTable key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sheet;
