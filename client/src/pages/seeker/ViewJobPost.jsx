import React, { useContext, useEffect, useState } from "react";
import svgExports from "../../assets/svg/exports";
import { AboutTheJob, CompanyInformationTab, } from "../../components/__home_page/__components"; // prettier-ignore
import SideNav from "../../components/SideNav";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import { SearchNav } from "../../components/common/SearchNav";
import { useParams } from "react-router-dom";
import { getFetch, getSpecificJobPosts } from "../../apis/get.api";
import { createFetch } from "../../apis/post.api";
import { deleteFetch } from "../../apis/delete.api";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import { ChooseResume } from "../../components/__common/__components";

const ViewJobPost = (props) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const { id } = useParams();
  const { profile } = useContext(authenticatedContext);

  let [shown, setShown] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [applied, setApplied] = useState(false);
  const [documents, setDocuments] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function onOpen() {
    showSideMenu();
    setShown(true);
  }

  function onClose() {
    hideSideMenu();
    setShown(false);
  }

  function goBack() {
    window.history.back();
  }

  function updateMoreInfo() {
    setMoreInfo((prev) => !prev);
  }

  function chooseResume() {
    setOpenModal((prev) => true);
  }

  function cancelApplication() {
    const url_ext = `apply/${jobPosts.application_id}`;

    deleteFetch(url_ext)
      .then((data) => {
        setApplied(false);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (profile.id) {
      getSpecificJobPosts(id)
        .then((data) => {
          const results = data.results[0];

          console.log(results.applicant_id, profile.id);

          setJobPosts((prev) => data.results[0]);
          results.application_status !== null &&
            results.applicant_id === profile.id &&
            setApplied(true);
        })
        .catch((error) => console.log(error));
    }
  }, [profile.id]);

  useEffect(() => {
    if (profile.id) {
      const url_ext = `documents/my/${profile.id}`;

      getFetch(url_ext)
        .then((data) => {
          setDocuments(data.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [profile.id]);

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

      <div className="w-full h-full overflow-y-scroll">
        <div className="max-w-[1240px] h-auto pb-8 px-0 m-auto">
          <SearchNav onOpen={onOpen} shown={shown} />

          <div className="px-8 py-4 " id="top-view-job-post">
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
                    <CompanyInformationTab company={jobPosts} />
                  ) : (
                    <div>
                      <AboutTheJob job_data={jobPosts} />

                      {applied ? (
                        <button
                          className="px-4 py-2 mt-8 text-sm text-white rounded-full bg-primary-800 hover:bg-primary-900"
                          onClick={cancelApplication}
                        >
                          Cancel Application
                        </button>
                      ) : (
                        <button
                          className="px-4 py-2 mt-8 text-sm text-white rounded-full bg-secondary-800 hover:bg-secondary-900"
                          onClick={chooseResume}
                        >
                          Send Application
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="hidden md:block">
                  <AboutTheJob job_data={jobPosts} />

                  {applied ? (
                    <button
                      className="px-4 py-2 mt-8 text-sm text-white rounded-full bg-primary-800 hover:bg-primary-900"
                      onClick={cancelApplication}
                    >
                      Cancel Application
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 mt-8 text-sm text-white rounded-full bg-secondary-800 hover:bg-secondary-900"
                      onClick={chooseResume}
                    >
                      Send Application
                    </button>
                  )}
                </div>
              </div>

              <div className="hidden col-span-4 pl-12 md:col-span-5 md:block">
                <CompanyInformationTab company={jobPosts} />
              </div>

              <ChooseResume
                setOpenModal={setOpenModal}
                openModal={openModal}
                data={documents}
                setApplied={setApplied}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobPost;
