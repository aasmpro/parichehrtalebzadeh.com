import React from "react";

export const TextHeader = ({ children }) => {
  return (
    <div>
      <div className="text-xl text-gray-1">{children}</div>
      <div className="border-b-2 border-main-c05 w-[40px] my-1.5"></div>
    </div>
  );
};
