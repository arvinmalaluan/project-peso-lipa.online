import React from "react";
import SideNav from "../../components/SideNav";
import tinyBlocks from "../../utils/tinyBlocks";

const Profile = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="w-[1240px] grid grid-cols-12 gap-4 h-auto px-8 m-auto py-8">
          <div className="col-span-3 pl-4 pr-6">
            <div className="w-full mx-auto overflow-hidden rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p className="mt-4 text-2xl font-semibold">Arvin Malaluan</p>
            <p className="text-sm ">@arvinmalaluan</p>

            <p className="mt-4 text-sm">bio</p>

            <button className="w-full py-2 mt-4 text-sm border rounded">
              Edit Profile
            </button>
          </div>

          <div className="col-span-9">
            <div>
              <p className="text-sm">Resume Objective</p>
              <p className="p-4 mt-2 text-sm border rounded">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                consectetur sunt maxime dolorem obcaecati alias nisi accusamus
                earum expedita, necessitatibus quae maiores, neque, minima
                quibusdam ratione vel eaque ut optio esse corporis praesentium?
                Autem quia, maxime temporibus explicabo consectetur ipsam!
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm">Compatible Positions</p>

              <div className="grid grid-cols-4 gap-2 py-2 ">
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

            <p className="mt-8 text-sm">Posts in community</p>

            <div className="grid grid-cols-2 gap-4 mt-2">
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

                <div className="flex gap-4 mt-4">
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

                <div className="flex gap-4 mt-4">
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
