import React from "react";
import SideNav from "../../components/SideNav";
import Cards from "../../components/ui-kits/Cards";
import tinyBlocks from "../../utils/tinyBlocks";

const SearchJobs = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="w-[1240px] flex items-start gap-4 h-auto px-8 m-auto">
          <div className="w-full">
            <div className="sticky top-0 pt-4 pb-2 mb-2 bg-white">
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

            <div id="reco-positions">
              <p className="mb-2 text-sm font-semibold">
                Recommended Positions
              </p>
              <div className="grid grid-cols-4 gap-1">
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

            <div id="job-offers" className="mt-4 ">
              <p className="mb-2 text-sm font-semibold">All Job Vacancies</p>
              <div className="grid grid-cols-2 gap-1">
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

          <div className="w-[260px] py-4 ml-4 sticky top-0 h-screen">
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
