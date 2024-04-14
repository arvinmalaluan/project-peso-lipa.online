import React, { useContext } from "react";
import svgExports from "../../assets/svg/exports";
import { useNavigate } from "react-router-dom";

export const Cards = (props) => {
  const navigate = useNavigate();

  function openJobPost() {
    navigate(`/post/${props.data.id}`);
  }

  return (
    <div
      className="w-full rounded h-auto p-4 hover:bg-[#292929] hover:text-white"
      onClick={openJobPost}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-gray-500">
            {props.data.name ? props.data.name : "Loading ..."}
          </p>
          <p className="font-[500]  line-clamp-1">{props.data.job_title}</p>
        </div>

        <img src="" className="w-10 h-10 bg-gray-50" alt="company-logo" />
      </div>

      <div>
        <p className="mt-4 mb-2">Job Description</p>
        <p className="text-xs text-gray-500 line-clamp-5">
          {props.data.job_description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-8">
        <span className="px-4 py-2 text-xs text-white bg-gray-700 rounded-full">
          {props.data.employment_type}
        </span>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3">
            <svgExports.MapLocation />
          </div>
          <span className="text-xs mt-[2px]">{props.data.location}</span>
        </div>
      </div>
    </div>
  );
};
