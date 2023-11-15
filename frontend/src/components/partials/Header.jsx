import { Link } from "react-router-dom";
import {
  PiHouseBold,
  PiInfoBold,
  PiMapPinBold,
  PiMoonBold,
  PiSunBold,
} from "react-icons/pi";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex bg-slate-800 m-1 rounded-xl text-5xl py-2 sticky top-0 max-md:text-4xl max-sm:text-3xl max-md:m-0 max-md:rounded-none">
      <div className="flex basis-11/12 justify-center gap-5">
        <Link to="/">
          <PiHouseBold className=" text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
        <Link to="/about">
          <PiInfoBold className=" text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
        <Link
          to="https://docs.google.com/spreadsheets/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/edit#gid=1773184282"
          target="_blank"
        >
          <PiMapPinBold className=" text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
      </div>
      <div className="flex justify-center basis-1/12">
        {isDarkMode ? (
          <PiSunBold
            className=" text-fuchsia-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
            onClick={toggleMode}
          />
        ) : (
          <PiMoonBold
            className="text-fuchsia-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
            onClick={toggleMode}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
