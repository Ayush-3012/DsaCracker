import { useState } from "react";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatched, setPasswordMatched] = useState(false);
  const navigator = useNavigate();

  const addUser = (user) => {
    axios
      .post("http://localhost:5000/registeredUsers/addUser", user)
      .then((res) => {
        const { message } = res.data;
        alert(message);
        navigator("/");
      })
      .catch((err) => {
        alert("Username already exists or !!! Server Error 404 Not Found !!!");
        console.log(err);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const user = {
      user_id: uuidv4(),
      email,
      name,
      password,
    };
    passwordMatched && addUser(user);
  };

  return (
    <>
      <div className="flex flex-col gap-2 items-center py-10 w-full bg-slate-700 mx-4 rounded-xl justify-center max-md:mx-1">
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
            <FaEye
              className="text-2xl text-emerald-400 absolute right-2 cursor-pointer hover:text-emerald-600"
              onClick={() => setViewPassword(!viewPassword)}
            />
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
                  ? alert("Passwords do not match")
                  : setPasswordMatched(true);
              }}
            />
            <FaEye
              className="text-2xl text-emerald-400 absolute right-2 cursor-pointer hover:text-emerald-600"
              onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
            />
          </div>
          <button
            type="submit"
            className="py-1 self-center font-mono w-fit px-10 rounded-xl text-white bg-blue-600 hover:bg-blue-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
