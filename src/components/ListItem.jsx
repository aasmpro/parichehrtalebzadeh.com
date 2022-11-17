import React from "react";

export const ListItem = ({ item }) => {
  if (typeof item === "string" || item instanceof String) {
    return (
      <div className="text-main-c02 text-[10px] list-item ml-3">
        <span className="text-sm ml-2">{item}</span>
      </div>
    );
  } else {
    return (
      <div className="ml-3">
        <div className="text-main-c02 text-[10px] font-bold list-item">
          <span className="text-base ml-2">{item.title}</span>
        </div>
        <div className="text-main-c02 text-sm ml-2">{item.location}</div>
        <div className="text-main-c07 text-xs font-thin ml-2">{item.time}</div>
      </div>
    );
  }
};
