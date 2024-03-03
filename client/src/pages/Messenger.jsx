import React from "react";
import SideNav from "../components/SideNav";
import svgExports from "../assets/svg/exports";

const Messenger = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-full bg-gray-50">
        <div className="flex items-center px-4 py-2 border-b bg-gray-50">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <img
                class="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bordered avatar"
              />
              <div>
                <p className="text-sm font-semibold">Arvin C. Malaluan</p>
                <p className="text-xs text-gray-500">Busy</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-1 rounded-full">
                <div className="w-4 h-4 ">
                  <svgExports.Phone />
                </div>
              </button>

              <button className="p-1 rounded-full">
                <div className="w-4 h-4 ">
                  <svgExports.VideoCall />
                </div>
              </button>

              <button className="p-1 border rounded-full">
                <div className="w-4 h-4 ">
                  <svgExports.MoreButton />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
