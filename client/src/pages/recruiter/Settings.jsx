import React, { useContext, useState } from "react";
import SideNavRecru from "../../components/SideNavRecru";
import GeneralSettings from "../GeneralSettings";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import generalSettingsContext from "../../context/generalSettingsContext";

const Settings = () => {
  let [shown, setShown] = useState(false);
  const { activeTab } = useContext(generalSettingsContext);

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

      <GeneralSettings onOpen={onOpen} shown={shown} activeTab={activeTab} />
    </div>
  );
};

export default Settings;
