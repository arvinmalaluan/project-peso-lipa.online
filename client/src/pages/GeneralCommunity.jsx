import React from "react";
import svgExports from "../assets/svg/exports";
import TimeLine from "../components/ui-kits/Timeline";
import { SearchNav } from "../components/common/SearchNav";
import { Post, RecentPost } from "../components/__community/__components";

const GeneralCommunity = (props) => {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <SearchNav onOpen={props.onOpen} shown={props.shown} />

      <div className="grid h-[calc(100vh - 59px)] grid-cols-7 gap-4">
        <div className="hidden sm:block sm:col-span-3 lg:col-span-3 xl:col-span-2 md:col-span-3">
          <div className="sticky top-[65px] h-[calc(100vh - 59px)] pt-4 pl-8 pr-4 overflow-y-scroll no-scrollbar">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">My Recent Posts</p>
              <button className="px-4 py-2 text-xs border rounded-full">
                New Post
              </button>
            </div>
            <input
              type="text"
              placeholder="Search your posts here"
              className="w-full px-4 py-2 mt-3 text-xs bg-gray-100 rounded-full outline-none "
            />
            <div className="flex flex-col gap-2 mt-4 mb-8">
              <RecentPost />
              <RecentPost />
              <RecentPost />
              <RecentPost />
              <RecentPost />

              <p className="flex gap-2 mt-2 text-xs text-secondary-500">
                <svgExports.LongArrow />
                <span>More</span>
              </p>
            </div>

            <p className="text-sm font-semibold">Recent Activity</p>
            <div className="p-4 mt-2 border rounded">
              <p className="text-xs text-gray-500">
                When you take actions across GitHub, we’ll provide links to that
                activity here.
              </p>
            </div>

            <p className="block mt-8 text-sm font-semibold xl:hidden">
              Hot in Community
            </p>
            <div className="block xl:hidden">
              <TimeLine />
            </div>
          </div>
        </div>

        <Post />

        <div className="hidden col-span-2 h-100 xl:block">
          <div className="h-[calc(100vh - 59px)] pt-4 pl-4 pr-8 overflow-y-scroll no-scrollbar">
            <div className="p-4 border rounded-sm">
              <p className="text-xs">
                Start building connections and meaningful contents to boost your
                profile.
              </p>
              <button className="w-full mt-4 text-sm rounded-full text-start">
                Get Started
              </button>
            </div>

            <p className="mt-8 text-sm font-semibold">Hot in Community</p>
            <div className="">
              <TimeLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralCommunity;
