import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import Cards from "../../components/ui-kits/Cards";
import tinyBlocks from "../../utils/tinyBlocks";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import svgExports from "../../assets/svg/exports";

const SearchJobs = () => {
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

      <div className="absolute hidden w-screen" id="side-nav-small-screen">
        <div className="absolute h-screen bg-white">
          <SideNav />
        </div>
        <div
          className="w-full h-screen bg-darkBackground-100"
          onClick={onClose}
        ></div>
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="max-w-[1240px] flex items-start gap-4 h-auto px-0 md:px-8 m-auto">
          <div className="w-full ">
            <div
              className={
                shown
                  ? "flex items-center justify-between w-full col-span-12 px-4 sm:px-8 py-3 md:px-0 bg-white border-b"
                  : "sticky top-0 z-10 flex items-center justify-between w-full col-span-12 px-4 md:px-0 sm:px-8 py-3 bg-white border-b"
              }
            >
              <button
                className="w-8 h-8 p-1 text-white rounded lg:hidden no-border bg-secondary-900"
                onClick={onOpen}
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

            <div
              className={
                shown
                  ? "pt-4 pb-2 mb-2 bg-white px-4 md:px-0"
                  : "sticky top-[59px] pt-2 pb-4 mb-2  bg-white px-4 sm:px-8 md:px-0"
              }
            >
              <div className="flex overflow-hidden border rounded">
                <input
                  type="text"
                  placeholder="Job title, keywords or company"
                  className="w-full px-4 py-2 text-xs border-r"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-2 text-xs border-r"
                />
                <button className="px-4 py-2 text-xs text-white bg-blue-500 hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>

            <div id="reco-positions" className="px-4 sm:px-8 md:px-0">
              <p className="mb-2 text-sm font-semibold">
                Recommended Positions
              </p>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
              </div>
            </div>

            <div id="job-offers" className="px-4 pb-4 mt-4 md:px-0">
              <p className="mb-2 text-sm font-semibold">All Job Vacancies</p>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="border">
                  <Cards />
                </div>
                <div className="border">
                  <Cards />
                </div>
                <div className="border">
                  <Cards />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[260px] py-4 ml-4 sticky top-0 h-screen hidden md:block">
            <p className="pb-1 ml-6 text-xs border-b font-[500]">
              ON THIS PAGE
            </p>
            <div className="flex flex-col gap-1 px-2 mt-2">
              <a
                href="#reco-positions"
                className="px-4 text-xs text-blue-500 border-l border-blue-500"
              >
                Recommended Positions
              </a>
              <a href="#job-offers" className="px-4 text-xs text-gray-500">
                Job Offers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchJobs;
