import React from "react";
import { Link } from "react-router-dom";

const SheetCard = () => {
  return (
    <div className="grid grid-cols-2 justify-between space-x-10">
      <Link
        to={"/sheet/loveBabbar"}
        className="bg-slate-700 font-serif rounded-2xl hover:shadow-[1px_1px_20px_rgb(256,256,256)] cursor-pointer hover:-translate-y-3 transition ease-in-out duration-300 w-96"
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEO10ue8NTlBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714135658517?e=1741219200&v=beta&t=Kmlti-UUhiQ3hG0yL-NLotBCyCRXB51I4oUNQuGNdfw"
          className="rounded-t-2xl "
        />
        <div className="text-center text-4xl rounded-b-2xl bg-slate-950 text-slate-200 py-2">
          Love Babbar
        </div>
      </Link>
      <Link
        to={"/sheet/shradhaDi"}
        className="bg-slate-700 font-serif rounded-2xl hover:shadow-[1px_1px_20px_rgb(256,256,256)] cursor-pointer hover:-translate-y-3 transition ease-in-out duration-300 w-96"
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQHGNAxeyJhZbQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685972237021?e=1741219200&v=beta&t=jemoZ-VSxFIbM44D3kwmeU6nVyN9fQDj16Dq5qsVTxY"
          className="rounded-t-2xl  "
        />
        <div className="text-center py-2 text-4xl rounded-b-2xl bg-slate-950 text-slate-200 ">
          Shradha Di
        </div>
      </Link>
    </div>
  );
};

export default SheetCard;
