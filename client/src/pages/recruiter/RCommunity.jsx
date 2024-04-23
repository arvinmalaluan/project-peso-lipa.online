import React, { useContext, useState } from "react";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import SideNavRecru from "../../components/SideNavRecru";
import GeneralCommunity from "../GeneralCommunity";

const RCommunity = () => {
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
        <SideNavRecru />
      </div>

      <GeneralCommunity onOpen={onOpen} shown={shown} />
    </div>
  );
};

export default RCommunity;
