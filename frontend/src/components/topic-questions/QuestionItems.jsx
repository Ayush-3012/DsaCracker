/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import axios from "axios";
import { useState } from "react";
import { useSnackbar } from "notistack";

const QuestionItems = ({ item }) => {
  const { enqueueSnackbar } = useSnackbar();
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
        duration: 0.6,
      },
    },
  };

  const [checked, setChecked] = useState(item.Done);

  const handleClick = () => {
    const completedQuestion = {
      topic: item.Topic,
      problem: item.Problem,
      done: !checked,
      url: item.URL,
      url2: item.URL2,
    };

    axios
      .post("http://localhost:5000/completedQuestions/add", completedQuestion)
      .then((res) => {
        setChecked(!checked);
        const { message } = res.data;
        enqueueSnackbar(message, { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
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
          className="flex gap-1 border-b py-3 max-md:py-2"
          variants={cardVariants}
        >
          <div className="flex justify-center basis-1/12">
            <motion.input
              type="checkbox"
              className="w-5 cursor-pointer accent-emerald-400 max-sm:w-3"
              whileHover={{ scale: 1.18 }}
              checked={checked}
              onChange={handleClick}
            />
          </div>
          <div className="flex items-center px-4 justify-start basis-10/12">
            <MotionLink
              to={item.URL}
              target="_blank"
              className="text-2xl text-slate-300 font-mono font-bold max-md:text-xl max-sm:text-lg"
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
                <SiGeeksforgeeks className="text-3xl text-emerald-400 max-md:text-2xl" />
              ) : (
                <SiLeetcode className="text-3xl text-fuchsia-400 max-md:text-2xl" />
              )}
            </MotionLink>
            <MotionLink
              to={item.URL2}
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <SiCodingninjas className="text-3xl text-yellow-400 max-md:text-2xl" />
            </MotionLink>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default QuestionItems;
