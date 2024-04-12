import React, { useContext, useEffect, useReducer, useState } from "react";
import SideNavRecru from "../../components/SideNavRecru";
import svgExports from "../../assets/svg/exports";
import { ChevronUpNDown } from "../../assets/svg/recruiterIcons";
import TableFooter from "../../components/common/table/TableFooter";
import { dummy_jobpost } from "../../assets/dummy/dummy_jobpost";
import { useNavigate } from "react-router-dom";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import { getMyJobPosts } from "../../apis/get.api";
import {
  Dropdown,
  DropdownCheckbox,
} from "../../components/__manage_jobs/__components";

const THeadWFilter = (props) => {
  return (
    <div className="flex items-center gap-2">
      <span>{props.label}</span>
      <button className="relative w-4 h-4">
        <ChevronUpNDown />
      </button>
    </div>
  );
};

const JobPosting = () => {
  const navigate = useNavigate();
  const { profile } = useContext(authenticatedContext);
  const [activeDdown, setActiveDdown] = useState(null);

  function getSelected() {
    const checkboxes = document.querySelectorAll("#tbl-checkboxes");
    const selected_count = document.querySelector("#total-selected");
    let total_selected = 0;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        total_selected++;
      }
    });

    selected_count.innerText = total_selected;
  }

  function selectAll() {
    const checkboxes = document.querySelectorAll("#tbl-checkboxes");
    const checkbox = document.querySelector("#select-all-cb");

    if (checkbox.checked) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
      });
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }

    getSelected();
  }

  function newPost() {
    navigate("/recruiter/new-post");
  }

  function showDdown(index) {
    activeDdown === index
      ? setActiveDdown((prev) => null)
      : setActiveDdown((prev) => index);
  }

  const [tHeads, updateTHeads] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      return newEvent;
    },
    {
      data: [
        { title: "Status", checked: true },
        { title: "Applicants", checked: true },
        { title: "Date Created", checked: true },
        { title: "Application Deadline", checked: true },
      ],
    }
  );

  const [jobPosts, setJobPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  let [duplicate, setDuplicate] = useState([]);
  const theads = ["Job Title", "Status", "Applicants", "Date Created", "End Date"]; // prettier-ignore

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = jobPosts && duplicate.slice(firstIndex, lastIndex);
  const npage = jobPosts && Math.ceil(duplicate.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    if (profile.id) {
      getMyJobPosts(profile.id)
        .then((data) => {
          if (data.success) {
            setJobPosts(data.results);
            setDuplicate(data.results);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [profile]);

  function searchJob(event) {
    const new_values = jobPosts.filter((value, index) => {
      return (
        value.job_title
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        value.status.toLowerCase().includes(event.target.value.toLowerCase()) ||
        value.created_at
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        value.application_deadline
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
    });

    setDuplicate((prev) => new_values);
  }

  return (
    <div className="flex h-screen w-100">
      <SideNavRecru />

      <div className="w-full overflow-y-scroll">
        <div className="px-8 py-4">
          <p className="text-2xl font-semibold ">Manage Job Posts</p>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search Job Post"
                className="px-4 h-8 text-sm border border-gray-300 w-[300px] rounded"
                onKeyUp={searchJob}
              />

              <button
                className="h-8 gap-2 px-4 text-sm border border-gray-300 rounded"
                onClick={newPost}
              >
                New Post
              </button>
              <button className="flex items-center h-8 gap-2 px-4 text-sm border border-gray-300 rounded">
                <div className="w-4 h-4">
                  <svgExports.AddCircle />
                </div>
                <span>Status</span>
              </button>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center h-8 gap-2 px-4 text-sm border border-gray-300 rounded">
                <div className="w-4 h-4">
                  <svgExports.DownloadIcon />
                </div>
                <span>Export</span>
              </button>

              <div className="relative">
                <button
                  className="flex items-center h-8 gap-2 px-4 text-sm border border-gray-300 rounded"
                  onClick={(e) => showDdown(-1)}
                >
                  <div className="w-4 h-4">
                    <svgExports.Filter />
                  </div>
                  <span>View</span>
                </button>

                {activeDdown === -1 && (
                  <div className="absolute right-0 z-10 top-10">
                    <DropdownCheckbox data={tHeads} set={updateTHeads} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 border border-gray-300 rounded">
            <table className="w-full" id="tbl-recruiter">
              <thead>
                <tr className="text-sm border-b">
                  <td className="px-4 py-3  w-[50px]">
                    <div className="items-center h-full f4ex ">
                      <input
                        type="checkbox"
                        onChange={selectAll}
                        id="select-all-cb"
                      />
                    </div>
                  </td>

                  <td className="px-4 py-3 font-medium text-gray-400">
                    <THeadWFilter label="Job Title" />
                  </td>

                  {tHeads.data[0].checked && (
                    <td className="px-4 py-3 font-medium text-gray-400 ">
                      <THeadWFilter label="Status" />
                    </td>
                  )}

                  {tHeads.data[1].checked && (
                    <td className="px-4 py-3 font-medium text-gray-400 ">
                      <THeadWFilter label="Applicants" />
                    </td>
                  )}

                  {tHeads.data[2].checked && (
                    <td className="px-4 py-3 font-medium text-gray-400 ">
                      <THeadWFilter label="Date Created" />
                    </td>
                  )}

                  {tHeads.data[3].checked && (
                    <td className="px-4 py-3 font-medium text-gray-400 ">
                      <THeadWFilter label="End Date" />
                    </td>
                  )}

                  <td className="px-4 py-3 pr-8 font-medium text-gray-400 w-[100px]">
                    Actions
                  </td>
                </tr>
              </thead>

              {jobPosts ? (
                <tbody id="tbl-body">
                  {records.map((value, index) => {
                    return (
                      <tr
                        key={index}
                        className={
                          records.length != index + 1 ? "border-b" : ""
                        }
                      >
                        <td className="p-4">
                          <div className="flex items-center h-full ">
                            <input
                              type="checkbox"
                              id="tbl-checkboxes"
                              onChange={getSelected}
                            />
                          </div>
                        </td>
                        <td className="p-4 font-medium">{value.job_title}</td>
                        {tHeads.data[0].checked && (
                          <td className="p-4">{value.status}</td>
                        )}
                        {tHeads.data[1].checked && (
                          <td className="p-4">{value.applicants}</td>
                        )}
                        {tHeads.data[2].checked && (
                          <td className="p-4">{value.created_at}</td>
                        )}
                        {tHeads.data[3].checked && (
                          <td className="p-4">{value.application_deadline}</td>
                        )}
                        <td className="p-4">
                          <div
                            className="relative w-4 h-4"
                            onClick={(e) => showDdown(index)}
                          >
                            <svgExports.MoreButton />

                            {activeDdown === index && (
                              <div className="absolute right-0 z-10 top-5">
                                <Dropdown
                                  id={value.id}
                                  fk={value.fkid_profile}
                                  status={value.status}
                                  index={index}
                                  set={setJobPosts}
                                  data={jobPosts}
                                />
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={7}>No Records Found</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>

          {jobPosts && (
            <TableFooter
              rP={recordsPerPage}
              cP={currentPage}
              setCP={setCurrentPage}
              setRPP={setRecordsPerPage}
              npage={npage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
