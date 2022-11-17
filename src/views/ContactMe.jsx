import React from "react";

import { PageHeader } from "../components/PageHeader";
import { Card } from "../components/Card";

import { contactMe } from "../data";

export const ContactMe = () => {
  return (
    <div>
      <PageHeader>Get in touch</PageHeader>
      <div className="-mt-6 mb-20">
        <div className="text-main-c08 mb-1">For more works you can checkout my accounts on social medias.</div>
        <div className="text-main-c08">anyway,Let me know if I can help you!</div>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {contactMe.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};
