import { useContext } from "react";
import PostList from "./posts/PostList";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, isLoggedin } = useContext(AppContext);

  return (
    <div className="">
      {isAuthenticated && isLoggedin ? (
        <div className="">
          <PostList />
        </div>
      ) : (
        <div className=" p-10 font-mono items-center gap-4 font-bold  flex flex-col max-md:p-4 max-md:gap-2">
          <div className="text-center border-b-2 border-slate-500 p-4 text-4xl max-md:p-2">
            Welcome to{" "}
            <Link
              to="/"
              className="font-[cursive] text-blue-500 hover:text-red-400"
            >
              Insta-Lite.
            </Link>{" "}
          </div>
          <div className="border-2 border-slate-300 rounded-md p-4 text-2xl max-md:p-2">
            Please{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-800">
              Sign Up
            </Link>{" "}
            if you are a new user , <br />
            <Link to="/signin" className="text-blue-500 hover:text-blue-800">
              Sign In
            </Link>{" "}
            if already registered, <br />
            to connect and check trendy posts of your connections.
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
