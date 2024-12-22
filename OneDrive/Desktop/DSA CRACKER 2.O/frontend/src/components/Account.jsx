import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import AppContext from "../app-context/AppContext";
import axios from "axios";
import QuestionContext from "../question-context/QuestionContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Account = () => {
  const { user, isLoggedIn } = useContext(AppContext);
  const [aboutUser, setAboutUser] = useState({});
  const [data, setData] = useState(false);
  const { completedQuestions, setCompletedQuestions } =
    useContext(QuestionContext);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    isLoggedIn
      ? axios
          .get(`${import.meta.env.VITE_API_ROUTES}/users/account?user=${user}`)
          .then((res) => {
            setData(true), setAboutUser(res.data.foundUser);
            axios
              .get(
                `${
                  import.meta.env.VITE_API_ROUTES
                }/questions/getQuestions?user=${user}`
              )
              .then((res) =>
                setCompletedQuestions(res.data.completedQuestions)
              );
          })
          .catch((err) => console.log(err))
      : (enqueueSnackbar("User is Not LoggedIn, Please LogIn", {
          variant: "info",
        }),
        navigate("/"));
  }, [enqueueSnackbar, isLoggedIn, navigate, setCompletedQuestions, user]);

  return (
    <>
      <motion.div
        className="flex items-center justify-center bg-slate-600 mx-4 rounded-xl max-md:mx-2 max-sm:mx-1"
        animate={{ y: [-100, -50, -10, 0, 10, 0] }}
        transition={{ duration: 0.3 }}
      >
        {data && (
          <div className="flex flex-col items-center gap-5 py-10 text-white">
            <motion.div
              className="flex gap-2 flex-wrap items-center max-md:flex-col"
              animate={{ x: [100, 50, 10, 0, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="border rounded-full w-24 object-contain overflow-hidden">
                <img src={`https://picsum.photos/id/${user.length}/100`} />
              </div>
              <div className="text-3xl flex flex-col justify-center font-serif px-4 max-md:text-xl">
                <div className="font-bold">
                  Name: <span className="capitalize">{aboutUser.name}</span>
                </div>
                <div className="">Email: {aboutUser.email}</div>
                <hr />
                <div className="text-xl font-mono my-2">
                  <span className="text-emerald-500 font-bold">
                    {completedQuestions.length}
                  </span>{" "}
                  of <span className="text-emerald-500 font-bold">450</span>{" "}
                  Problems Solved{" "}
                  <span className="text-emerald-500 font-bold">
                    {Math.trunc((completedQuestions.length * 100) / 450)}%
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: [-100, -50, -10, 0, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-slate-700 py-2 rounded-md px-4 text-xl overflow-y-scroll h-96 font-mono max-sm:text-lg max-sm:px-2 max-sm:my-6">
                <span className="text-3xl font-bold max-md:text-2xl max-sm:text-xl">
                  Solved Questions:{" "}
                </span>
                {completedQuestions.map((item, index) => (
                  <h2
                    className="px-8 text-2xl hover:text-emerald-400 hover:-translate-y-1 duration:100 ease-in-out transition max-sm:text-xl max-md:px-4 max-sm:px-2"
                    key={index}
                  >
                    <span>
                      {index + 1}. {}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className=" font-serif"
                    >
                      {item.problem}
                    </a>
                    <hr />
                  </h2>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Account;
