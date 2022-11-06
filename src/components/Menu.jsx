import React, { useState } from "react";

import { Link } from "react-router-dom";

export const Menu = () => {
  const items = [
    ["Home", ""],
    ["About Me", "#AboutMe"],
    ["My Work", "#MyWork"],
    ["Contact Me", "#ContactMe"],
  ];
  const [tag, setTag] = useState(window.location.hash);

  return (
    <div className="text-center mt-16 space-y-[75px]">
      {items.map((item) => (
        <div
          className={`transform -rotate-90 ${
            tag === item[1]
              ? "text-primary font-bold"
              : "text-gray-3 text-sm"
          } `}>
          <Link to={item[1]} title={item[0]} onClick={() => setTag(item[1])}>
            {item[0]}
          </Link>
        </div>
      ))}
    </div>
  );
};
