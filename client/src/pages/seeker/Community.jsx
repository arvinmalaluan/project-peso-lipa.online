import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import GeneralCommunity from "../GeneralCommunity";
import { hideSideMenu, showSideMenu } from "../../utils/functions";

const Community = () => {
  let [shown, setShown] = useState(false);

  function onOpen() {
    showSideMenu();
    setShown(true);
  }

  function onClose() {
    hideSideMenu();
    setShown(false);
  }

  return (
    <div className="flex w-screen h-screen">
      <div className="hidden lg:block">
        <SideNav />
      </div>

      <div className="absolute z-10 hidden w-screen" id="side-nav-small-screen">
        <div className="absolute h-screen bg-white">
          <SideNav />
        </div>
        <div
          className="w-full h-screen bg-darkBackground-100"
          onClick={onClose}
        ></div>
      </div>

      <GeneralCommunity onOpen={onOpen} shown={shown} />
    </div>
  );
};

export default Community;
