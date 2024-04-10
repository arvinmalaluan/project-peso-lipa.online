import React, { useContext, useEffect, useState } from "react";
import svgExports from "../../assets/svg/exports";
import { company_profile, job_listings, } from "../../components/__home_page/__dummy_data"; // prettier-ignore
import { AboutTheJob, CompanyInformationTab, } from "../../components/__home_page/__components"; // prettier-ignore
import seekerHomeContext from "../../context/seekerHomeContext";
import seekerSearchContext from "../../context/seekerSearchJobContext";

const ViewJobPost = (props) => {
  const job_data = job_listings[0];
  const company = company_profile[0];
  const [moreInfo, setMoreInfo] = useState(false);

  function goBack() {
    props.setActivePost((prev) => null);
  }

  function updateMoreInfo() {
    setMoreInfo((prev) => !prev);
  }

  useEffect(() => {
    const element = document.querySelector("#workaround");

    element.focus();
  }, []);

  return (
    <div className="" id="top-view-job-post">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7">
          <div className="flex items-center justify-between mb-8">
            <button
              className="flex items-center gap-2 px-4 py-2 text-xs text-gray-700 bg-gray-200 rounded-full hover:text-white hover:bg-secondary-900"
              onClick={goBack}
            >
              <div className="w-4 h-4">
                <svgExports.BackArrow />
              </div>
              <span>Back</span>
            </button>

            <input
              type="text"
              className="outline-none select-none text-[1px] text-white"
              id="workaround"
            />

            <button
              className={`w-6 h-6 block md:hidden ${
                moreInfo ? "text-secondary-900" : "text-gray-500"
              }`}
              onClick={updateMoreInfo}
            >
              {moreInfo ? (
                <svgExports.MoreInfoActive />
              ) : (
                <svgExports.MoreInfo />
              )}
            </button>
          </div>

          <div className="md:hidden">
            {moreInfo ? (
              <CompanyInformationTab company={company} />
            ) : (
              <div>
                <AboutTheJob job_data={job_data} />
                <button className="px-4 py-2 mt-8 text-sm text-white rounded-full bg-secondary-800 hover:bg-secondary-900">
                  Send Application
                </button>
              </div>
            )}
          </div>

          <div className="hidden md:block">
            <AboutTheJob job_data={job_data} />

            <button className="px-4 py-2 mt-8 text-sm text-white rounded-full bg-secondary-800 hover:bg-secondary-900">
              Send Application
            </button>
          </div>
        </div>

        <div className="hidden col-span-4 pl-12 md:col-span-5 md:block">
          <CompanyInformationTab company={company} />
        </div>
      </div>
    </div>
  );
};

export default ViewJobPost;
