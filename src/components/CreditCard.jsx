import React from "react";
import { BiLogoVisa } from "react-icons/bi";

const CreditCard = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-w-[250px] md:w-[350px] h-[200px] rounded-lg shadow-lg">
        <div className="text-white/50 text-7xl w-full flex items-center justify-end px-5">
          <BiLogoVisa />
        </div>

        <div className="w-full px-5 pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="26"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M8 0H18C19.11 0 20 0.89 20 2V4H16.59L14 6.59V10.59L12 12.59V16H8V12.59L6 10.59V5.41L8 3.41V0ZM16 7.41V10H20V6H17.41L16 7.41ZM4.59 4L6 2.59V0H2C0.89 0 0 0.89 0 2V4H4.59ZM4 10V6H0V10H4ZM6 13.41L4.59 12H0V14C0 15.11 0.89 16 2 16H6V13.41ZM15.41 12L14 13.41V16H18C19.11 16 20 15.11 20 14V12H15.41Z"
              fill="#ffffff60"
            />
          </svg>
        </div>

        <div className="w-full px-5 text-white">
          <p className="text-base md:text-2xl mb-2">1234 5678 9012 3456</p>
          <div className="w-full flex items-center justify-between text-sm pe-10">
            <p className="text-sm">NICOLÁS SCHÖNFELD</p>
            <p>05/35</p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-300 min-w-[250px] md:w-[350px] h-[200px] rounded-lg shadow-lg pt-7 flex items-center justify-start flex-col gap-5">
        <div className="bg-gray-900 w-full h-12"></div>

        <div className="bg-gray-400/50 rounded-lg w-52 md:w-72 h-9 flex items-center justify-end px-5">
          <p className="bg-gray-300 px-2 rounded-md text-gray-600">182</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-52 md:w-60 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-40 md:w-52 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-52 md:w-60 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
