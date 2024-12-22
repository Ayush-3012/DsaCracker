/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaSquareInstagram, FaUser } from "react-icons/fa6";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const Header = () => {
  const {
    isLoggedin,
    isAuthenticated,
    user,
    setIsLoggedin,
    setIsAuthenticated,
    setUser,
  } = useContext(AppContext);

  return (
    <header className="bg-slate-200 p-2 sticky top-0 flex justify-between items-center">
      <Link to="/" className="">
        <FaSquareInstagram className="text-5xl text-blue-600 hover:text-red-400 max-md:text-3xl" />
      </Link>
      <div className="ml-32 flex flex-col justify-center items-center max-md:ml-0">
        <Link
          to="/"
          className="font-[cursive] text-4xl text-blue-600 hover:text-red-400 flex items-center justify-center max-md:text-2xl max-sm:text-xl"
        >
          Insta-Lite
        </Link>
        {isLoggedin && (
          <div className="text-3xl font-mono w-fit rounded-md border flex justify-center  text-slate-700 max-md:text-xl max-sm:text-lg">
            Logged In As: <span className="capitalize">-{user}</span>
          </div>
        )}
      </div>
      <div className="rounded-md group bg-blue-200 p-1 hover:bg-red-200">
        {isLoggedin && isAuthenticated ? (
          <div className="flex gap-2 p-1 items-center max-md:flex-col max-md:gap-0">
            <div className="flex justify-center items-center">
              <Link to="/">
                <FaUser className="text-2xl text-red-400 group-hover:text-blue-400 max-md:text-xl" />
              </Link>
              <Link
                to="/addPost"
                className="text-4xl text-red-400 group-hover:text-blue-400 max-md:text-3xl"
              >
                <MdAdd />
              </Link>
            </div>
            <button
              onClick={() => {
                setIsLoggedin(false);
                setIsAuthenticated(false);
                setUser(null);
              }}
              className=" bg-slate-700 font-mono text-white px-2 py-1 rounded-md group-hover:bg-slate-900"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2 p-1 max-md:flex-col max-md:gap-0">
            <Link
              to="/signin"
              className="bg-blue-400 text-white font-bold px-3 py-1 rounded-md hover:bg-blue-600"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="font-bold bg-blue-400 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
