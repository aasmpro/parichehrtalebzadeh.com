import React from "react";

import { Menu } from "../components/Menu";
import { PageSwitch } from "./PageSwitch";

export const Layout = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="min-w-[100px] max-w-[100px]">
        <Menu />
      </div>
      <div className="flex-grow">
        <div className="min-h-screen flex flex-row">
          <div className="pl-16 py-16 pr-36 flex-grow">
            <PageSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};
