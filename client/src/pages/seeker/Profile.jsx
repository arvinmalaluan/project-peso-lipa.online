import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import tinyBlocks from "../../utils/tinyBlocks";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import svgExports from "../../assets/svg/exports";

const Profile = () => {
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

      <div className="absolute z-10 hidden w-screen" id="side-nav-small-screen">
        <div className="absolute h-screen bg-white">
          <SideNav />
        </div>
        <div
          className="w-full h-screen bg-darkBackground-100"
          onClick={onClose}
        ></div>
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="m-w-[1240px] grid grid-cols-12 gap-4 h-auto px-0 m-auto">
          <div
            className={
              shown
                ? "flex items-center justify-between w-full col-span-12 px-4 sm:px-8 py-3 bg-white border-b"
                : "sticky top-0 z-10 flex items-center justify-between w-full col-span-12 px-4 sm:px-8 py-3 bg-white border-b"
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

          <div className="flex flex-col items-start col-span-12 gap-4 px-4 mb-4 sm:px-8 sm:mb-4 md:pl-8 md:pr-0 sm:flex-row md:col-span-3 md:block">
            <div className="md:w-full md:mx-auto overflow-hidden rounded-full w-[100px]">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>

            <div className="flex flex-col w-full sm:items-start sm:justify-between sm:flex-row md:flex-col">
              <div>
                <p className="mt-0 text-2xl font-semibold md:mt-4">
                  Arvin Malaluan
                </p>
                <p className="text-sm ">@arvinmalaluan</p>

                <p className="mt-0 text-sm md:mt-4">bio</p>
              </div>

              <button className="w-full py-2 mt-4 text-sm border rounded sm:mt-0 md:mt-4 sm:px-4 sm:w-auto md:w-full">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="col-span-12 px-4 sm:px-8 md:col-span-9">
            <div className="w-full">
              <p className="text-sm font-semibold">Resume Objective</p>
              <p className="p-4 mt-2 text-sm border rounded">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                consectetur sunt maxime dolorem obcaecati alias nisi accusamus
                earum expedita, necessitatibus quae maiores, neque, minima
                quibusdam ratione vel eaque ut optio esse corporis praesentium?
                Autem quia, maxime temporibus explicabo consectetur ipsam!
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold">Compatible Positions</p>

              <div className="grid grid-cols-2 gap-2 py-2 md:grid-cols-3">
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
                <tinyBlocks.CompatibilityCard />
              </div>
            </div>

            <p className="mt-8 text-sm font-semibold">Posts in community</p>

            <div className="grid grid-cols-1 gap-4 mt-2 sm:grid-cols-2">
              <div className="p-4 border rounded">
                <div className="flex items-end justify-between">
                  <p className="text-sm font-semibold">Hello</p>
                  <span className="px-2 py-1 text-xs bg-gray-100 border rounded-full">
                    Public
                  </span>
                </div>
                <p className="mt-2 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid repudiandae dolor quaerat optio reiciendis sint.
                </p>

                <div className="hidden gap-4 mt-4 xl:flex">
                  <p className="text-xs">20 views</p>
                  <p className="text-xs">10 comments</p>
                  <p className="text-xs">30 engagements</p>
                </div>
              </div>

              <div className="p-4 border rounded">
                <div className="flex items-end justify-between">
                  <p className="text-sm font-semibold">Hello</p>
                  <span className="px-2 py-1 text-xs bg-gray-100 border rounded-full">
                    Public
                  </span>
                </div>
                <p className="mt-2 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid repudiandae dolor quaerat optio reiciendis sint.
                </p>

                <div className="hidden gap-4 mt-4 xl:flex">
                  <p className="text-xs">20 views</p>
                  <p className="text-xs">10 comments</p>
                  <p className="text-xs">30 engagements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
