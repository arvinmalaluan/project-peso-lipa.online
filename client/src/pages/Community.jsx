import React from "react";
import SideNav from "../components/SideNav";
import svgExports from "../assets/svg/exports";

function MyRecentPosts() {
  return (
    <div className="flex items-center gap-2">
      <img
        class="w-4 h-4 rounded-full"
        src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
        alt="Rounded avatar"
      />
      <p className="font-[400] text-xs">how to be a good person?</p>
    </div>
  );
}

const Community = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-full h-full overflow-y-scroll ">
        <div className="flex justify-end gap-3 px-4 py-2 mb-2 border-b">
          <input
            type="text"
            placeholder="Search in community"
            className="px-4 py-2 text-xs bg-gray-100 outline-none rounded-full w-[250px]"
          />
          <div>
            <img
              class="w-8 h-8 rounded-full"
              src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
              alt="Rounded avatar"
            />
          </div>
        </div>
        <div className="grid h-full grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="sticky top-0 h-screen pt-4 pl-8 pr-4 overflow-y-scroll no-scrollbar">
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
                <MyRecentPosts />
                <MyRecentPosts />
                <MyRecentPosts />
                <MyRecentPosts />
                <MyRecentPosts />
                <p className="flex gap-2 mt-2 text-xs text-secondary-500">
                  <svgExports.LongArrow />
                  <span>More</span>
                </p>
              </div>

              <p className="text-sm font-semibold">Recent Activity</p>
              <div className="p-4 mt-2 border rounded">
                <p className="text-xs text-gray-500">
                  When you take actions across GitHub, we’ll provide links to
                  that activity here.
                </p>
              </div>
            </div>
          </div>
          <p className="col-span-2 border h-100">
            <div className="h-screen bg-primary-100">hello</div>
            <div className="h-screen bg-primary-500"></div>
          </p>
          <p className="col-span-1 h-100">
            <div className="sticky top-0 h-screen pt-4 pl-4 pr-8 overflow-y-scroll no-scrollbar">
              <p>Hello</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
