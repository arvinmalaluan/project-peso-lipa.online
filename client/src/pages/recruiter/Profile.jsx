import React, { useState } from "react";
import GeneralProfile from "../GeneralProfile";
import SideNavRecru from "../../components/SideNavRecru";

const Profile = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="hidden lg:block">
        <SideNavRecru />
      </div>

      <GeneralProfile />
    </div>
  );
};

export default Profile;
