import React, { useContext, useState } from "react";
import tinyBlocks from "../utils/tinyBlocks";
import { hideSideMenu, showSideMenu } from "../utils/functions";
import { SearchNav } from "../components/common/SearchNav";
import SideNav from "../components/SideNav";
import { ProfileFirstGridSystem } from "../components/__profile/__components";
import generalLoginContext from "../context/authentication/generalLoginContext";
import authenticatedContext from "../context/authentication/authenticatedContext";
import img from "../assets/images/default_image.png";

const GeneralProfile = () => {
  let [shown, setShown] = useState(false);
  const { authenticator } = useContext(generalLoginContext);
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
    <>
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
        <div className="m-w-[1240px] grid grid-cols-12 gap-4 h-auto px-0 m-auto mb-8">
          <SearchNav onOpen={onOpen} shown={shown} />

          <div className="flex flex-col items-start col-span-12 gap-4 px-4 mb-4 sm:px-8 sm:mb-4 md:pl-8 md:pr-0 sm:flex-row md:col-span-3 md:block">
            <img
              className="md:w-full md:mx-auto overflow-hidden rounded-full w-[100px] aspect-square object-cover object-center"
              src={profile && profile.image ? profile.image : img}
            />

            <div className="flex flex-col w-full sm:items-start sm:justify-between sm:flex-row md:flex-col">
              <div>
                <p className="mt-0 text-2xl font-semibold md:mt-4">
                  {profile.name ? profile.name : "Not set"}
                </p>

                <p className="mt-0 text-sm md:mt-4">
                  {profile.bio ? profile.bio : "Not set"}
                </p>
              </div>

              <button className="w-full py-2 mt-4 text-sm border rounded sm:mt-0 md:mt-4 sm:px-4 sm:w-auto md:w-full hover:bg-secondary-900 hover:text-white">
                Edit Profile
              </button>

              <div className="hidden mt-4 md:block">
                <p className="text-xs text-gray-500 cursor-pointer hover:underline hover:text-blue-600">
                  {profile.location && profile.location}
                </p>
                <p className="text-xs text-gray-500 cursor-pointer hover:underline hover:text-blue-600">
                  {profile.fb_link && profile.fb_link}
                </p>
                <p className="text-xs text-gray-500 cursor-pointer hover:underline hover:text-blue-600">
                  {profile.ig_link && profile.ig_link}
                </p>
                <p className="text-xs text-gray-500 cursor-pointer hover:underline hover:text-blue-600">
                  {profile.ln_link && profile.ln_link}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 px-4 sm:px-8 md:col-span-9">
            {authenticator.role === 2 && (
              <div className="w-full mb-8">
                <p className="text-sm font-semibold">Resume Objective</p>
                <p className="p-4 mt-2 text-sm border rounded">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi consectetur sunt maxime dolorem obcaecati alias nisi
                  accusamus earum expedita, necessitatibus quae maiores, neque,
                  minima quibusdam ratione vel eaque ut optio esse corporis
                  praesentium? Autem quia, maxime temporibus explicabo
                  consectetur ipsam!
                </p>
              </div>
            )}

            <div className="">
              <p className="text-sm font-semibold">
                {authenticator.role === 2
                  ? "Compatible Positions"
                  : "Jobs Posted"}
              </p>

              <ProfileFirstGridSystem role={authenticator.role} />
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
    </>
  );
};

export default GeneralProfile;
