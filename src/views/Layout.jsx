import React from "react";

import { Menu } from "../components/Menu";
import { PageSwitch } from "./PageSwitch";

export const Layout = () => {
  return (
    <div>
      <div className="hidden md:block">
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
      </div>
      <div className="md:hidden">
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div className="flex flex-row">
              <div className="px-8 pt-10 pb-24 flex-grow">
                <PageSwitch />
              </div>
            </div>
          </div>
        </div>
        <div className="z-50 bg-white min-h-[60px] min-w-full fixed bottom-0 pt-5 px-5">
          <Menu />
        </div>
      </div>
    </div>
  );
};
