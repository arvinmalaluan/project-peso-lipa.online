import React from "react";
import useLocationHook from "../hooks/useLocationHook";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  JobPostingIcon,
  CandidateSearchIcon,
  ApplicantTracking,
  MessengerIcon,
  CommunityIcon,
  ProfileIcon,
  SettingsIcon,
} from "../assets/svg/recruiterIcons";

const MyAList = (props) => {
  return (
    <Link
      to={props.path}
      className={`px-4 py-2 rounded  flex gap-2 items-center hover:text-gray-100 ${
        useLocationHook(props.path)
          ? "font-medium apply-glass text-white"
          : "text-gray-300"
      }`}
    >
      <div className="h-[18px] w-[18px]">{props.icon}</div>
      <span>{props.name}</span>
    </Link>
  );
};

const SideNavRecru = () => {
  return (
    <div className="w-100">
      <div
        className="w-[260px] h-full relative p-4 border-r flex flex-col gap-4 bg-secondary-900"
        id="side-bar"
      >
        <div className="flex gap-2 px-4 mb-4">
          <img
            src="https://rec-data.kalibrr.com/www.kalibrr.com/logos/Q9M85F9CS374JN5XP4ECK8K7D4FJKVXE5Z6KS7AH-5ef55667.png"
            alt=""
            className="logo-height"
          />
          <div>
            <p className="font-medium text-white ">PESO-LIPA App</p>
            <p className="text-xs text-gray-300">Admin Side</p>
          </div>
        </div>

        <div className="flex flex-col">
          <MyAList name="Dashboard" path="/dashboard" icon={<HomeIcon />} />
          <MyAList
            name="Job Posting"
            path="/job-posting"
            icon={<JobPostingIcon />}
          />
          <MyAList
            name="Applicant Tracking"
            path="/applicant-tracking"
            icon={<ApplicantTracking />}
          />
          <MyAList
            name="Candidate Search"
            path="/candidate-search"
            icon={<CandidateSearchIcon />}
          />
        </div>

        <hr />

        <div className="flex flex-col">
          <MyAList
            name="Messenger"
            path="/messenger"
            icon={<MessengerIcon />}
          />
          <MyAList
            name="Community"
            path="/community"
            icon={<CommunityIcon />}
          />
        </div>

        <hr />

        <div className="flex flex-col">
          <MyAList name="Profile" path="/profile" icon={<ProfileIcon />} />
          <MyAList name="Settings" path="/settings" icon={<SettingsIcon />} />
        </div>
      </div>
    </div>
  );
};

export default SideNavRecru;
