import React, { useContext, useState } from "react";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import SideNavRecru from "../../components/SideNavRecru";
import GeneralMessenger from "../GeneralMessenger";
import GeneralMessengerContextProvider from "../../context/generalMessengerContextProvider";

const Messenger = () => {
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

      <GeneralMessengerContextProvider>
        <GeneralMessenger onOpen={onOpen} shown={shown} />
      </GeneralMessengerContextProvider>
    </div>
  );
};

export default Messenger;
