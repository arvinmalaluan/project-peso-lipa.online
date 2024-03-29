import React from "react";
import useLocationHook from "../hooks/useLocationHook";
import { Link } from "react-router-dom";
import { HomeIcon } from "../assets/svg/recruiterIcons";

const MyAList = (props) => {
  return (
    <Link
      to={props.path}
      className={`px-2 py-1 rounded  flex items-center hover:bg-gray-200 ${
        useLocationHook(props.path) ? "font-semibold" : "text-gray-500"
      }`}
    >
      <div className="h-[22px] w-[22px]">
        <HomeIcon />
      </div>
      <span>{props.name}</span>
    </Link>
  );
};

const SideNavRecru = () => {
  return (
    <div className="w-100">
      <div
        className="w-[260px] h-full relative px-8 py-4 border-r"
        id="side-bar"
      >
        <p className="px-2 mb-1 text-xs font-medium">Management</p>
        <div className="flex flex-col ">
          <MyAList name="Dashboard" path="/dashboard" />
          <MyAList name="Job Posting" path="/job-posting" />
          <MyAList name="Applicant Tracking" path="/applicant-tracking" />
          <MyAList name="Candidate Search" path="/candidate-search" />
        </div>

        <p className="px-2 mt-8 mb-1 text-xs font-medium">Interaction</p>
        <div className="flex flex-col ">
          <MyAList name="Messenger" path="/messenger" />
          <MyAList name="Community" path="/community" />
        </div>

        <p className="px-2 mt-8 mb-1 text-xs font-medium">Profile & Settings</p>
        <div className="flex flex-col ">
          <MyAList name="Profile" path="/profile" />
          <MyAList name="Settings" path="/settings" />
        </div>
      </div>
    </div>
  );
};

export default SideNavRecru;
