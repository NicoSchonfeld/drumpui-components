import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="sm:w-[500px] w-[300px] p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-3 py-1">
            <div className="h-5 bg-slate-200"></div>
            <div className="h-5 bg-slate-200"></div>
            <div className="h-5 bg-slate-200"></div>
          </div>
        </div>
      </div>

      <div className="sm:w-[500px] w-[300px] p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-3 py-1">
            <div className="h-10 bg-slate-200"></div>
          </div>
        </div>
      </div>

      <div className="sm:w-[500px] w-[300px] p-4">
        <div className="animate-pulse flex flex-col space-y-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-200 "></div>
            <div className="h-2 bg-slate-200 "></div>
            <div className="h-2 bg-slate-200 "></div>
            <div className="w-[75%] h-2 bg-slate-200 "></div>
          </div>
        </div>
      </div>

      <div className="sm:w-[500px] w-[300px] p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-200"></div>
            <div className="h-2 bg-slate-200"></div>
            <div className="h-2 bg-slate-200"></div>
            <div className="h-2 bg-slate-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
