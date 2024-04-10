import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import svgExports from "../../assets/svg/exports";
import { hideSideMenu, showSideMenu } from "../../utils/functions";
import { SearchNav } from "../../components/common/SearchNav";

const Applications = () => {
  let [shown, setShown] = useState(false);

  function onOpen() {
    showSideMenu();
    setShown(true);
  }

  function onClose() {
    hideSideMenu();
    setShown(false);
  }

  return (
    <div className="flex w-screen h-screen">
      <div className="hidden lg:block">
        <SideNav />
      </div>

      <div className="absolute z-10 hidden w-screen" id="side-nav-small-screen">
        <div className="absolute h-screen bg-white">
          <SideNav />
        </div>
        <div
          className="w-full h-screen bg-darkBackground-100"
          onClick={onClose}
        ></div>
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="m-w-[1240px] flex flex-col gap-4 h-auto px-0  m-auto">
          <SearchNav onOpen={onOpen} shown={shown} />

          <div className="px-4 sm:px-8">
            <p className="text-sm font-semibold">Showing 45 Applications</p>
            <p className="text-xs text-gray-500">Best of luck applicant!</p>
          </div>

          <div className="flex items-center justify-between gap-2 px-4 sm:px-8">
            <div className="w-full">
              <input
                type="text"
                className="px-4 py-2 text-xs rounded sm:w-[35%] w-full bg-gray-50"
                placeholder="Search here"
              />
            </div>
            <button className="flex-shrink-0 px-4 py-2 text-xs border rounded">
              Filter by status
            </button>
          </div>

          <div className="px-4 sm:px-8">
            <div className="relative my-4 overflow-x-auto border rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-s-lg">
                      Application No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date Applied
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-e-lg">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #APL-001
                    </th>
                    <td className="px-6 py-4">12:24:01 12/12/12</td>
                    <td className="px-6 py-4">
                      <div className="flex-shrink-0 block group">
                        <div className="flex items-center">
                          <img
                            className="inline-block flex-shrink-0 size-[32px] rounded-full"
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                            alt="Image Description"
                          />
                          <div className="ms-3">
                            <h3 className="font-[500] text-sm text-gray-800 dark:text-white">
                              Sample Company, Inc.
                            </h3>
                            <p className="text-xs font-medium text-gray-400">
                              View Profile
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>Fulltime</div>
                    </td>
                    <td className="px-6 py-4">UI/UX Designer</td>
                    <td className="px-6 py-4">Pending</td>
                    <td className="px-6 py-4">
                      <button className="size-[18px]">
                        <svgExports.MoreButton />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-4 sm:px-8">
            <nav aria-label="Page navigation example">
              <ul className="flex list-style-none">
                <li>
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li>
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li aria-current="page">
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                    href="#"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                    href="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
