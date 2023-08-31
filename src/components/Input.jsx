"use client";

import React, { useState } from "react";

const Input = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="This is a input"
          className="text-gray-600  transition rounded border dark:border-white/20 px-3 py-1 bg-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
        />
      </div>

      <div>
        <span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
          <span className="flex items-center justify-center text-sm md:text-base p-2 text-gray-600 bg-gray-200">
            +54
          </span>
          <input
            id="input"
            placeholder="9999999999"
            type="number"
            className="transition rounded border dark:border-white/20 px-3 py-1 bg-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 "
          />
        </span>

        <span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
          <span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200 text-sm md:text-base">
            https://
          </span>
          <input
            id="input"
            placeholder="website"
            type="text"
            className="w-40 md:w-auto transition rounded border dark:border-white/20 px-3 py-1 bg-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 "
          />
          <span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200 text-sm md:text-base">
            .com
          </span>
        </span>
      </div>

      <div>
        <span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
          <input
            id="input"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            className="transition rounded border dark:border-white/20 px-3 py-1 bg-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 "
          />

          <button
            className="flex items-center justify-center px-2 text-gray-600 bg-white"
            onClick={togglePassword}
          >
            {showPassword ? (
              <>
                <svg
                  class="w-5 h-5"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                  <path d="M1 1l22 22" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  class="w-5 h-5"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </>
            )}
          </button>
        </span>
      </div>

      <div>
        <select
          className="transition rounded border dark:border-white/20 focus:outline-none focus:ring-2
focus:ring-inset focus:ring-pink-600 text-gray-600
 w-[18rem] px-2 py-1.5 bg-white "
        >
          <option value="option 1" className="!text-gray-600">
            option 1
          </option>
          <option value="option 2" className="!text-gray-600">
            option 2
          </option>
          <option value="option 3" className="!text-gray-600">
            option 3
          </option>
        </select>
      </div>
    </>
  );
};

export default Input;
