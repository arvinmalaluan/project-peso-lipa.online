import React from "react";
import SideNav from "../../components/SideNav";
import commonExports from "../../components/common/commonExports";
import modelsExport from "../../models/modelsExport";
import tinyBlocks from "../../utils/tinyBlocks";

const Documents = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-full h-full overflow-y-scroll">
        <div className="w-[1240px] flex items-start gap-4 h-auto px-8 m-auto">
          <div className="w-full mt-4 mb-8">
            <p className="text-xl font-semibold">Personal Information</p>

            <div className="mt-4">
              <div className="flex gap-2">
                <div className="w-full p-4 bg-[#292929] rounded">
                  <p className="font-semibold text-white">
                    Contact Information
                  </p>

                  <p className="mt-5 font-[500] text-sm text-gray-300">
                    Example data
                  </p>
                  <tinyBlocks.SampleData
                    contents={modelsExport.sampleDataForCInfo}
                  />
                </div>

                <div className="flex flex-col w-full gap-2 px-4">
                  {modelsExport.inputProps_cinfo.map((inputProp, index) => {
                    return <commonExports.Input {...inputProp} key={index} />;
                  })}

                  <commonExports.TextArea
                    {...modelsExport.textAreaProps_cinfo}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-2">
                <div className="w-full p-4 custom-bt bg-gray-50 ">
                  <p className="font-semibold text-gray-700">Education</p>

                  <p className="mt-5 font-[500] text-sm text-gray-500">
                    Example data
                  </p>
                  <tinyBlocks.SampleData
                    contents={modelsExport.sampleDataForTEduc}
                  />
                </div>
                <div className="flex flex-col w-full gap-2 px-4 pb-4">
                  <p className="text-sm">Tertiary Education</p>
                  {modelsExport.inputProps_teduc.map((inputProp, index) => {
                    return <commonExports.Input {...inputProp} key={index} />;
                  })}
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-full p-4 bg-gray-50">
                  <p className="font-[500] text-sm text-gray-500">
                    Example data
                  </p>
                  <tinyBlocks.SampleData
                    contents={modelsExport.sampleDataForGEduc[0]}
                  />
                </div>
                <div className="flex flex-col w-full gap-2 p-4">
                  <p className="text-sm">Secondary Education</p>
                  {modelsExport.inputProps_geduc.map((inputProp, index) => {
                    return <commonExports.Input {...inputProp} key={index} />;
                  })}
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-full p-4 bg-gray-50 custom-bb ">
                  <p className=" font-[500] text-sm text-gray-500">
                    Example data
                  </p>
                  <tinyBlocks.SampleData
                    contents={modelsExport.sampleDataForGEduc[1]}
                  />
                </div>
                <div className="flex flex-col w-full gap-2 p-4">
                  <p className="text-sm">Primary Education</p>
                  {modelsExport.inputProps_geduc.map((inputProp, index) => {
                    return <commonExports.Input {...inputProp} key={index} />;
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-2">
                <div className="w-full p-4 custom-bt bg-gray-50 ">
                  <p className="font-semibold text-gray-700">
                    Spoken Languages
                  </p>

                  <p className="mt-5 font-[500] text-sm text-gray-500">
                    Example data
                  </p>
                  <tinyBlocks.SampleData
                    contents={modelsExport.sampleDataForSpoken}
                  />
                </div>
                <div className="flex items-center w-full gap-2 px-4 pb-4">
                  {modelsExport.inputProps_spoken.map((inputProp, index) => {
                    return <commonExports.Input {...inputProp} key={index} />;
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-2">
                <div className="w-full p-4 custom-bt bg-gray-50 ">
                  <p className="font-semibold text-gray-700">
                    Hobbies and Interests
                  </p>

                  <p className="mt-5 font-[500] text-sm text-gray-500">
                    Example data
                  </p>
                  <tinyBlocks.SampleData
                    contents={modelsExport.sampleDataForHbbies}
                  />
                </div>
                <div className="flex items-center w-full gap-2 px-4 pb-4">
                  {modelsExport.inputProps_hbbies.map((inputProp, index) => {
                    return <commonExports.Input {...inputProp} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[260px] py-4 ml-4 sticky top-0 h-screen">
            <p className="pb-1 ml-6 text-xs border-b font-[500]">
              ON THIS PAGE
            </p>
            <div className="flex flex-col gap-6 px-2 mt-2">
              <tinyBlocks.RightSideBar action="Create New" title="Resume" />
              <tinyBlocks.RightSideBar action="Upload" title="TOR" />
              <tinyBlocks.RightSideBar
                action="Upload"
                title="PSA Birth Certificate"
              />
              <tinyBlocks.RightSideBar action="Upload" title="NBI Clearance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
