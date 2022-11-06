import React from "react";

import NoIcon from "../assets/works/NoIcon.png";

import MaaxuIcon from "../assets/works/Maaxu.png";
import MaaxuPdf from "../assets/works/ParichehrTalebzadeh.com.Maaxu.pdf";

import GolestanIcon from "../assets/works/Golestan.png";
import GolestanPdf from "../assets/works/ParichehrTalebzadeh.com.Golestan.pdf";

import PolarisIcon from "../assets/works/Polaris.png";
import PolarisPdf from "../assets/works/ParichehrTalebzadeh.com.Polaris.pdf";

import FilalaIcon from "../assets/works/Filala.png";

import LivingMaplesIcon from "../assets/works/LivingMaples.png";

export const MyWork = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-7">
        <div className="basis-1/3">
          <a
            href={MaaxuPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-white hover:border-secondary p-4 rounded-2xl"
            download>
            <div className="flex justify-center mb-6">
              <img
                className="w-[260px] rounded-md"
                src={MaaxuIcon}
                alt="PersonalPicture"
              />
            </div>
            <div className="text-gray-1 text-lg mt-2 mb-1.5">maaxu</div>
            <div className="text-gray-2 text-sm">
              Virtual inventory for social media
            </div>
          </a>
        </div>
        <div className="basis-1/3">
          <a
            href={FilalaIcon}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-white hover:border-secondary p-4 rounded-2xl">
            <div className="flex justify-center mb-6">
              <img
                className="w-[260px] rounded-md"
                src={FilalaIcon}
                alt="PersonalPicture"
              />
            </div>
            <div className="text-gray-1 text-lg mt-2 mb-1.5">Filala</div>
            <div className="text-gray-2 text-sm">
              Children’s storybook & slideshow
            </div>
          </a>
        </div>
        <div className="basis-1/3">
          <a
            href={PolarisPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-white hover:border-secondary p-4 rounded-2xl"
            download>
            <div className="flex justify-center mb-6">
              <img
                className="w-[260px] rounded-md"
                src={PolarisIcon}
                alt="PersonalPicture"
              />
            </div>
            <div className="text-gray-1 text-lg mt-2 mb-1.5">Polaris</div>
            <div className="text-gray-2 text-sm">
              For vision-impaired people
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-row mt-12 space-x-7">
        <div className="basis-1/4">
          <a
            href={LivingMaplesIcon}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-white hover:border-secondary p-4 rounded-2xl">
            <div className="flex justify-center mb-6">
              <img
                className="w-[200px] rounded-md"
                src={LivingMaplesIcon}
                alt="PersonalPicture"
              />
            </div>
            <div className="text-gray-1 text-lg mt-2 mb-1.5">Living maple</div>
            <div className="text-gray-2 text-sm">
              Pill-reminder for canadian seniors
            </div>
          </a>
        </div>
        <div className="basis-1/4">
          <a
            href={NoIcon}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-white hover:border-secondary p-4 rounded-2xl">
            <div className="flex justify-center mb-6">
              <img
                className="w-[200px] rounded-md"
                src={NoIcon}
                alt="PersonalPicture"
              />
            </div>
            <div className="text-gray-1 text-lg mt-2 mb-1.5">Abr hamin</div>
            <div className="text-gray-2 text-sm">
              Smart home application + IOT
            </div>
          </a>
        </div>
        <div className="basis-1/4">
          <a
            href={GolestanPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-white hover:border-secondary p-4 rounded-2xl"
            download>
            <div className="flex justify-center mb-6">
              <img
                className="w-[200px] rounded-md"
                src={GolestanIcon}
                alt="PersonalPicture"
              />
            </div>
            <div className="text-gray-1 text-lg mt-2 mb-1.5">Golestan</div>
            <div className="text-gray-2 text-sm">
              Smart home application + IOT
            </div>
          </a>
        </div>
        <div className="basis-1/4">
          <a
            href={NoIcon}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-white hover:border-secondary p-4 rounded-2xl">
            <div className="flex justify-center mb-6">
              <img
                className="w-[200px] rounded-md"
                src={NoIcon}
                alt="PersonalPicture"
              />
            </div>
            <div className="text-gray-1 text-lg mt-2 mb-1.5">
              Concept Design
            </div>
            <div className="text-gray-2 text-sm">Not based on research</div>
          </a>
        </div>
      </div>
    </div>
  );
};
