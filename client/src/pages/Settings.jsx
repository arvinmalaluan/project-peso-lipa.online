import React, { useContext, useState } from "react";
import SideNav from "../components/SideNav";
import svgExports from "../assets/svg/exports";
import { hideSideMenu, showSideMenu } from "../utils/functions";
import { SearchNav } from "../components/common/SearchNav";
import { PublicProfile, TabLinks } from "../components/__settings/__components";
import generalSettingsContext from "../context/generalSettingsContext";
import authenticatedContext from "../context/authentication/authenticatedContext";
import img from "../assets/images/default_image.png";

const Settings = () => {
  let [shown, setShown] = useState(false);
  const { activeTab } = useContext(generalSettingsContext);
  const { profile } = useContext(authenticatedContext);

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

      <div className="w-full overflow-y-scroll">
        <div className="mt-0">
          <SearchNav onOpen={onOpen} shown={shown} />

          <div
            className={
              shown
                ? "flex bg-white items-center gap-3 px-4 py-2 my-2 sm:px-8"
                : "flex sticky top-[56px] bg-white z-[9] items-center gap-3 px-4 py-2 my-2 sm:px-8"
            }
          >
            <div className="flex-shrink-0">
              <img
                className="object-cover object-center w-8 h-8 rounded-full aspect-square"
                src={profile && profile.image ? profile.image : img}
                alt="Rounded avatar"
              />
            </div>
            <div className="w-full">
              <p className="text-sm font-medium ">
                {profile && profile.name ? profile.name : "loading ..."}{" "}
                <br className="sm:hidden" />{" "}
              </p>
            </div>

            <button className="flex items-center flex-shrink-0 gap-3 px-4 py-2 text-xs font-normal rounded">
              <span>Go to profile page</span>
              <div className="w-4 h-4">
                <svgExports.LongArrowRight />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-4 px-4 mt-4 sm:px-8">
            <TabLinks />

            <div className="col-span-4 md:col-span-3">
              {activeTab === "#public-profile" && <PublicProfile />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
