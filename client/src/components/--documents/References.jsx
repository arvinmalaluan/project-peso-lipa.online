import React, { useContext } from "react";
import modelsExport from "../../models/modelsExport";
import commonExports from "../common/commonExports";
import tinyBlocks from "../../utils/tinyBlocks";
import seekerResumeContext from "../../context/seekerResumeContext";

const References = () => {
  const { setPage } = useContext(seekerResumeContext);

  return (
    <div className="w-full mt-4 mb-8">
      <p className="text-xl font-semibold">References</p>

      <div className="flex flex-col gap-2 mt-8 sm:flex-row">
        <div className="w-full p-0 sm:p-4 bg-transparent sm:bg-[#292929] rounded">
          <p className="text-sm font-semibold text-black sm:text-base sm:text-white">
            Contact Person
          </p>

          <p className="mt-5 font-[500] text-sm text-gray-300 hidden sm:block">
            Example data
          </p>
          <tinyBlocks.SampleData
            contents={modelsExport.sampleDataForReferences}
          />
        </div>

        <div className="flex flex-col w-full gap-2 px-0 sm:px-4">
          {modelsExport.inputProps_references.map((inputProp, index) => {
            return <commonExports.Input {...inputProp} key={index} />;
          })}
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-8 pr-0 sm:pr-4">
        <button
          className="px-4 py-2 text-xs text-white bg-[#292929] border rounded"
          onClick={() => setPage(2)}
        >
          Back
        </button>
        <button className="px-4 py-2 text-xs text-white bg-[#292929] border rounded">
          Finish
        </button>
      </div>
    </div>
  );
};

export default References;
