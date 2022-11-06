import React from "react";

import EmailIcon from "../assets/images/icons/email.png";
import LinkedinIcon from "../assets/images/icons/linkedin.png";
import BehanceIcon from "../assets/images/icons/behance.png";

export const ContactMe = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/3 px-6">
        <div className="flex justify-center mb-6">
          <img
            className="w-[130px] rounded-md"
            src={EmailIcon}
            alt="PersonalPicture"
          />
        </div>
        <div className="text-gray-1 text-lg mb-2">Contact</div>
        <div>
          <p className="text-gray-2 mb-2 text-sm"><a href="tel:+989132194166">+98 913 219 4166</a></p>
          <p className="text-gray-2 text-sm"><a href="mailto:Parichehr.t96@gmail.com">Parichehr.t96@gmail.com</a></p>
        </div>
      </div>
      <div className="basis-1/3 px-6">
        <a
          href="https://www.linkedin.com/in/parichehr-talebzadeh/"
          target="_blank"
          rel="noreferrer">
          <div className="flex justify-center mb-6">
            <img
              className="w-[130px] rounded-md"
              src={LinkedinIcon}
              alt="PersonalPicture"
            />
          </div>
          <div className="text-gray-1 text-lg mb-2">Linkedin</div>
          <div className="text-gray-2 text-sm">Parichehr Talebzadeh</div>
        </a>
      </div>
      <div className="basis-1/3 px-6">
        <a
          href="https://www.behance.net/parichehr-talebzadeh"
          target="_blank"
          rel="noreferrer">
          <div className="flex justify-center mb-6">
            <img
              className="w-[130px] rounded-md"
              src={BehanceIcon}
              alt="PersonalPicture"
            />
          </div>
          <div className="text-gray-1 text-lg mb-2">Behance</div>
          <div className="text-gray-2 text-sm">Parichehr Talebzadeh</div>
        </a>
      </div>
    </div>
  );
};
