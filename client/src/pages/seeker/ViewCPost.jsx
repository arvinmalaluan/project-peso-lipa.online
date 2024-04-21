import React, { useContext, useEffect, useState } from "react";
import svgExports from "../../assets/svg/exports";
import { AboutTheJob, CompanyInformationTab, } from "../../components/__home_page/__components"; // prettier-ignore
import SideNav from "../../components/SideNav";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import { SearchNav } from "../../components/common/SearchNav";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import ViewCommunityPost from "../ViewCommPost";

const ViewCPost = (props) => {
  const { profile } = useContext(authenticatedContext);

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

      <div className="absolute hidden w-screen" id="side-nav-small-screen">
        <div className="absolute h-screen bg-white">
          <SideNav />
        </div>
        <div
          className="w-full h-screen bg-darkBackground-100"
          onClick={onClose}
        ></div>
      </div>

      <div className="w-full">
        <div className="px-0 m-auto">
          <SearchNav onOpen={onOpen} shown={shown} />

          <ViewCommunityPost />
        </div>
      </div>
    </div>
  );
};

export default ViewCPost;
