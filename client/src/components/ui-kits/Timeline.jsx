import React from "react";

function TimeLineList() {
  return (
    <li class="ms-4 mb-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-xs font-normal leading-none text-[gray] dark:text-gray-500">
        April 2024
      </time>
      <p class="font-semibold text-sm text-gray-900 mt-2 mb-1 dark:text-white">
        Emergence of PESO-LIPA.online App
      </p>
      <p class="text-[gray] font-normal text-xs dark:text-gray-400">
        Get started with dozens of web components and interactive elements built
        on top of Tailwind CSS.
      </p>
    </li>
  );
}

const Timeline = () => {
  return (
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <TimeLineList />
      <TimeLineList />
      <TimeLineList />
      <TimeLineList />
    </ol>
  );
};

export default Timeline;
