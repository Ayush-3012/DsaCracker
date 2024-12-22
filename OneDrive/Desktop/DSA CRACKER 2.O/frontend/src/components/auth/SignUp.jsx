import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import bcryptjs from "bcryptjs";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";

const SignUp = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatched, setPasswordMatched] = useState(false);
  const navigator = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const addUser = (user) => {
    axios
      .post(`${import.meta.env.VITE_API_ROUTES}/users/register`, user)
      .then((res) => {
        const { message } = res.data;
        enqueueSnackbar(message, { variant: "info" });
        navigator("/");
      })
      .catch((err) => {
        enqueueSnackbar("!!! Server Error 404 Not Found !!!", {
          variant: "error",
        });
        console.log(err);
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = {
      user_id: uuidv4(),
      email,
      name,
      password: await bcryptjs.hash(password, 10),
    };
    passwordMatched && addUser(user);
  };

  return (
    <>
      <motion.div
        className="flex flex-col gap-2   items-center py-10 w-full bg-slate-700 mx-4 rounded-xl justify-center max-md:mx-1 max-md:overflow-y-scroll max-md:h-96"
        animate={{ x: [-300, -200, -100, -50, 0, 20, 10, 0] }}
        transition={{ duration: 0.2 }}
      >
        <div className="rounded-md px-4 py-2 w-96 text-center font-mono text-white text-4xl bg-slate-500 max-md:w-80 max-sm:w-72 max-md:text-3xl">
          Sign Up
        </div>
        <form
          onSubmit={handleSignUp}
          method="post"
          className="flex flex-col justify-center py-4 px-2 gap-2 border-4 rounded-xl max-md:py-2"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={email}
            className="p-3 rounded-md w-80 font-mono focus:border focus:border-slate-600 outline-none max-md:w-72 max-sm:w-64"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Name"
            required
            value={name}
            className="p-3 rounded-md w-80 font-mono focus:border focus:border-slate-600 outline-none max-md:w-72 max-sm:w-64"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex justify-center items-center gap-2 relative">
            <input
              type={`${viewPassword ? "text" : "password"}`}
              placeholder="Enter your Password"
              required
              value={password}
              className="p-3 rounded-md w-80 font-mono focus:border focus:border-slate-600 outline-none max-md:w-72 max-sm:w-64"
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="flex justify-center items-center gap-2 relative">
            <input
              type={`${viewConfirmPassword ? "text" : "password"}`}
              placeholder="Confirm your Password"
              required
              className="p-3 rounded-md w-80 font-mono focus:border focus:border-slate-600 outline-none max-md:w-72 max-sm:w-64"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => {
                password !== confirmPassword && confirmPassword !== ""
                  ? enqueueSnackbar("Passwords do not match", {
                      variant: "info",
                    })
                  : setPasswordMatched(true);
              }}
            />
            {viewConfirmPassword ? (
              <FaEyeSlash
                className="text-2xl text-emerald-400 absolute right-2 cursor-pointer hover:text-emerald-600"
                onClick={() => setViewPassword(!viewConfirmPassword)}
              />
            ) : (
              <FaEye
                className="text-2xl text-emerald-400 absolute right-2 cursor-pointer hover:text-emerald-600"
                onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
              />
            )}
          </div>
          <button
            type="submit"
            className="py-1 self-center font-mono w-fit px-10 rounded-xl text-white bg-blue-600 hover:bg-blue-800"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default SignUp;
