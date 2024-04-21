import React from "react";
import { SearchNav } from "../components/common/SearchNav";
import svgExports from "../assets/svg/exports";
import { PublicProfile, TabLinks } from "../components/__settings/__components";
import img from "../assets/images/default_image.png";

const GeneralSettings = (props) => {
  return (
    <div className="w-full overflow-y-scroll">
      <div className="mt-0">
        <SearchNav onOpen={props.onOpen} shown={props.shown} />

        <div
          className={
            props.shown
              ? "flex bg-white items-center gap-3 px-4 py-2 my-2 sm:px-8"
              : "flex sticky top-[56px] bg-white z-[9] items-center gap-3 px-4 py-2 my-2 sm:px-8"
          }
        >
          <div className="flex-shrink-0 ">
            <img
              className="w-8 h-8 rounded-full"
              src={profile && profile.img ? profile.img : img}
              alt="Rounded avatar"
            />
          </div>
          <div className="w-full">
            <p className="text-xs font-normal ">
              Arvin Malaluan <br className="sm:hidden" />{" "}
              <span className="text-xs">(arvinmalaluan)</span>
            </p>
            <p className="text-sm font-normal hidden sm:block text-[gray]">
              Your personal account
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
            {props.activeTab === "#public-profile" && <PublicProfile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
