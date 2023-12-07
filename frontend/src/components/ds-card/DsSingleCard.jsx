/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import _ from "lodash";
import { motion } from "framer-motion";

const DsSingleCard = ({ item }) => {
  const dsName = _.lowerCase(item.topicName);
  const percentQuesDone = (item.doneQuestions * 100) / item.questions.length;

  return (
    <motion.div
      initial={{ y: -1100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
    >
      <Link to={`/ds/${dsName}`}>
        <div className="relative bg-zinc-600 group text-slate-50 font-serif rounded-ee-xl rounded-ss-xl hover:shadow-[1px_1px_20px_rgb(0,255,245)] hover:-translate-y-2 transition ease-in-out duration-300">
          <div className="p-4">
            <img
              src={`/static/images/${_.lowerCase(item.topicName)}.png`}
              alt={`${item.topicName}`}
              className="rounded-ss-xl grayscale group-hover:shadow-[1px_1px_10px_rgb(256,256,256)] group-hover:scale-105 group-hover:grayscale-0 duration-300 transition ease-in-out"
            />
          </div>
          <div className="absolute top-0 rounded-ss-xl opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 ">
            <p className=" bg-zinc-600 p-2 font-mono text-teal-300 rounded-ss-xl ">
              {item.description
                ? item.description
                    .split(" ")
                    .slice(0, 10)
                    .join(" ")
                    .replace(/<.+?>/g, "") + "..."
                : ""}
            </p>
          </div>
          <div className="text-lg text-center">
            <h3 className="uppercase text-cyan-200 group-hover:text-teal-400 group-hover:-translate-x-2 transition ease-in-out duration-200 font-bold">
              {item.topicName}
            </h3>
            <div className="font-mono flex flex-col items-start group-hover:text-emerald-300">
              <p className="px-2 ">Total Questions: {item.questions.length}</p>
              <div className="font-mono px-2">
                {percentQuesDone ? (
                  <div>
                    <p className="">Done: {item.doneQuestions}</p>
                    <div className="pgr">
                      <div className="progress-bar" value="0"></div>
                      <div
                        className="inner-progress"
                        style={{ "--percentQuesDone": `${percentQuesDone}%` }}
                      >
                        <span className="percentValue">
                          {Math.trunc(percentQuesDone)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Not yet started</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DsSingleCard;
