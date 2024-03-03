import React from "react";
import SideNav from "../../components/SideNav";
import Cards from "../../components/ui-kits/Cards";

const HomePage = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="w-[1240px] h-auto pb-8 px-8 m-auto">
          <div className="flex items-center justify-between mt-4">
            <input
              type="text"
              className="w-2/6 px-4 py-2 text-xs border rounded-full outline-none"
              placeholder="Search here"
            />
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-50"></div>
              <div className="w-8 h-8 rounded-full bg-gray-50"></div>
            </div>
          </div>

          <div className="w-full mt-4">
            <p className="text-xl font-semibold">Home</p>

            <div className="mt-4">
              <p className="mb-2 text-sm font-[500]">Recommended Jobs</p>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-2 text-sm font-[500]">Latest Job Posts</p>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
                  <Cards />
                </div>
                <div className="col-span-4 border rounded">
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
