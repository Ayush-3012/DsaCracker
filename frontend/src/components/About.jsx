import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const MotionLink = motion(Link);

  return (
    <motion.div
      className="bg-zinc-800 mx-4 my-1 rounded-xl flex items-center justify-center max-md:mx-1 h-[90%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-serif m-4 rounded-xl p-4 flex flex-col gap-4 items-center overflow-y-scroll h-[80%] max-md:gap-2 max-md:m-2">
        <h1 className="text-slate-700 py-1 text-4xl w-3/4 text-center  bg-red-300 rounded-md max-md:text-2xl ">
          DSA CRACKER
        </h1>
        <motion.div
          className="rounded-md text-2xl text-slate-200 flex flex-col gap-4  max-md:text-xl max-md:gap-0"
          animate={{ x: [100, 50, 0, -10, 0] }}
          transition={{ duration: 0.4 }}
        >
          <h4 className="mx-4 my-2 px-4 py-2 rounded-xl shadow-md shadow-cyan-200 max-md:mx-2 max-md:my-1">
            DSA Cracker helps you build your confidence in solving any coding
            related question and helps you prepare for your placements 👨🏻‍🎓
          </h4>
          <span className="mx-4 my-2 px-4 py-2 rounded-xl shadow-inner shadow-red-200 max-md:mx-2 max-md:my-1">
            <MotionLink
              to="/"
              target="_blank"
              className="italic text-slate-400 hover:underline hover:text-white hover:not-italic"
            >
              Dsa Cracker
            </MotionLink>{" "}
            is your personal web-based progress tracker based on
            <MotionLink
              to="https://docs.google.com/spreadsheets/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/edit#gid=1773184282"
              target="_blank"
              className="italic text-slate-400 hover:underline hover:text-white hover:not-italic"
            >
              {" "}
              DSA Cracker Sheet{" "}
            </MotionLink>
            by
            <MotionLink
              to="https://www.linkedin.com/in/love-babbar-38ab2887/"
              target="_blank"
              className="italic text-slate-400 hover:underline hover:text-white hover:not-italic"
            >
              <span> Love Babbar</span>
            </MotionLink>
            🙏🏻
          </span>
        </motion.div>
        <motion.div
          className="bg-emerald-800 text-slate-200 rounded-md p-4 w-4/5 text-center"
          animate={{ x: [-100, -50, 0, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          <h6 className="text-3xl p-1">
            DSA CRACKER project by
            <Link
              to="https://www.linkedin.com/in/ayush-kumar-6137651b4/"
              target="_blank"
              className="italic text-slate-50 hover:underline hover:text-white hover:not-italic"
            >
              Ayush Kumar
            </Link>
          </h6>
          <p className="text-2xl mt-4 flex flex-col justify-center items-center">
            Learning to Code 👨‍💻 <br />
            For the 🧡 to code ✌🏻
            <Link
              className="italic text-slate-50 self-end hover:underline hover:text-white hover:not-italic"
              to="https://github.com/Ayush-3012/DsaCracker"
              target="_blank"
            >
              This project 🧑‍💻
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default About;
