import React from "react";

export const PageHeader = ({ children, hasButton }) => {
  return (
    <div className="flex justify-between mb-10">
      <div className="text-3xl text-main-c03">{children}</div>
      {hasButton ? (
        <div>
          <a
            className="inline-block bg-main-c08 text-main-c13 py-1.5 px-3 rounded-md text-center"
            href="/ParichehrTalebzadeh.CV.pdf"
            target="_blank">
            Download my Resume
          </a>
        </div>
      ) : null}
    </div>
  );
};
