import { Link } from "react-router-dom";
import {
  PiHouseBold,
  PiInfoBold,
  PiMapPinBold,
  PiMoonBold,
  PiSunBold,
} from "react-icons/pi";

const Header = () => {
  return (
    <>
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
        <div className="basis-1/12">
          <PiSunBold className=" text-fuchsia-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
          <PiMoonBold className="hidden text-fuchsia-400 hover:white-black hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Header;
