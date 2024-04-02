import React from "react";
import SideNav from "../../components/SideNav";
import Cards from "../../components/ui-kits/Cards";
import svgExports from "../../assets/svg/exports";
import { hideSideMenu, showSideMenu } from "../../utils/functions";

const HomePage = () => {
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
          onClick={hideSideMenu}
        ></div>
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="max-w-[1240px] h-auto pb-8 px-8 m-auto">
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

          <div className="w-full mt-4">
            <p className="text-xl font-semibold">Home</p>

            <div className="mt-4">
              <p className="mb-2 text-sm font-[500]">Recommended Jobs</p>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                <div className="border rounded">
                  <Cards />
                </div>
                <div className="border rounded">
                  <Cards />
                </div>
                <div className="border rounded">
                  <Cards />
                </div>
                <div className="border rounded">
                  <Cards />
                </div>
                <div className="border rounded">
                  <Cards />
                </div>
                <div className="border rounded">
                  <Cards />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-2 text-sm font-[500]">Latest Job Posts</p>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                <div className="border rounded">
                  <Cards />
                </div>
                <div className="border rounded ">
                  <Cards />
                </div>
                <div className="border rounded ">
                  <Cards />
                </div>
                <div className="border rounded ">
                  <Cards />
                </div>
                <div className="border rounded ">
                  <Cards />
                </div>
                <div className="border rounded ">
                  <Cards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
