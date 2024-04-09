import React, { useState } from "react";
import SideNav from "../components/SideNav";
import svgExports from "../assets/svg/exports";
import { hideSideMenu, showSideMenu } from "../utils/functions";

function TabLinks(props) {
  return (
    <div className="pl-2 border-l">
      <a
        href=""
        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100"
      >
        <div className="w-4 h-4">{props.icon}</div>
        <span className="text-sm font-normal">{props.name}</span>
      </a>
    </div>
  );
}

function InputWithIcon(props) {
  return (
    <div class="flex gap-2 items-center mb-2">
      <div class="h-6 w-6 pointer-events-none">{props.icon}</div>
      <input
        type="text"
        id="input-group-1"
        class="bg-gray-50 text-[13px] text-gray-900  w-full p-2 border rounded outline-none"
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

function InputWithLabel(props) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="s-name" className="mb-1 text-xs font-semibold">
        {props.label}
      </label>
      <input
        type="text"
        className="w-full p-2 text-[13px] text-gray-900 border rounded outline-none bg-gray-50"
        id="s-name"
        value={props.value}
      />
    </div>
  );
}

function TextAreaWithLabel(props) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.id} className="mb-1 text-xs font-semibold">
        {props.label}
      </label>
      <textarea
        name=""
        id={props.id}
        rows="5"
        className="w-full p-2 text-[13px] text-gray-900 border rounded outline-none resize-none bg-gray-50"
        value={props.value}
      ></textarea>
    </div>
  );
}

const Settings = () => {
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

      <div className="w-full overflow-y-scroll">
        <div className="max-w-[1200px] m-auto mt-0">
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

          <div className="flex items-center gap-3 px-4 py-4 sm:px-8">
            <div className="flex-shrink-0 ">
              <img
                class="w-12 h-12 rounded-full"
                src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
                alt="Rounded avatar"
              />
            </div>
            <div className="w-full">
              <p className="text-sm font-normal sm:text-xl">
                Arvin Malaluan <br className="sm:hidden" />{" "}
                <span className="text-xs sm:text-xl">(arvinmalaluan)</span>
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
            <div className="hidden col-span-1 md:block">
              <TabLinks
                icon={<svgExports.ProfileIcon />}
                name="Public Profile"
              />
              <TabLinks icon={<svgExports.SettingsIcon />} name="Account" />
              <TabLinks icon={<svgExports.FilterIcon />} name="Appearances" />
              <TabLinks
                icon={<svgExports.NotifOnIcon />}
                name="Notifications"
              />
            </div>

            <div className="col-span-4 md:col-span-3">
              <div className="px-0 md:pl-8 md:pr-4">
                <p className="mb-1 text-sm font-semibold">Public Profile</p>
                <hr />

                <div className="grid grid-cols-1 sm:grid-cols-3 pb-[50px]">
                  <div className="col-span-2 pr-4 mt-4">
                    <div className="block col-span-1 pt-4 sm:hidden">
                      <div className="relative flex flex-col mb-4">
                        <p className="text-sm font-[500] mb-4">
                          Profile Picture
                        </p>
                        <input
                          type="text"
                          className="px-4 py-2 text-sm bg-gray-100 rounded-md outline-none"
                          id="s-name"
                          hidden
                        />
                        <img
                          class="w-[40%] rounded-full"
                          src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
                          alt="Rounded avatar"
                        />
                        <button className="absolute bottom-[20px] h-10 p-2 w-10 bg-gray-100 rounded-full ">
                          <svgExports.CameraIcon />
                        </button>
                      </div>
                    </div>

                    <InputWithLabel label="Name" value="Arvin Malaluan" />
                    <InputWithLabel label="Username" value="@arvinmalaluan" />
                    <TextAreaWithLabel
                      label="Bio"
                      id="s-bio"
                      value="simplicity-at-its-finest"
                    />
                    <InputWithLabel
                      label="Current Address"
                      value="Batangas City"
                    />
                    <InputWithLabel
                      label="Portfolio Link"
                      value="arvin-is.online"
                    />
                    <InputWithLabel label="Gender" value="Male" />
                    <InputWithLabel
                      label="Educational Attainment"
                      value="College Graduate"
                    />

                    <p className="mt-8 mb-1 text-sm font-semibold">
                      Social Links
                    </p>
                    <hr />

                    <div className="mt-4">
                      <InputWithIcon
                        placeholder="https://facebook.com"
                        value="https://facebook.com/haiffu"
                        icon={<svgExports.FacebookIcon />}
                      />
                      <InputWithIcon
                        placeholder="https://facebook.com"
                        value="https://instagram.com/haiffu"
                        icon={<svgExports.InstagramIcon />}
                      />
                      <InputWithIcon
                        placeholder="https://facebook.com"
                        value="https://linkedin.com/haiffu"
                        icon={<svgExports.LinkedInIcon />}
                      />
                    </div>

                    <button className="px-4 py-2 mt-4 text-xs text-white rounded bg-secondary-900">
                      Update Profile
                    </button>
                  </div>

                  <div className="hidden col-span-1 pt-4 pl-8 sm:block">
                    <div className="relative flex flex-col mb-4">
                      <p className="text-sm font-[500] mb-4">Profile Picture</p>
                      <input
                        type="text"
                        className="px-4 py-2 text-sm bg-gray-100 rounded-md outline-none"
                        id="s-name"
                        hidden
                      />
                      <img
                        class="w-[75%] rounded-full"
                        src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
                        alt="Rounded avatar"
                      />
                      <button className="absolute bottom-[20px] h-10 p-2 w-10 bg-gray-100 rounded-full ">
                        <svgExports.CameraIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
