import React, { useEffect, useReducer, useState } from "react";
import SideNavRecru from "../../components/SideNavRecru";
import img from "../../assets/images/default_image.png";
import InputWithNoIcon from "../../components/common/input-box/InputWithNoIcon";
import { getFetch } from "../../apis/get.api";

function showFilter() {
  const modal = document.getElementById("filter-modal");
  modal.classList.remove("hidden");
}

function hideFilter() {
  const modal = document.getElementById("filter-modal");
  modal.classList.add("hidden");
}

function CandidateCards({ data }) {
  console.log(data);

  return (
    <div className="flex items-center gap-4 ">
      <img
        src={data ? (data.image ? data.image : img) : img}
        alt=""
        className="h-[130px] aspect-square object-cover object-center"
      />

      <div className="w-full">
        <p className="mb-2 text-xl font-semibold">UI/UX Designer</p>
        <p className="text-sm text-darkBackground-500">
          {data
            ? data.name
              ? data.name
              : "not record found"
            : "not record found"}
        </p>
        <p className="text-sm text-darkBackground-500">
          {data
            ? data.location
              ? data.location
              : "not record found"
            : "not record found"}
        </p>
        <p className="text-sm text-darkBackground-500">
          {data
            ? data.educational_attainment
              ? data.educational_attainment
              : "not record found"
            : "not record found"}
        </p>
        <p className="mt-2 text-sm cursor-pointer text-darkBackground-500 hover:text-black">
          View Skills
        </p>
      </div>
    </div>
  );
}

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState(null);
  const [duplicates, setDuplicates] = useState([]);
  const [search, updateSearch] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      return newEvent;
    },
    {
      location: "",
      experience: "",
      availability: "",
    }
  );

  useEffect(() => {
    const url_ext = "profile/candidates";
    getFetch(url_ext)
      .then((data) => {
        setCandidates((prev) => data.results);
        setDuplicates((prev) => data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex w-full h-screen">
      <SideNavRecru />

      <div className="w-full overflow-y-scroll">
        <div className="flex w-full gap-2 px-8 m-auto mt-8">
          <input
            type="text"
            className="w-[550px] h-8 px-4 text-sm border border-gray-300 rounded outline-none"
            placeholder="Search for job positions (e.g., UI/UX designer, software engineer)"
          />
          <button
            className="px-4 text-sm text-white rounded bg-secondary-900"
            onClick={showFilter}
          >
            Add Filter(s)
          </button>
        </div>

        {/* contents */}
        <div className="grid grid-cols-2 gap-4 px-8 pt-8">
          {duplicates &&
            duplicates.map((item, index) => {
              return <CandidateCards key={index} data={item} />;
            })}
        </div>

        <div className="hidden" id="filter-modal">
          <div
            className="absolute top-0 w-screen h-screen bg-darkBackground-200 start-0"
            onClick={hideFilter}
          ></div>
          <div className="w-[600px] border border-gray-300 rounded abs-c">
            <div className="flex items-center justify-between p-4 border-b rounded-t md:px-5 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add Filter
              </h3>
              <button
                className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={hideFilter}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 pb-8 space-y-4 md:px-5">
              <InputWithNoIcon
                name="location"
                label="Location"
                placeholder="e.g. Batangas City"
                id="location-filter"
                isRequired={false}
                datum={search}
                onchange={updateSearch}
              />

              <InputWithNoIcon
                name="experience"
                label="Experience"
                placeholder="e.g. 2 years in UI/UX Designing"
                id="experience-filter"
                isRequired={false}
                datum={search}
                onchange={updateSearch}
              />

              <InputWithNoIcon
                name="availability"
                label="Availability"
                placeholder="e.g. Unemployed"
                id="availability-filter"
                isRequired={false}
                datum={search}
                onchange={updateSearch}
              />
            </div>
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b md:p-5 dark:border-gray-600">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Apply
              </button>
              <button
                onClick={hideFilter}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;
