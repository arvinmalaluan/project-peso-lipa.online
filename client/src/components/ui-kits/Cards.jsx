import React from "react";
import svgExports from "../../assets/svg/exports";

const Cards = () => {
  return (
    <div className="w-full rounded h-auto p-4 hover:bg-[#292929] hover:text-white">
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-gray-500">Company Name</p>
          <p className="font-[500]">Position</p>
        </div>

        <img src="" className="w-10 h-10 bg-gray-50" alt="company-logo" />
      </div>

      <div>
        <p className="mt-4 mb-2">Salary</p>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non
          quidem dolor iusto. Magnam, possimus magni sapiente ullam
          exercitationem, ut tempora quas saepe a accusantium ex quo dolor omnis
          porro?
        </p>
      </div>

      <div className="flex items-center justify-between mt-8">
        <span className="px-4 py-2 text-xs text-white bg-gray-700 rounded-full">
          Remote
        </span>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3">
            <svgExports.MapLocation />
          </div>
          <span className="text-xs mt-[2px]">Batangas City</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
