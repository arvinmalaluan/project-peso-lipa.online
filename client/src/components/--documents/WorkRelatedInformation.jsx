import React, { useContext } from "react";
import modelsExport from "../../models/modelsExport";
import commonExports from "../common/commonExports";
import tinyBlocks from "../../utils/tinyBlocks";
import seekerResumeContext from "../../context/seekerResumeContext";

const WorkRelatedInformation = () => {
  const { setPage } = useContext(seekerResumeContext);

  return (
    <div className="w-full mt-4 mb-8">
      <p className="text-xl font-semibold">Work Related Information</p>

      <div className="flex flex-col gap-2 mt-4 sm:flex-row">
        <div className="w-full p-0 sm:p-4 bg-transparent sm:bg-[#292929] rounded">
          <p className="text-sm font-semibold text-black sm:text-white sm:text-base">
            Skills
          </p>

          <p className="mt-5 font-[500] text-sm  text-gray-300 hidden sm:block">
            Example data
          </p>
          <tinyBlocks.SampleData contents={modelsExport.sampleDataForSkills} />
        </div>

        <div className="flex flex-col w-full gap-2 px-0 sm:px-4">
          <commonExports.TextArea {...modelsExport.textAreaProps_skills} />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-8 sm:flex-row">
        <div className="w-full p-0 sm:p-4 bg-transparent sm:bg-[#292929] rounded">
          <p className="text-sm font-semibold text-black sm:text-white sm:text-base">
            Achievements and Rewards
          </p>

          <p className="mt-5 font-[500] text-sm text-gray-300 hidden sm:block">
            Example data
          </p>
          <tinyBlocks.SampleData
            contents={modelsExport.sampleDataForAchievements}
          />
        </div>

        <div className="flex flex-col w-full gap-2 px-0 sm:px-4">
          {modelsExport.inputProps_achievements.map((inputProp, index) => {
            return <commonExports.Input {...inputProp} key={index} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-8 sm:flex-row">
        <div className="w-full p-0 sm:p-4 bg-transparent sm:bg-[#292929] rounded">
          <p className="text-sm font-semibold text-black sm:text-white sm:text-base">
            Notable Projects
          </p>

          <p className="mt-5 hidden sm:block font-[500] text-sm text-gray-300">
            Example data
          </p>
          <tinyBlocks.SampleData
            contents={modelsExport.sampleDataForProjects}
          />
        </div>

        <div className="flex flex-col w-full gap-2 px-0 sm:px-4">
          {modelsExport.inputProps_projects.map((inputProp, index) => {
            return <commonExports.Input {...inputProp} key={index} />;
          })}

          <commonExports.TextArea {...modelsExport.textAreaProps_projects} />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-8 pr-0 sm:pr-4">
        <button
          className="px-4 py-2 text-xs text-white bg-[#292929] border rounded"
          onClick={() => setPage(1)}
        >
          Back
        </button>
        <button
          className="px-4 py-2 text-xs text-white bg-[#292929] border rounded"
          onClick={() => setPage(3)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkRelatedInformation;
