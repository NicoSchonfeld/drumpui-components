"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedComponents = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDrop = () => {
    setOpenDropdown(!openDropdown);
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <div>
        <button
          onClick={toggleModal}
          className="transition rounded border border-pink-600 
bg-pink-600 px-4 py-2 text-sm font-medium text-white
hover:bg-pink-700 hover:border-pink-700 
hover:text-white focus:outline-none"
        >
          Open Modal
        </button>

        <AnimatePresence>
          {openModal && (
            <div className="fixed top-0 left-0 bg-black/10 w-full h-[100%] flex items-center justify-center backdrop-blur-sm z-50 px-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl w-full h-auto max-w-[600px] rounded shadow-xl relative"
              >
                <div className="flex items-center justify-between p-4">
                  <span className="text-lg font-bold text-gray-800 dark:text-white">
                    Lorem, ipsum dolor.
                  </span>
                  <span className="cursor-pointer" onClick={toggleModal}>
                    <svg
                      className="transition hover:bg-gray-200 dark:hover:bg-gray-900 rounded"
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
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </span>
                </div>

                <hr />

                <div className="px-4 py-5 space-y-3">
                  <p className="text-gray-800 dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, molestiae. Totam excepturi laboriosam
                    necessitatibus consequatur voluptas pariatur, asperiores
                    nemo dolorem?
                  </p>

                  <p className="text-gray-800 dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, nostrum.
                  </p>
                </div>

                <hr />

                <div className="py-3 px-4 w-full h-full flex items-center justify-end space-x-4">
                  <button className="transition rounded border border-red-600  px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-white">
                    Close
                  </button>

                  <button
                    onClick={toggleModal}
                    className="transition rounded border border-green-600 bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 hover:border-green-700 hover:text-white focus:outline-none focus:ring active:text-white"
                  >
                    Accept
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <div>
        <div className="relative">
          <div className="inline-flex items-center overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black">
            <button
              className="h-full flex items-center gap-2 p-2 text-gray-600 dark:text-gray-100 dark:hover:bg-black hover:bg-gray-50 hover:text-gray-700"
              onClick={toggleDrop}
            >
              <span>Menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  openDropdown
                    ? "h-5 w-5 rotate-180 transition-all"
                    : "h-5 w-5 transition-all"
                }
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {openDropdown && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute z-10 mt-2 w-56 rounded-md border border-gray-100 dark:border-white/20 bg-white shadow-lg dark:bg-black"
                role="menu"
              >
                <div className="p-2">
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    View on Storefront
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    View Warehouse Info
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Duplicate Product
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <button
          onClick={toggleDrawer}
          className="transition rounded border border-pink-600 
bg-pink-600 px-4 py-2 text-sm font-medium text-white
hover:bg-pink-700 hover:border-pink-700 
hover:text-white focus:outline-none"
        >
          Open Drawer
        </button>

        <AnimatePresence>
          {openDrawer && (
            <div className="fixed top-0 left-0 bg-gray-900/50 w-full h-[100%] flex items-center justify-center backdrop-blur-sm z-50">
              <motion.div
                initial={{ opacity: 1, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 1, x: 500 }}
                className="w-full md:w-[400px] flex h-screen flex-col justify-between border-e bg-white fixed top-0 right-0"
              >
                <div className="px-4 py-6">
                  <div className="w-full flex items-center justify-between">
                    <span className="grid h-10 w-10 place-content-center rounded-full bg-teal-500 text-xs text-white font-bold"></span>

                    <span
                      onClick={toggleDrawer}
                      className="grid h-7 w-7 place-content-center rounded-sm bg-teal-100 text-xs text-teal-900 font-bold cursor-pointer"
                    >
                      <svg
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
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </span>
                  </div>

                  <div>
                    <p className="mt-10 text-black text-2xl font-bold">
                      Drawer
                    </p>

                    <p className="mt-5 text-black">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nulla vitae molestias, nesciunt nemo nam minus adipisci!
                      Quam itaque dolorum vitae ad, illum, excepturi enim sunt
                      dolore eaque nam iure fuga.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AnimatedComponents;
