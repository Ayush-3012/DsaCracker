// SignIn.js

import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated, setIsLoggedin, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:5000/users?username=${username}`)
      .then((res) => {
        const fetchedUser = res.data;
        if (fetchedUser.length > 0) {
          if (fetchedUser[0].password === password) {
            setIsAuthenticated(true);
            setIsLoggedin(true);
            setUser(username);
            navigate("/");
          } else {
            alert("Incorrect passowrd");
          }
        } else {
          alert("No Such user available");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("!!! Server Error 404 Not Found !!!");
      });
  };

  return (
    <div className="flex justify-center ">
      <div className="flex gap-1 items-center my-8 flex-col justify-center border rounded-md border-slate-400">
        <span className="text-lg border-b p-2 w-full text-center font-mono font-semibold text-slate-700">
          Sign In to Your Account
        </span>
        <form
          onSubmit={handleSignIn}
          className=" px-8 py-4 w-full flex flex-col "
        >
          <input
            type="text"
            placeholder="Username"
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
            className="border bg-blue-400 py-1 hover:bg-blue-600 rounded-lg text-white"
          >
            Sign In
          </button>
        </form>
        <span className="font-mono text-lg px-4">
          Do not have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 cursor-pointer hover:text-blue-700"
          >
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
