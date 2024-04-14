import React, { useContext, useEffect, useReducer, useState } from "react";
import SideNav from "../../components/SideNav";
import tinyBlocks from "../../utils/tinyBlocks";
import Resume from "../../components/--documents/Resume";
import SeekerResumeContextProvider from "../../context/seekerResumeContextProvider";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import { SearchNav } from "../../components/common/SearchNav";
import { getFetch } from "../../apis/get.api";
import authenticatedContext from "../../context/authentication/authenticatedContext";

const Documents = () => {
  const [shown, setShown] = useState(false);
  const [files, setFiles] = useState(null);
  const { profile } = useContext(authenticatedContext);

  function onOpen() {
    showSideMenu();
    setShown(true);
  }

  function onClose() {
    hideSideMenu();
    setShown(false);
  }

  useEffect(() => {
    if (profile.id) {
      const url_ext = `documents/my/${profile.id}`;

      getFetch(url_ext)
        .then((data) => {
          setFiles(data.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [profile]);

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
        <div className="m-w-[1240px] relative flex items-start gap-4 h-auto px-0 m-auto">
          <SeekerResumeContextProvider>
            <div className="w-full">
              <SearchNav onOpen={onOpen} shown={shown} />

              <div className="px-4 sm:px-8">
                <Resume />
              </div>
            </div>
            <div className="w-[260px] py-4 mr-4 sticky top-0 h-screen hidden lg:block">
              <p className="pb-1 ml-6 text-xs border-b font-[500]">
                ON THIS PAGE
              </p>

              <div className="flex flex-col gap-6 px-2 mt-2">
                <tinyBlocks.RightSideBar
                  name="resume"
                  action="Create New"
                  title="Resume"
                  datum={
                    files && files.resume_data && files.resume_data.split(",")
                  }
                  profile={profile.id}
                />
                <tinyBlocks.RightSideBar
                  name="tor"
                  action="Upload"
                  title="TOR"
                  datum={files && files.tor}
                  record_exists={files && files.id ? true : false}
                  profile={profile.id}
                  for_update={files && files.id ? files.id : null}
                />
                <tinyBlocks.RightSideBar
                  name="psa"
                  action="Upload"
                  title="PSA Birth Certificate"
                  datum={files && files.psa}
                  record_exists={files && files.id ? true : false}
                  for_update={files && files.id ? files.id : null}
                />
                <tinyBlocks.RightSideBar
                  name="nbi"
                  action="Upload"
                  title="NBI Clearance"
                  datum={files && files.nbi}
                  record_exists={files && files.id ? true : false}
                  profile={profile.id}
                  for_update={files && files.id ? files.id : null}
                />
              </div>
            </div>
          </SeekerResumeContextProvider>
        </div>
      </div>
    </div>
  );
};

export default Documents;
