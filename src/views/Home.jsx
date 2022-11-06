import React from "react";

import PersonalPicture from "../assets/images/ParichehrTalebzadeh.png";

export const Home = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col justify-between py-6">
        <div className="text-4xl text-gray-0 font-bold">
          <div>Parichehr</div>
          <div className="mt-2">Talebzadeh</div>
        </div>
        <div className="border-l-2 border-secondary h-full my-3"></div>
        <div>
          <div className="text-xl text-gray-1">Product Designer</div>
          <div className="text-gray-2 font-thin mt-2">
            Design student since 2017
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-[350px] rounded-md"
          src={PersonalPicture}
          alt="PersonalPicture"
        />
      </div>
    </div>
  );
};
