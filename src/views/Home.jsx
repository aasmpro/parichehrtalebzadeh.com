import React from "react";

import PersonalPicture from "../assets/images/ParichehrTalebzadeh.png";

export const Home = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col justify-between h-full py-14 pl-14">
            <div className="text-7xl text-main-c00">
              <div>Parichehr</div>
              <div className="mt-1">Talebzadeh</div>
            </div>
            <div className="border-l-2 border-main-c11 min-h-[100px] my-3"></div>
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
      </div>
      <div className="md:hidden">
        <div>
          <div className="text-5xl text-main-c00">
            <div>Parichehr</div>
            <div className="-mt-1">Talebzadeh</div>
          </div>
          <div className="border-b-2 border-main-c11 w-[200px] my-6"></div>
          <div>
            <div className="text-xl text-main-c01">Product Designer</div>
            <div className="text-main-c07 font-thin mt-2">
              Design student since 2017
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full">
          <div className="flex justify-center">
            <img
              className="h-[360px]"
              src={PersonalPicture}
              alt="PersonalPicture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
