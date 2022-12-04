import React from "react";

import { PageHeader } from "../components/PageHeader";
import { TextHeader } from "../components/TextHeader";
import { List } from "../components/List";

import { aboutMe } from "../data";

export const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <PageHeader hasButton={true}>Know me more</PageHeader>
      <div>
        <TextHeader>Me</TextHeader>
        <div>
          {aboutMe.me.map((item) => (
            <p className="text-main-c04 text-sm">{item}</p>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-8 md:space-x-2 md:space-y-0 space-y-8">
        <div className="md:w-1/3">
          <List title="Experience" items={aboutMe.experience} />
        </div>
        <div className="md:w-1/3">
          <List title="Education" items={aboutMe.education} />
        </div>
        <div className="md:w-1/3">
          <List title="Skill" items={aboutMe.skill} isSimpleList={true} />
        </div>
      </div>
    </div>
  );
};
