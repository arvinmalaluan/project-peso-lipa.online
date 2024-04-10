import React, { useContext } from "react";
import seekerResumeContext from "../../context/seekerResumeContext";
import { Content } from "../__documents/__components";
import {
  sample_data_skills,
  sample_data_achievements,
  sample_data_projects,
  sample_data_work_experiences,
} from "../__documents/__input_sample_data";
import {
  achievements_rewards,
  notable_projects,
  skills,
  text_area_notable_projects,
  text_area_work_experiences,
  work_experiences,
} from "../__documents/__input_structure";

const WorkRelatedInformation = () => {
  const { setPage } = useContext(seekerResumeContext);

  return (
    <div className="w-full mt-4 mb-8">
      <p className="text-xl font-semibold">Work Related Information</p>

      <div className="mb-8">
        <Content
          data={sample_data_skills}
          title="Skills"
          structures={skills}
          subtitle="Skills"
          add_new={true}
        />
      </div>

      <div className="mb-8">
        <Content
          data={sample_data_achievements}
          title="Achievements and Rewards"
          structures={achievements_rewards}
          subtitle="Achievements and Rewards"
          add_new={true}
        />
      </div>

      <div className="mb-8">
        <Content
          data={sample_data_projects}
          title="Notable Projects"
          subtitle="Notable Projects"
          structures={notable_projects}
          textarea_content={text_area_notable_projects}
          add_new={true}
        />
      </div>

      <div className="mb-8">
        <Content
          data={sample_data_work_experiences}
          title="Work Experiences"
          subtitle="Work Experiences"
          structures={work_experiences}
          textarea_content={text_area_work_experiences}
          add_new={true}
        />
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
