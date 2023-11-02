import { Link } from "react-router-dom";
import { PiHouseBold, PiInfoBold, PiMapPinBold } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <div className="flex bg-slate-500 justify-center gap-8 my-2 w-[90%]">
        <Link to="/">
          <PiHouseBold className="text-5xl text-fuchsia-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
        <Link to="/about">
          <PiInfoBold className="text-5xl text-fuchsia-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
        <Link to="https://docs.google.com/spreadsheets/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/edit#gid=1773184282" target="_blank">
          <PiMapPinBold className="text-5xl text-fuchsia-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer"/>
        </Link>
      </div>
    </>
  );
};

export default Header;
