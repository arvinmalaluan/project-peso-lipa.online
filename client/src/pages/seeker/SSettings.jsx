import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import GeneralSettings from "../GeneralSettings";

const SSettings = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="hidden lg:block">
        <SideNav />
      </div>

      <GeneralSettings />
    </div>
  );
};

export default SSettings;
