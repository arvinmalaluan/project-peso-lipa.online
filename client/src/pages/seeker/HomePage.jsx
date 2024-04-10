import React, { useContext, useState } from "react";
import SideNav from "../../components/SideNav";
import { Cards } from "../../components/__home_page/__components";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import { SearchNav } from "../../components/common/SearchNav";
import ViewJobPost from "./ViewJobPost";
import seekerHomeContext from "../../context/seekerHomeContext";
import { job_listings } from "../../components/__home_page/__dummy_data";

const HomePage = () => {
  let [shown, setShown] = useState(false);
  const { activePost, setActivePost } = useContext(seekerHomeContext);

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
        <div className="max-w-[1240px] h-auto pb-8 px-0 m-auto">
          <SearchNav onOpen={onOpen} shown={shown} />

          {activePost ? (
            <div className="w-full px-4 mt-4 sm:px-8">
              <ViewJobPost setActivePost={setActivePost} />
            </div>
          ) : (
            <div className="w-full px-4 mt-4 sm:px-8">
              <p className="text-xl font-semibold">Home</p>

              <div className="mt-4">
                <p className="mb-2 text-sm font-[500]">Recommended Jobs</p>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  {job_listings.map((data, index) => {
                    return (
                      <div className="border rounded" key={index}>
                        <Cards data={data} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-sm font-[500]">Latest Job Posts</p>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  {job_listings.map((data, index) => {
                    return (
                      <div className="border rounded" key={index}>
                        <Cards data={data} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
