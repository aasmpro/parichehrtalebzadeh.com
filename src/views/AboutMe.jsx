import React from "react";

import { aboutMe } from "../data";

export const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <a
          className="inline-block bg-main-c08 text-main-c13 py-1 px-3 rounded-md"
          href="/ParichehrTalebzadeh.CV.pdf"
          target="_blank">
          Download CV
        </a>
      </div>
      <div>
        <div className="text-lg text-gray-1">ME</div>
        <div className="border-b-2 border-secondary w-[40px] my-1.5"></div>
        <div>
          {aboutMe.me.map((item) => (
            <p className="text-gray-2 text-sm">{item}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-row mt-8 space-x-2">
        <div className="w-1/3">
          <div className="text-lg text-gray-1">Experience</div>
          <div className="border-b-2 border-secondary w-[40px] my-1.5"></div>
          <div className="space-y-4">
            {aboutMe.experience.map((item) => (
              <div>
                <div className="text-gray-2 text-sm font-bold">
                  {item.title}
                </div>
                <div className="text-gray-2 text-sm">{item.location}</div>
                <div className="text-gray-2 text-xs font-thin">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <div className="text-lg text-gray-1">Education</div>
          <div className="border-b-2 border-secondary w-[40px] my-1.5"></div>
          <div className="space-y-4">
            {aboutMe.education.map((item) => (
              <div>
                <div className="text-gray-2 text-sm font-bold">
                  {item.title}
                </div>
                <div className="text-gray-2 text-sm">{item.location}</div>
                <div className="text-gray-2 text-xs font-thin">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <div className="text-lg text-gray-1">Skill</div>
          <div className="border-b-2 border-secondary w-[40px] my-1.5"></div>
          <div className="text-gray-2 text-sm">{aboutMe.skill}</div>
        </div>
      </div>
    </div>
  );
};
