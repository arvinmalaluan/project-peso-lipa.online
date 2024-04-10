import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import GeneralProfile from "../GeneralProfile";

const Profile = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="hidden lg:block">
        <SideNav />
      </div>

      <GeneralProfile />
    </div>
  );
};

export default Profile;
