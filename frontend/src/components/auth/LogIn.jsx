import { useContext } from "react";
import AppContext from "../../app-context/AppContext.js";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcryptjs from "bcryptjs";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";

const LogIn = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { setIsAuthenticated, setIsLoggedIn, setUser } = useContext(AppContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_API_ROUTES)
    axios
      .get(`${import.meta.env.VITE_API_ROUTES}/users/getUser?email=${email}`)
      .then(async (res) => {
        if (res.data) {
          if (await bcryptjs.compare(password, res.data.password)) {
            setIsAuthenticated(true);
            setIsLoggedIn(true);
            setUser(email);
            navigate("/home");
          } else {
            enqueueSnackbar("Either Email or Password is Incorrect", {
              variant: "info",
            });
          }
        } else {
          enqueueSnackbar("Either Email or Password is Incorrect", {
            variant: "info",
          });
        }
      })
      .catch((err) => {
        enqueueSnackbar("!!! Server Error 404 Not Found !!!", {
          variant: "error",
        });
        console.log(err);
      });
  };

  return (
    <motion.div
      className="flex flex-col gap-2  items-center py-24 w-full bg-slate-700 mx-4 rounded-xl justify-center max-md:mx-1 max-md:overflow-y-scroll max-md:h-96"
      animate={{ x: [300, 200, 100, 50, 0, -20, -10, 0] }}
      transition={{ duration: 0.2 }}
    >
      <div className="rounded-md px-4 py-2 w-96 text-center font-mono text-white text-4xl bg-slate-500 max-md:w-80 max-sm:w-72 max-md:text-3xl">
        Log In
      </div>
      <form
        method="post"
        onSubmit={handleLogIn}
        className="flex flex-col justify-center py-4 px-2 gap-2 border-4 rounded-xl max-md:py-2"
      >
        <input
          type="email"
          placeholder="Enter your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-md w-80 font-mono focus:border focus:border-slate-600 outline-none max-md:w-72 max-sm:w-64"
        />
        <div className="flex justify-center items-center gap-2 relative">
          <input
            type={`${viewPassword ? "text" : "password"}`}
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md w-80 font-mono focus:border focus:border-slate-600 outline-none max-md:w-72 max-sm:w-64"
          />
          {viewPassword ? (
            <FaEyeSlash
              className="text-2xl text-emerald-400 absolute right-2 cursor-pointer hover:text-emerald-600"
              onClick={() => setViewPassword(!viewPassword)}
            />
          ) : (
            <FaEye
              className="text-2xl text-emerald-400 absolute right-2 cursor-pointer hover:text-emerald-600"
              onClick={() => setViewPassword(!viewPassword)}
            />
          )}
        </div>
        <button
          type="submit"
          className="py-1 self-center font-mono w-fit px-10 rounded-xl text-white bg-blue-600 hover:bg-blue-800"
        >
          Log In
        </button>
      </form>
    </motion.div>
  );
};

export default LogIn;
