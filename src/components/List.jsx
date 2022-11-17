import React from "react";

import { TextHeader } from "./TextHeader";
import { ListItem } from "./ListItem";

export const List = ({ title, items, isSimpleList }) => {
  return (
    <div>
      <TextHeader>{title}</TextHeader>
      <div className={`${isSimpleList ? "grid grid-cols-2" : "space-y-5"}`}>
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </div>
    </div>
  );
};
