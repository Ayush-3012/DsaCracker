/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
// import { useState } from "react";

const QuestionTable = ({ item }) => {
  const MotionLink = motion(Link);

  const cardVariants = {
    offscreen: {
      y: 150,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div
        className="py-0.5 bg-slate-800"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex gap-1 border-2 py-3"
          variants={cardVariants}
        >
          <div className="flex justify-center basis-1/12">
            <motion.input
              type="checkbox"
              name="checkedQues"
              value=""
              className="w-5"
              whileHover={{ scale: 1.18 }}
            />
            <input type="hidden" name="uncheckedQues" value="" />
          </div>
          <div className="flex items-center px-4 justify-start basis-10/12">
            <MotionLink
              to={item.URL}
              target="_blank"
              className="text-2xl text-slate-300 font-mono font-bold"
              animate={{ fontFamily: "cursive" }}
              whileHover={{ translateY: "-5px", color: "#f80f80" }}
            >
              {item.Problem}
            </MotionLink>
          </div>
          <div className="flex justify-evenly items-center basis-2/12">
            <MotionLink
              to={item.URL}
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              {item.URL.includes("geeksforgeeks") ? (
                <SiGeeksforgeeks className="text-3xl text-emerald-400" />
              ) : (
                <SiLeetcode className="text-3xl text-fuchsia-400" />
              )}
            </MotionLink>
            <MotionLink
              to={item.URL2}
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <SiCodingninjas className="text-3xl text-yellow-400" />
            </MotionLink>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default QuestionTable;
