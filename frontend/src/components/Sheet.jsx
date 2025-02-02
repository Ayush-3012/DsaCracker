/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import QuestionTable from "../components/QuestionTable";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useAppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Loader from "../partials/Loader";

const Sheet = () => {
  const { sheetName, dsName } = useParams();
  const { sheet } = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await sheet?.getQuestions(sheetName, dsName);
      setLoading(false);
    };
    fetchData();
  }, []);

  // const [data, setData] = useState(false);
  // const { user, isLoggedIn } = useContext(AppContext);
  // const navigate = useNavigate();
  // const { enqueueSnackbar } = useSnackbar();

  // useEffect(() => {
  //   isLoggedIn
  //     ? axios
  //         .get(
  //           `${
  //             import.meta.env.VITE_API_ROUTES
  //           }/questions/getQuestions?user=${user}`
  //         )
  //         .then((res) => {
  //           setCompletedQuestions(res.data.completedQuestions);
  //           const matchingItem = res.data.questions.find(
  //             (item) => _.lowerCase(item.topicName) === dsName
  //           );

  //           if (matchingItem) {
  //             setData(true);
  //             setQuestions(matchingItem.questions);
  //             setDescription(matchingItem.description);
  //           }
  //         })
  //         .catch((err) => console.log(err))
  //     : (enqueueSnackbar("User is Not LoggedIn, Please LogIn", {
  //         variant: "info",
  //       }),
  //       navigate("/"));
  // }, [
  //   dsName,
  //   enqueueSnackbar,
  //   isLoggedIn,
  //   navigate,
  //   setCompletedQuestions,
  //   setDescription,
  //   setQuestions,
  //   user,
  // ]);

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
            to={`/sheet/${sheetName}`}
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
        {/* <p className="text-xl -tracking-tighter rounded-md mx-2 text-zinc-700 bg-slate-200 font-serif animate-bounce max-md:animate-none max-sm:text-lg">
          {description}
        </p> */}
      </motion.div>
      <motion.div
        className="border-8 rounded-xl px-1 py-1 border-emerald-500 mx-10 overflow-y-scroll h-[65%] max-md:mx-4 max-sm:mx-2"
        animate={{ x: [-100, -50, 0, 10, 0] }}
        transition={{ duration: 0.4 }}
      >
        {loading ? <Loader /> : <QuestionTable />}
      </motion.div>
    </motion.div>
  );
};

export default Sheet;
