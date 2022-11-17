import React from "react";

export const Card = ({ link, image, title, text }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="transition duration-200 group inline-block border border-main-c13 hover:border-main-c10 hover:bg-main-c08 hover:drop-shadow-2xl hover:-translate-y-1 p-4 rounded-2xl">
      <div className="flex justify-center mb-6">
        <img
          className={`${image.className} rounded-md`}
          src={image.file}
          alt={image.alt}
        />
      </div>
      <div className="transition duration-150 text-main-c01 text-lg mt-2 mb-2 group-hover:text-main-c14">
        {title}
      </div>
      <div className="transition duration-150 text-main-c08 text-sm group-hover:text-main-c13 break-words">
        {text}
      </div>
    </a>
  );
};
