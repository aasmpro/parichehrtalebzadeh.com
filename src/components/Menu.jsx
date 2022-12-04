import React, { useState } from "react";

import { Link } from "react-router-dom";

import IconHome from "../assets/images/icons/IconHome.png";
import IconHomeActive from "../assets/images/icons/IconHomeActive.png";

import IconAboutMe from "../assets/images/icons/IconAboutMe.png";
import IconAboutMeActive from "../assets/images/icons/IconAboutMeActive.png";

import IconMyWork from "../assets/images/icons/IconMyWork.png";
import IconMyWorkActive from "../assets/images/icons/IconMyWorkActive.png";

import IconContactMe from "../assets/images/icons/IconContactMe.png";
import IconContactMeActive from "../assets/images/icons/IconContactMeActive.png";

export const Menu = () => {
  const items = [
    ["", IconHome, IconHomeActive],
    ["#AboutMe", IconAboutMe, IconAboutMeActive],
    ["#MyWork", IconMyWork, IconMyWorkActive],
    ["#ContactMe", IconContactMe, IconContactMeActive],
  ];
  const [tag, setTag] = useState(window.location.hash);

  return (
    <div>
      <div className="hidden md:block">
        <div className="mt-10 space-y-6">
          {items.map((item) => (
            <div className="flex flex-row justify-center">
              <Link
                to={item[0]}
                title={item[0]}
                onClick={() => setTag(item[0])}>
                <img
                  className="w-[20px] rounded-sm"
                  src={tag === item[0] ? item[2] : item[1]}
                  alt="PersonalPicture"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex justify-around items-center">
          {items.map((item) => (
            <div className="inline-flex flex-row justify-center">
              <Link
                to={item[0]}
                title={item[0]}
                onClick={() => setTag(item[0])}>
                <img
                  className="w-[20px] rounded-sm"
                  src={tag === item[0] ? item[2] : item[1]}
                  alt="PersonalPicture"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
