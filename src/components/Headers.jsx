"use client";

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Headers = () => {
  return (
    <div className="space-y-5">
      <header className="bg-gray-900 w-full py-3">
        <nav className="container mx-auto flex items-center justify-between px-10">
          <div>
            <p className="md:text-2xl text-md font-bold text-white">
              Logotipo.
            </p>
          </div>

          <div className="md:sr-only not-sr-only text-white text-lg">
            <RxHamburgerMenu />
          </div>

          <ul className="flex items-center gap-5 md:not-sr-only sr-only">
            {listNav?.map((dato) => (
              <li key={dato.id} className="text-gray-400 hover:text-pink-600">
                <a href={dato.path}>{dato.title}</a>
              </li>
            ))}
          </ul>

          <div className="space-x-5 md:not-sr-only sr-only">
            <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
              Login
            </button>

            <button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
              Register
            </button>
          </div>
        </nav>
      </header>

      <header className="bg-gray-900 w-full py-3">
        <nav className="container mx-auto flex items-center justify-between px-10">
          <div>
            <p className="md:text-2xl text-md font-bold text-white">
              Logotipo.
            </p>
          </div>

          <div className="md:sr-only not-sr-only text-white text-lg">
            <RxHamburgerMenu />
          </div>

          <div className="flex items-center gap-10 md:not-sr-only sr-only">
            <ul className="flex items-center gap-5">
              {listNav?.map((dato) => (
                <li key={dato.id} className="text-gray-400 hover:text-pink-600">
                  <a href={dato.path}>{dato.title}</a>
                </li>
              ))}
            </ul>

            <div className="space-x-5">
              <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                Login
              </button>

              <button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                Register
              </button>
            </div>
          </div>
        </nav>
      </header>

      <header className="bg-gray-900 w-full py-3">
        <nav className="container mx-auto flex items-center justify-between px-10">
          <div className="flex items-center gap-5">
            <p className="md:text-2xl text-md font-bold text-white">
              Logotipo.
            </p>

            <ul className="flex items-center gap-5 md:not-sr-only sr-only">
              {listNav?.map((dato) => (
                <li key={dato.id} className="text-gray-400 hover:text-pink-600">
                  <a href={dato.path}>{dato.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:sr-only not-sr-only text-white text-lg">
            <RxHamburgerMenu />
          </div>

          <div className="space-x-5 md:not-sr-only sr-only">
            <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
              Login
            </button>

            <button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
              Register
            </button>
          </div>
        </nav>
      </header>

      <header className="bg-gray-900 w-full py-3">
        <nav className="container mx-auto flex items-center justify-between px-10">
          <div>
            <p className="md:text-2xl text-md font-bold text-white">
              Logotipo.
            </p>
          </div>

          <div className="md:sr-only not-sr-only text-white text-lg">
            <RxHamburgerMenu />
          </div>

          <ul className="flex items-center gap-5 md:not-sr-only sr-only">
            {listNav?.map((dato) => (
              <li key={dato.id} className="text-gray-400 hover:text-pink-600">
                <a href={dato.path}>{dato.title}</a>
              </li>
            ))}
          </ul>

          <div className="space-x-5 md:not-sr-only sr-only">
            <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
              Login
            </button>

            <button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
              Register
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Headers;
