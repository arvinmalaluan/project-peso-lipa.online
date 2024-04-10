import React, { useContext } from "react";
import { FormatProfileText, FormatText, TextWithIcon, } from "./__sub_components"; // prettier-ignore
import svgExports from "../../assets/svg/exports";
import seekerHomeContext from "../../context/seekerHomeContext";

export const AboutTheJob = (props) => {
  return (
    <>
      <p className="mb-2 font-semibold">About the job</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <FormatText label="Job Title" data={props.job_data.job_title} />
        {/* prettier-ignore */}
        <FormatText label="Employment type" data={props.job_data.employment_type} />
        {/* prettier-ignore */}
        <FormatText label="Required Education" data={props.job_data.required_education} />
        {/* prettier-ignore */}
        <FormatText label="Salary" data={props.job_data.salary} />
        {/* prettier-ignore */}
        <FormatText label="Application Deadline" data={props.job_data.application_deadline} />
        {/* prettier-ignore */}
        <FormatText label="Contact Email" data={props.job_data.email_address} />
      </div>

      <p className="mt-8 mb-2 font-semibold">More information</p>
      <div className="mt-2">
        {/* prettier-ignore */}
        <TextWithIcon label="Job Description" data={props.job_data.job_description} />
        {/* prettier-ignore */}
        <TextWithIcon label="Required Skills" data={props.job_data.required_skills} />
        {/* prettier-ignore */}
        <TextWithIcon label="Qualifications" data={props.job_data.qualifications} />
        {/* prettier-ignore */}
        <TextWithIcon label="Responsibilities" data={props.job_data.responsibilities} />
        {/* prettier-ignore */}
        <TextWithIcon label="Benefits" data={props.job_data.benefits} />
      </div>
    </>
  );
};

export const CompanyInformationTab = (props) => {
  return (
    <div className="sticky top-[74px]">
      <img
        className="w-[100px] h-[100px] mb-2 rounded"
        src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Default avatar"
      />

      <FormatProfileText name={props.company.name} title={true} />
      <FormatProfileText name={props.company.bio} bio={true} />

      <div className="mt-4">
        {/* prettier-ignore */}
        <FormatProfileText name={props.company.current_address} icon={<svgExports.MapLocation />} />
        {/* prettier-ignore */}
        <FormatProfileText name={props.company.fb_link} icon={<svgExports.FacebookIcon />} />
        {/* prettier-ignore */}
        <FormatProfileText name={props.company.ig_link} icon={<svgExports.InstagramIcon />} />
        {/* prettier-ignore */}
        <FormatProfileText name={props.company.ln_link} icon={<svgExports.LinkedInIcon />} />
      </div>

      <p className="mt-8 text-sm font-semibold">Other Job Vacancies</p>
    </div>
  );
};

export const Cards = (props) => {
  const { setActivePost } = useContext(seekerHomeContext);

  function openJobPost() {
    setActivePost((prev) => props.data);
  }

  return (
    <div
      className="w-full rounded h-auto p-4 hover:bg-[#292929] hover:text-white"
      onClick={openJobPost}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-gray-500">Company Name</p>
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
