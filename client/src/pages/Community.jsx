import React from "react";
import SideNav from "../components/SideNav";
import svgExports from "../assets/svg/exports";
import TimeLine from "../components/ui-kits/Timeline";

function MyRecentPosts() {
  return (
    <div className="flex items-center gap-2">
      <img
        class="w-4 h-4 rounded-full"
        src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
        alt="Rounded avatar"
      />
      <p className="font-[400] text-xs">why do birds suddenly appear?</p>
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
        <div className="grid h-full grid-cols-7 gap-4">
          <div className="col-span-2">
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
          <div className="col-span-3 h-100">
            <div className="my-4">
              <input
                type="text"
                placeholder="What is on your mind?"
                className="w-full px-4 py-2 text-sm bg-gray-100 rounded-full"
              />
            </div>

            <div className="border rounded">
              <div className="flex gap-2 p-4 pb-0">
                <div>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
                    alt="Rounded avatar"
                  />
                </div>

                <div className="w-full ">
                  <p className="text-sm">Arvin Malaluan</p>
                  <p className="text-xs text-[gray]">10 mins. ago</p>
                </div>
                <div className="flex gap-3">
                  <button className="w-4 h-4">
                    <svgExports.MoreButton />
                  </button>
                  <button className="w-4 h-4">
                    <svgExports.CloseIcon />
                  </button>
                </div>
              </div>

              <p className="px-4 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                sit fugit tempora aperiam, optio quam aspernatur laborum
                reprehenderit dicta impedit.
              </p>

              <div>
                <img
                  src="https://66.media.tumblr.com/2b541e70a482b5882f610e88d645ee23/tumblr_o8nixwzuhj1t08v6fo1_500.gif"
                  alt=""
                  className="w-full my-2"
                />
              </div>

              <div className="flex items-center gap-3 p-4">
                <button className="flex-shrink-0 w-8 h-8 p-2 bg-gray-100 rounded-full">
                  <svgExports.LikeIcon />
                </button>
                <button className="flex-shrink-0 w-8 h-8 p-2 bg-gray-100 rounded-full">
                  <svgExports.DislikeIcon />
                </button>
                <input
                  type="text"
                  placeholder="Comment your thoughts here"
                  className="w-full px-4 py-2 text-xs bg-gray-100 rounded-full outline-none"
                />
              </div>
            </div>
          </div>
          <p className="col-span-2 h-100">
            <div className="sticky top-0 h-screen pt-4 pl-4 pr-8 overflow-y-scroll no-scrollbar">
              <div className="p-4 border rounded-sm">
                <p className="text-xs">
                  Start building connections and meaningful contents to boost
                  your profile.
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
