import { PiMoonBold, PiSunBold } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="footerDiv">
        <div className="fixed left-[94%] top-[80%] active:-translate-y-1 transition ease-in-out duration-200">
          <PiSunBold className="text-5xl text-fuchsia-400 hover:text-black hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
          <PiMoonBold className="hidden text-5xl text-fuchsia-400 hover:text-black hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Footer;
