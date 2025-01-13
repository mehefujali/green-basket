import toast from "react-hot-toast";
import CountDown from "../Countdown/CountDown";
import { useState } from "react";
import PropTypes from "prop-types";

const CuponCard = ({ title, off, cupon, sopingAmount, time, image }) => {
  const [copyCupon, setCopyCupon] = useState(false);
  const handleCopyCupon = (cupon) => {
    navigator.clipboard
      .writeText(cupon)
      .then(() => {
        toast.success(`${cupon} COPIED`);
        setCopyCupon(true);
      })
      .catch((err) => {
        toast.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className=" ">
      <div className=" flex  ">
        <div className="flex gap-2  shadow-sm shadow-gray-300 rounded-md  rounded-r-xl">
          <img
            className=" w-16 h-16 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28"
            src={image}
            alt="Discount"
          />
          <div className=" px-3 ">
            <div className="flex gap-4 items-center">
              <h1 className="text-xs xl:text-lg text-primary-color font-bold">
                {off} Off
              </h1>
              <p className="bg-primary-color text-xs xl:text-sm bg-opacity-10 text-primary-color rounded-full px-2">
                Active
              </p>
            </div>
            <h1 className="text-xs xl:text-sm text-red-500 font-bold">
              {title}
            </h1>
            <h1 className="text-primary-color text-xs  mt-2">
              <CountDown time={time} />
            </h1>
          </div>
        </div>
        <div className=" p-2 px-4 w-44 shadow-sm shadow-gray-300 rounded-md border-l-2 border-dashed rounded-l-xl">
          <div
            onClick={() => handleCopyCupon(cupon)}
            className=" bg-primary-color cursor-pointer  bg-opacity-10 lg:text-xs xl:text-lg mx-auto text-primary-color px-2 rounded-sm border-2 border-primary-color border-dashed w-fit flex flex-col items-center"
          >
            {copyCupon ? "COPIED!" : cupon}
          </div>
          <p className=" w-fit text-gray-400 text-xs">
            * This coupon apply when shopping more then{" "}
            <span className=" font-bold text-gray-500">${sopingAmount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

CuponCard.propTypes = {
  title: PropTypes.string.isRequired,
  off: PropTypes.string.isRequired,
  cupon: PropTypes.string.isRequired,
  sopingAmount: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CuponCard;
