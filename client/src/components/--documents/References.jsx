import React, { useContext } from "react";
import seekerResumeContext from "../../context/seekerResumeContext";
import { Content } from "../__documents/__components";
import { sample_data_references } from "../__documents/__input_sample_data";
import { references } from "../__documents/__input_structure";

const References = () => {
  const { setPage } = useContext(seekerResumeContext);

  return (
    <div className="w-full mt-4 mb-8">
      <p className="text-xl font-semibold">References</p>

      <div className="mb-8">
        <Content
          data={sample_data_references}
          title="Contact Person"
          subtitle="Contact Person"
          structures={references}
          add_new={true}
        />
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
