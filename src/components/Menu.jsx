import React, { useState } from "react";

import { Link } from "react-router-dom";

export const Menu = () => {
  const items = [
    ["Home", ""],
    ["About Me", "#AboutMe"],
    ["My Work", "#MyWork"],
    ["Contact Me", "#ContactMe"],
  ];
  const [tag, setTag] = useState("");

  return (
    <div className="space-y-20 text-center pt-10">
      {items.map((item) => (
        <div
          className={`transform ${
            tag === item[1]
              ? "text-primary font-bold"
              : "text-gray-3 -rotate-90"
          } `}>
          <Link to={item[1]} title={item[0]} onClick={() => setTag(item[1])}>
            {item[0]}
          </Link>
        </div>
      ))}
    </div>
  );
};
