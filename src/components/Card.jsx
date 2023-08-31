import React from "react";

const Card = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg border bg-white border-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              Building a SaaS product as a software developer
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              By John Doe
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>
      </div>

      <div>
        <div className="w-[200px] md:w-[400px] bg-white  rounded-lg p-4 shadow-sm shadow-indigo-100 dark:shadow-black/50">
          <img
            alt="photo-1434389677669"
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
            className="h-56 w-full object-cover rounded-md"
          />

          <div className="mt-2">
            <dl>
              <div>
                <dd className="text-sm text-gray-500">$15.000</dd>
              </div>

              <div>
                <dd className="font-medium">Chaqueta Bomber</dd>
              </div>
            </dl>

            <div className="mt-6 w-full">
              <button className="w-full transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
