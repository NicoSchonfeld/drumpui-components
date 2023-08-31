import Image from "next/image";
import React from "react";

import photoAvatar from "@/assets/photoUserProfile.jpg";

const Avatar = () => {
  return (
    <>
      <Image
        src={photoAvatar}
        width={50}
        height={50}
        className="transition-all rounded-full"
      />

      <Image
        src={photoAvatar}
        width={50}
        height={50}
        className="transition-all rounded-full p-0.5 outline outline-green-500"
      />

      <div className="relative">
        <div className="w-[16px] h-[16px] bg-green-500 rounded-full absolute top-0 right-0 flex items-center justify-center"></div>

        <Image
          src={photoAvatar}
          width={50}
          height={50}
          className="transition-all rounded-full"
        />
      </div>
    </>
  );
};

export default Avatar;
