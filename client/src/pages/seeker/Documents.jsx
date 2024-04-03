import React from "react";
import SideNav from "../../components/SideNav";
import tinyBlocks from "../../utils/tinyBlocks";
import Resume from "../../components/--documents/Resume";
import SeekerResumeContextProvider from "../../context/seekerResumeContextProvider";
import SpeedDial from "../../components/ui-kits/SpeedDial";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import svgExports from "../../assets/svg/exports";

const Documents = () => {
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
          onClick={hideSideMenu}
        ></div>
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="m-w-[1240px] relative flex items-start gap-4 h-auto px-4 sm:px-8 m-auto">
          <div className="w-full">
            <div className="flex items-center justify-between mt-4">
              <button
                className="w-8 h-8 p-1 text-white rounded lg:hidden no-border bg-secondary-900"
                onClick={showSideMenu}
              >
                <svgExports.BurgerIcon />
              </button>

              <input
                type="text"
                className="hidden w-2/4 px-4 py-2 text-xs border rounded-full outline-none lg:block w-100"
                placeholder="Search here"
              />

              <div className="flex gap-2">
                <input
                  type="text"
                  className="px-4 py-2 text-xs border rounded-full outline-none lg:hidden w-100"
                  placeholder="Search here"
                />
                <div className="w-8 h-8 rounded-full bg-gray-50"></div>
                <div className="w-8 h-8 rounded-full bg-gray-50"></div>
              </div>
            </div>

            <SeekerResumeContextProvider>
              <Resume />
            </SeekerResumeContextProvider>
          </div>

          <SpeedDial />

          <div className="w-[260px] py-4 ml-4 sticky top-0 h-screen hidden lg:block">
            <p className="pb-1 ml-6 text-xs border-b font-[500]">
              ON THIS PAGE
            </p>
            <div className="flex flex-col gap-6 px-2 mt-2">
              <tinyBlocks.RightSideBar action="Create New" title="Resume" />
              <tinyBlocks.RightSideBar action="Upload" title="TOR" />
              <tinyBlocks.RightSideBar
                action="Upload"
                title="PSA Birth Certificate"
              />
              <tinyBlocks.RightSideBar action="Upload" title="NBI Clearance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
