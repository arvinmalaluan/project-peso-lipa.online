import React from "react";
import modelsExport from "../../models/modelsExport";
import commonExports from "../common/commonExports";
import tinyBlocks from "../../utils/tinyBlocks";

const WorkRelatedInformation = () => {
  return (
    <div className="w-full mt-4 mb-8">
      <p className="text-xl font-semibold">Personal Information</p>

      <div className="flex gap-2 mt-4">
        <div className="w-full p-4 bg-[#292929] rounded">
          <p className="font-semibold text-white">Skills</p>

          <p className="mt-5 font-[500] text-sm text-gray-300">Example data</p>
          <tinyBlocks.SampleData contents={modelsExport.sampleDataForSkills} />
        </div>

        <div className="flex flex-col w-full gap-2 px-4">
          <commonExports.TextArea {...modelsExport.textAreaProps_skills} />
        </div>
      </div>

      <div className="flex gap-2 mt-8">
        <div className="w-full p-4 bg-[#292929] rounded">
          <p className="font-semibold text-white">Achievements and Rewards</p>

          <p className="mt-5 font-[500] text-sm text-gray-300">Example data</p>
          <tinyBlocks.SampleData
            contents={modelsExport.sampleDataForAchievements}
          />
        </div>

        <div className="flex flex-col w-full gap-2 px-4">
          {modelsExport.inputProps_achievements.map((inputProp, index) => {
            return <commonExports.Input {...inputProp} key={index} />;
          })}
        </div>
      </div>

      <div className="flex gap-2 mt-8">
        <div className="w-full p-4 bg-[#292929] rounded">
          <p className="font-semibold text-white">Notable Projects</p>

          <p className="mt-5 font-[500] text-sm text-gray-300">Example data</p>
          <tinyBlocks.SampleData
            contents={modelsExport.sampleDataForProjects}
          />
        </div>

        <div className="flex flex-col w-full gap-2 px-4">
          {modelsExport.inputProps_projects.map((inputProp, index) => {
            return <commonExports.Input {...inputProp} key={index} />;
          })}

          <commonExports.TextArea {...modelsExport.textAreaProps_projects} />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-8 pr-4">
        <button className="px-4 py-2 text-xs text-white bg-[#292929] border rounded">
          Back
        </button>
        <button className="px-4 py-2 text-xs text-white bg-[#292929] border rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkRelatedInformation;
