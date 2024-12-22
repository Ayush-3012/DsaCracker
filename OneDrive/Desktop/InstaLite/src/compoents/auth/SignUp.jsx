/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// SignIn.js

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const addUser = (user) => {
    axios
      .post("http://localhost:5000/users", user)
      .then(() => {
        alert("User Added, Please SignIn");
        navigator("/signin");
      })
      .catch((err) => {
        alert("Username already exists or !!! Server Error 404 Not Found !!!");
        console.log(err);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = {
      fullname,
      username,
      password,
    };
    addUser(user);
  };

  return (
    <div className="flex justify-center ">
      <div className="flex gap-1 items-center my-8 flex-col justify-center border rounded-md border-slate-400">
        <span className="text-lg border-b p-4 font-mono font-semibold  text-slate-700">
          Sign up to connect and check on posts.
        </span>
        <form
          onSubmit={handleSignUp}
          className=" px-8 py-4 w-full flex flex-col "
        >
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            required
            className="m-2 p-2 rounded-sm border outline-none focus:border focus:border-slate-500"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username (Must be Unique)"
            value={username}
            required
            className="m-2 p-2 rounded-sm border outline-none focus:border focus:border-slate-500"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            className="m-2 p-2 rounded-sm border outline-none focus:border focus:border-slate-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border bg-blue-400 py-1 font-mono text-xl hover:bg-blue-600 rounded-lg text-white"
          >
            Sign Up
          </button>
        </form>
        <span className="font-mono text-lg">
          Have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-500 cursor-pointer hover:text-blue-700"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
