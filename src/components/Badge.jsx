import React from "react";

const Badge = () => {
  return (
    <>
      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
        Info
      </span>

      <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
        <p className="whitespace-nowrap text-sm">Correct</p>
      </span>

      <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
        <p className="whitespace-nowrap text-sm">Warning</p>
      </span>

      <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700">
        <p className="whitespace-nowrap text-sm">Error</p>
      </span>
    </>
  );
};

export default Badge;
