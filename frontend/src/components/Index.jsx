import { useState } from "react";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiLoginCircleLine } from "react-icons/ri";

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleLogInClick = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  return (
    <>
      <div className="flex gap-2 my-1 py-8 bg-slate-800 mx-4  rounded-xl max-md:mx-1 max-lg:py-6 max-md:py-3 max-sm:py-1">
        <div className="mx-5 flex-1 flex justify-center max-md:mx-0">
          <div
            className={`bg-blue-200 ${
              showSignUp ? "hidden" : ""
            } px-32 py-4 rounded-md flex flex-col items-center justify-center group cursor-pointer max-lg:px-24 max-md:px-16 max-sm:px-5`}
            onClick={handleSignUpClick}
          >
            <IoPersonAddOutline className="text-5xl text-black group-hover:text-white group-hover:scale-110 transition duration-200 ease-in-out cursor-pointer max-lg:text-4xl max-md:text-3xl max-sm:text-2xl" />
            <p className="text-5xl font-mono group-hover:text-white group-hover:scale-110 transition duration-200 ease-in-out max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
              Sign Up
            </p>
          </div>
          <div className="max-md:hidden">{showSignUp && <SignUp />}</div>
        </div>
        <div className="mx-5 flex-1 flex justify-center max-md:mx-0">
          <div
            className={`bg-red-200 ${
              showLogin ? "hidden" : ""
            } px-32 py-4 rounded-md flex flex-col items-center justify-center group cursor-pointer max-lg:px-24 max-md:px-16 max-sm:px-5`}
            onClick={handleLogInClick}
          >
            <RiLoginCircleLine className="text-5xl  text-black group-hover:text-white group-hover:scale-110 transition duration-200 ease-in-out cursor-pointer max-lg:text-4xl max-md:text-3xl max-sm:text-2xl" />
            <p className="text-5xl font-mono group-hover:text-white group-hover:scale-110 transition duration-200 ease-in-out max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
              Log In
            </p>
          </div>
          <div className="max-md:hidden">{showLogin && <LogIn />}</div>
        </div>
      </div>
      <div className="hidden max-md:flex justify-center">
        {showSignUp && <SignUp />}
        {showLogin && <LogIn />}
      </div>
    </>
  );
};

export default Index;
