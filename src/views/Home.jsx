import React from "react";

import PersonalPicture from "../assets/images/ParichehrTalebzadeh.png";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-col justify-between h-full py-14 pl-14">
        <div className="text-7xl text-main-c00">
          <div>Parichehr</div>
          <div className="mt-1">Talebzadeh</div>
        </div>
        <div className="border-l-2 border-main-c11 h-full my-3"></div>
        <div>
          <div className="text-xl text-main-c01">Product Designer</div>
          <div className="text-main-c07 font-thin mt-2">
            Design student since 2017
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-1/4 -mr-14">
        <img
          className="w-[570px]"
          src={PersonalPicture}
          alt="PersonalPicture"
        />
      </div>
    </div>
  );
};
