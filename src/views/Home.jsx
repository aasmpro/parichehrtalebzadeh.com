import React from "react";

import { LinkButtonName } from "../components/LinkButton";

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        id="info"
        className="min-h-screen flex flex-col justify-center items-center">
        <div className="sm:w-[500px] w-screen p-5 py-20 text-lg select-none">
          <p className="mb-4">
            Hi! I'm a Team Leader & Web Developer, currently working as
            FullStack Developer at
            <LinkButtonName
              name="CurrentCompany"
              useIcon={false}
              className="mx-2 px-2"
            />
            , the world's largest feedback platform that aims to optimize the
            travel experience from the right hotel to the perfect stay.
          </p>
        </div>
      </div>
    </div>
  );
};
