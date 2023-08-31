import React from "react";
import { BsWhatsapp, BsFacebook, BsTwitter } from "react-icons/bs";

import { ImSpinner8, ImSpinner2 } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Button = () => {
  return (
    <>
      <div>
        <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
          Button
        </button>
      </div>

      <div>
        <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
          Button
        </button>

        <button className="transition rounded border border-pink-600 bg-pink-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
          Button x2
        </button>

        <button className="transition rounded border border-pink-600 bg-pink-600 px-6 py-3 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
          Button x3
        </button>

        <button className="transition rounded border border-pink-600 bg-pink-600 px-7 py-3.5 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
          Button x4
        </button>
      </div>

      <div>
        <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
          Button
        </button>

        <button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600/10 hover:border-pink-600 hover:text-pink-700 focus:outline-none">
          Button
        </button>

        <button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600 hover:border-pink-600 hover:text-white focus:outline-none">
          Button
        </button>

        <button className="transition rounded bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600/10 hover:border-pink-600 hover:text-pink-600 focus:outline-none">
          Button
        </button>
      </div>

      <div>
        <button className="flex items-center gap-2 transition rounded border border-green-500 bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 hover:border-green-600 hover:text-white focus:outline-none">
          <BsWhatsapp /> WhatsApp
        </button>

        <button className="flex items-center gap-2 transition rounded border border-blue-900 bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900/90 hover:border-blue-900/90 hover:text-white focus:outline-none">
          <BsFacebook /> Facebook
        </button>

        <button className="flex items-center gap-2 transition rounded border border-sky-500 bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 hover:border-sky-600 hover:text-white focus:outline-none">
          <svg
            data-testid="geist-icon"
            fill="none"
            height="15"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="15"
          >
            <path
              fill="var(--geist-fill, currentColor)"
              stroke="none"
              d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
            />
          </svg>{" "}
          Twitter
        </button>

        <button className="flex items-center gap-2 transition rounded border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white hover:border-whibg-white hover:text-black focus:outline-none">
          Google
        </button>
      </div>

      <div>
        <button
          disabled
          className="cursor-no-drop transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white"
        >
          Button
        </button>
      </div>

      <div>
        <button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
          <ImSpinner8 className="animate-spin" /> Loading
        </button>

        <button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
          <ImSpinner2 className="animate-spin" /> Loading
        </button>

        <button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
          <FaSpinner className="animate-spin" /> Loading
        </button>

        <button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
          <CgSpinnerTwoAlt className="animate-spin" /> Loading
        </button>
      </div>

      <div>
        <span className="inline-flex overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black shadow-sm">
          <button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
            Button 1
          </button>

          <button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
            Button 2
          </button>

          <button className="transition-all inline-block dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
            Button 3
          </button>
        </span>

        <span className="inline-flex overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black shadow-sm">
          <button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
            Profile
          </button>

          <button className="transition-all inline-block dark:border-e-white/20 px-2 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
            <svg
              className="h-5 w-5 shrink-0 transition duration-300 dark:text-white text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </span>
      </div>
    </>
  );
};

export default Button;
