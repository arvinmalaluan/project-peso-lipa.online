import React, { useEffect, useReducer, useState } from "react";
import SideNav from "../../components/SideNav";
import tinyBlocks from "../../utils/tinyBlocks";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import { SearchNav } from "../../components/common/SearchNav";
import { Cards } from "../../components/__search_jobs/__components";
import { getAllJobPosts } from "../../apis/get.api";

const SearchJobs = () => {
  let [shown, setShown] = useState(false);
  const [jobPosts, setJobPosts] = useState(null);
  const [temporary, setTemporary] = useState([]);
  const [search, updateSearch] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      return newEvent;
    },
    {
      keywords: null,
      location: null,
    }
  );

  useEffect(() => {
    getAllJobPosts()
      .then((data) => {
        if (data.success) {
          setJobPosts((prev) => data.results);
          setTemporary((prev) => data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function onOpen() {
    showSideMenu();
    setShown(true);
  }

  function onClose() {
    hideSideMenu();
    setShown(false);
  }

  function handleChange(event, name) {
    updateSearch({ [name]: event.target.value });
  }

  function handleSearch() {
    const copy = jobPosts;
    let newc;

    if (
      (search.keywords !== null || search.keywords != "") &&
      (search.location == "" || search.location == null)
    ) {
      newc = copy.filter((value, index) => {
        return (
          value.name.toLowerCase().includes(search.keywords.toLowerCase()) ||
          value.job_title.toLowerCase().includes(search.keywords.toLowerCase())
        );
      });
    }

    if (
      (search.keywords === null || search.keywords == "") &&
      (search.location != "" || search.location !== null)
    ) {
      newc = copy.filter((value, index) => {
        return value.location
          .toLowerCase()
          .includes(search.location.toLowerCase());
      });
    }

    if (
      search.keywords !== null &&
      search.keywords == "" &&
      search.location !== null &&
      search.location == ""
    ) {
      newc = copy.filter((value, index) => {
        return (
          value.name.toLowerCase().includes(search.keywords.toLowerCase()) ||
          value.job_title
            .toLowerCase()
            .includes(search.keywords.toLowerCase()) ||
          value.location.toLowerCase().includes(search.location.toLowerCase())
        );
      });
    }

    setTemporary((prev) => newc);
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

      <div className="w-full h-full overflow-y-scroll">
        <div className="max-w-[1240px] flex items-start gap-4 h-auto px-0 md:px-8 m-auto">
          <div className="w-full ">
            <SearchNav onOpen={onOpen} shown={shown} />

            <div
              id="reco-positions"
              className="px-4 mt-6 sm:px-8 md:px-8 lg:px-8"
            >
              <p className="mb-2 text-sm font-semibold">
                Recommended Positions
              </p>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-3">
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
                <tinyBlocks.ThreeContentCard />
              </div>
            </div>

            <div
              id="job-offers"
              className="px-4 pb-4 mt-6 sm:px-8 md:px-8 lg:px-8"
            >
              <p className="text-sm font-semibold ">All Job Vacancies</p>

              <div
                className={
                  shown
                    ? "pt-2 pb-2 bg-white px-4 md:px-0"
                    : "sticky top-[57px] pt-2 pb-2 mb-2 bg-white sm:px-0 md:px-0"
                }
              >
                <div className="flex gap-2 overflow-hidden bg-whtie">
                  <input
                    type="text"
                    placeholder="Job title, keywords or company"
                    className="w-full px-4 py-2 text-xs bg-gray-100 rounded-full"
                    onChange={(event) => handleChange(event, "keywords")}
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="hidden w-full px-4 py-2 text-xs bg-gray-100 rounded-full sm:block"
                    onChange={(event) => handleChange(event, "location")}
                  />
                  <button
                    className="px-4 py-2 text-xs text-white bg-blue-500 rounded-full hover:bg-blue-700"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-2">
                {temporary.map((data, index) => {
                  return (
                    <div className="border rounded" key={index}>
                      <Cards data={data} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-[260px] py-4 ml-4 sticky top-0 h-screen hidden md:block">
            <p className="pb-1 ml-6 text-xs border-b font-[500]">
              ON THIS PAGE
            </p>
            <div className="flex flex-col gap-1 px-2 mt-2">
              <a
                href="#reco-positions"
                className="px-4 text-xs text-blue-500 border-l border-blue-500"
              >
                Recommended Positions
              </a>
              <a href="#job-offers" className="px-4 text-xs text-gray-500">
                Job Offers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchJobs;
