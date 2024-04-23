import React, { useContext, useEffect, useState } from "react";
import SideNavRecru from "../../components/SideNavRecru";
import svgExports from "../../assets/svg/exports";
import { ChevronUpNDown } from "../../assets/svg/recruiterIcons";
import TableFooter from "../../components/common/table/TableFooter";
import { dummy_applicants } from "../../assets/dummy/dummy_applicants";
import DropDown from "../../components/ui-kits/DropDown";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import { getMyJobPosts } from "../../apis/get.api";
import { createFetch } from "../../apis/post.api";
import DateTimePicker from "../../components/__common/__components";

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

const ApplicantTracking = () => {
  const { profile } = useContext(authenticatedContext);

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

  function openDrowdown(index) {
    setActiveIndex(index);
    setIsOpen((prev) => !prev);
  }

  const tempData = dummy_applicants;
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [applicants, setApplicants] = useState(null);
  const [ids, setIds] = useState(null);
  let [duplicate, setDuplicate] = useState([]);
  const theads = ["Candidate Name", "Application Date", "Status", "Job Title", "Phone Number"]; // prettier-ignore

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = applicants && duplicate.slice(firstIndex, lastIndex);
  const npage = applicants && Math.ceil(duplicate.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (profile.id) {
      getMyJobPosts(profile.id)
        .then((data) => {
          if (data.success) {
            const ids = [];
            for (const obj of data.results) {
              ids.push(obj.id); // Replace "id" with the actual property name for ID
            }
            setIds(ids);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [profile]);

  useEffect(() => {
    const url_ext = "jobpost/applicants";

    if (ids) {
      const load = { range: ids.join(", ") };

      createFetch(load, url_ext)
        .then((data) => {
          setApplicants((prev) => data.results);
          setDuplicate((prev) => data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ids]);

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
              />

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

              <button className="flex items-center h-8 gap-2 px-4 text-sm border border-gray-300 rounded">
                <div className="w-4 h-4">
                  <svgExports.Filter />
                </div>
                <span>View</span>
              </button>
            </div>
          </div>

          <div className="mt-4 border border-gray-300 rounded">
            <table className="w-full" id="tbl-recruiter">
              <thead>
                <tr className="text-sm border-b">
                  <td className="px-4 py-3 ">
                    <div className="items-center h-full f4ex ">
                      <input
                        type="checkbox"
                        onChange={selectAll}
                        id="select-all-cb"
                      />
                    </div>
                  </td>

                  <td className=" w-[25%] py-3 px-4 text-gray-400 font-medium">
                    <THeadWFilter label="Candidate Name" />
                  </td>

                  <td className=" w-[15%] py-3 px-4 text-gray-400 font-medium">
                    <THeadWFilter label="Application Date" />
                  </td>

                  <td className=" w-[10%] py-3 px-4 text-gray-400 font-medium">
                    <THeadWFilter label="Status" />
                  </td>

                  <td className=" w-[20%] py-3 px-4 text-gray-400 font-medium">
                    <THeadWFilter label="Job Title" />
                  </td>

                  <td className=" w-[20%] py-3 px-4 text-gray-400 font-medium">
                    <THeadWFilter label="Phone Number" />
                  </td>

                  <td className="px-4 py-3 pr-8 font-medium text-gray-400"></td>
                </tr>
              </thead>

              <tbody id="tbl-body">
                {records &&
                  records.map((value, index) => {
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
                        <td className="p-4 font-medium">{value.name}</td>
                        <td className="p-4">{value.created_at}</td>
                        <td className="p-4">{value.status}</td>
                        <td className="p-4">{value.job_title}</td>
                        <td className="p-4">{value.contact_number}</td>
                        <td className="p-4">
                          <button
                            className="relative w-4 h-4"
                            onClick={() => openDrowdown(index)}
                          >
                            <svgExports.MoreButton />

                            {console.log(records.length - 4, index + 1)}

                            {activeIndex === index && isOpen && (
                              <DropDown
                                isLastIndex={
                                  records.length > 5
                                    ? records.length - 4 > index + 1
                                      ? false
                                      : true
                                    : false
                                }
                              />
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div>
            <DateTimePicker />
          </div>

          <TableFooter
            rP={recordsPerPage}
            cP={currentPage}
            setCP={setCurrentPage}
            setRPP={setRecordsPerPage}
            npage={npage}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicantTracking;
