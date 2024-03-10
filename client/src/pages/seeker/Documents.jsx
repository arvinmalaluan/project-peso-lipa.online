import React from "react";
import SideNav from "../../components/SideNav";
import tinyBlocks from "../../utils/tinyBlocks";
import Resume from "../../components/--documents/Resume";
import SeekerResumeContextProvider from "../../context/seekerResumeContextProvider";

const Documents = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="w-[1240px] flex items-start gap-4 h-auto px-8 m-auto">
          <SeekerResumeContextProvider>
            <Resume />
          </SeekerResumeContextProvider>

          <div className="w-[260px] py-4 ml-4 sticky top-0 h-screen">
            <p className="pb-1 ml-6 text-xs border-b font-[500]">
              ON THIS PAGE
            </p>
            <div className="flex flex-col gap-6 px-2 mt-2">
              <tinyBlocks.RightSideBar action="Create New" title="Resume" />
              <tinyBlocks.RightSideBar action="Upload" title="TOR" />
              <tinyBlocks.RightSideBar
                action="Upload"
                title="PSA Birth Certificate"
              />
              <tinyBlocks.RightSideBar action="Upload" title="NBI Clearance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
