import React from "react";

import Calendar from "../../components/ui-kits/Calendar";
import { MyPieChart } from "../../components/charts/MyPieChart";
import { MyLineChart } from "../../components/charts/MyLineChart";
import SideNavRecru from "../../components/SideNavRecru";

const R_Home = () => {
  return (
    <div className="flex h-screen">
      <SideNavRecru />

      <div className="w-full h-screen">
        <div className="grid h-full grid-cols-12 gap-4 p-4">
          <div className="col-span-9 overflow-y-scroll no-scrollbar">
            <div className="grid items-start grid-cols-12 gap-4 h-100 w-100">
              <div className="flex items-start h-full col-span-6 gap-2 p-4 border rounded">
                <div className="flex flex-col justify-between w-full h-full ">
                  <div>
                    <p className="text-sm">Active Job Posts</p>
                    <p className="text-2xl font-semibold">20</p>
                  </div>
                  <p className="text-sm ">Manage Job Posts</p>
                </div>

                <div className="w-full">
                  <p className="text-sm">Recent Job Posts</p>
                  <p className="mt-2 text-xs">Recent Job Posts</p>
                  <p className="text-xs">Recent Job Posts</p>
                  <p className="text-xs">Recent Job Posts</p>
                  <p className="text-xs">Recent Job Posts</p>
                  <p className="text-xs">Recent Job Posts</p>
                  <p className="mt-2 text-sm">See more</p>
                </div>
              </div>

              <div className="flex items-start h-full col-span-6 gap-2 p-4 border rounded">
                <div className="flex flex-col justify-between w-full h-full ">
                  <div>
                    <p className="text-sm">Active Job Posts</p>
                    <p className="text-2xl font-semibold">20</p>
                  </div>
                  <p className="text-sm ">Manage Job Posts</p>
                </div>

                <div className="w-full">
                  <p className="text-sm">Recent Job Posts</p>
                  <p className="mt-2 text-xs">Recent Job Posts</p>
                  <p className="text-xs">Recent Job Posts</p>
                  <p className="text-xs">Recent Job Posts</p>
                  <p className="text-xs">Recent Job Posts</p>
                  <p className="text-xs">Recent Job Posts</p>
                  <p className="mt-2 text-sm">See more</p>
                </div>
              </div>
            </div>

            <div className="grid items-start grid-cols-12 gap-4 mt-4 h-100 w-100 ">
              <div className="flex flex-col h-full col-span-4 gap-4">
                <div className="p-4 border rounded">
                  <p className="text-sm">Latest News About App</p>

                  <ol className="relative mt-4 border-gray-200 border-s dark:border-gray-700">
                    <li className="mb-4 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                        March 2022
                      </time>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Marketing UI design in Figma
                      </h3>
                      <p className="mt-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                        All of the pages and components are first designed in
                        Figma and we keep a parity between the two versions even
                        as we update the project.
                      </p>
                    </li>
                    <li className="mb-3 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                        March 2022
                      </time>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Marketing UI design in Figma
                      </h3>
                      <p className="mt-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                        All of the pages and components are first designed in
                        Figma and we keep a parity between the two versions even
                        as we update the project.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="h-full p-4 border rounded">
                  <p className="text-sm">My Activities</p>
                  <p className="mt-2 text-xs text-darkBackground-500">
                    When you take actions across PESO-LIPA APP, we’ll provide
                    links to that activity here.
                  </p>
                </div>

                <div className="p-4 border rounded">
                  <p className="text-sm">Help and Support</p>

                  <p className="mt-2 text-xs text-darkBackground-500">
                    If you need assistance or have any questions, our support
                    team is here to help. Please feel free to reach out to us
                    through one of the following channels:
                  </p>

                  <p className="mt-4 text-xs">
                    <span className="font-medium">Email: </span>{" "}
                    <a href="" className="text-normal">
                      support@example.com
                    </a>
                  </p>

                  <p className="text-xs">
                    <span className="font-medium">Phone: </span>{" "}
                    <a href="" className="text-normal">
                      +1 (123) 456-7890
                    </a>
                  </p>

                  <p className="mt-4 text-xs text-darkBackground-500">
                    Our support hours are Monday to Friday, 9:00 AM to 5:00 PM
                    (GMT). We'll do our best to respond to your inquiries
                    promptly.
                  </p>

                  <p className="mt-2 text-xs text-darkBackground-500">
                    Thank you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col h-full col-span-8 gap-4">
                <div className="border rounded">
                  <p className="px-4 pt-4 text-sm">Job Posting Performance</p>
                  <div className="h-[250px] w-100">
                    <MyLineChart />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="p-4 border rounded">
                    <p className="text-sm">Time to hire</p>
                    <div className="h-[150px]">
                      <MyPieChart />
                    </div>
                  </div>

                  <div className="p-4 border rounded">
                    <p className="text-sm">User Demographics</p>
                    <div className="h-[150px]">
                      <MyPieChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 border rounded ">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default R_Home;
