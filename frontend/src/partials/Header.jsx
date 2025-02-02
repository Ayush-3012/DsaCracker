import { Link } from "react-router-dom";
import { PiHouseBold, PiInfoBold, PiMapPinBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useAppContext } from "../context/AppContextProvider";

const Header = () => {
  const { auth } = useAppContext();

  return (
    <div className="flex bg-slate-800 items-center justify-center m-1 rounded-xl text-5xl py-2 sticky top-0 max-md:text-4xl max-sm:text-3xl max-md:m-0 max-md:rounded-none">
      <div className="flex justify-center items-center gap-5 max-md:gap-4 max-sm:gap-3">
        {auth?.isLoggedIn ? (
          <>
            <Link to="/home">
              <PiHouseBold className=" text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
            </Link>
            <Link to="/about">
              <PiInfoBold className=" text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
            </Link>
            <Link to="/account">
              <FaRegUser className="text-4xl text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer max-md:text-3xl max-sm:text-2xl" />
            </Link>
            <Link
              to="https://docs.google.com/spreadsheets/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/edit#gid=1773184282"
              target="_blank"
            >
              <PiMapPinBold className=" text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
            </Link>
            <Link to="/" onClick={async () => await auth?.logoutAuth()}>
              <RiLogoutCircleLine className=" text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
            </Link>
          </>
        ) : (
          <div className="">
            <div className="text-3xl text-slate-200 font-extrabold font-serif max-md:text-2xl max-sm:text-xl">
              DSA Cracker
            </div>
            <div className="text-2xl text-slate-300 text-center font-serif max-md:text-xl max-sm:text-lg">
              Your Gateway to crack DSA 🔥
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
