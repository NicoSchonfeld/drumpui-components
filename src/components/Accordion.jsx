import React from "react";

const Accordion = () => {
  return (
    <>
      <details
        className="group [&_summary::-webkit-details-marker]:hidden transition-all max-w-[500px] min-w-[200px]"
        open
      >
        <summary className="sm:w-[400px] flex cursor-pointer items-center justify-between border-b gap-1.5 p-4 text-black  transition-all">
          <h2 className="font-medium">This is a title of a Accordion.</h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
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
        </summary>

        <p className="py-5 px-4 leading-relaxed text-black  border-b transition-all sm:w-[400px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
    </>
  );
};

export default Accordion;
