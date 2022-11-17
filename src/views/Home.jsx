import React from "react";

import PersonalPicture from "../assets/images/ParichehrTalebzadeh.png";

export const Home = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col justify-between py-10 pl-20">
        <div className="text-6xl text-main-c00">
          <div>Parichehr</div>
          <div className="mt-2">Talebzadeh</div>
        </div>
        <div className="border-l-2 border-main-c11 h-full my-3"></div>
        <div>
          <div className="text-xl text-main-c01">Product Designer</div>
          <div className="text-main-c07 font-thin mt-2">
            Design student since 2017
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-[550px] rounded-md -mb-20 mr-32"
          src={PersonalPicture}
          alt="PersonalPicture"
        />
      </div>
    </div>
  );
};
