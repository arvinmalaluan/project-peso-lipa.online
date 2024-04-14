import React, { useContext } from "react";
import seekerResumeContext from "../../context/seekerResumeContext";
import { contact_information, generalized_education, hobbies_interests, spoken_languages, tertiary_education, textarea_contact_information, } from "../__documents/__input_structure"; // prettier-ignore
import { sample_data_contact_info, sample_data_education, sample_data_hobbies, sample_data_spoken, } from "../__documents/__input_sample_data"; // prettier-ignore
import { Content } from "../__documents/__components";

const PersonalInformation = () => {
  const { setPage, resume } = useContext(seekerResumeContext);

  return (
    <div className="w-full mt-4 mb-8">
      <p className="text-xl font-semibold">Personal Information</p>

      <div className="mt-4">
        <Content
          data={sample_data_contact_info}
          title="Contact Information"
          structures={contact_information}
          textarea_content={textarea_contact_information}
        />
      </div>

      <div className="mt-8">
        <Content
          data={sample_data_education[0]}
          title="Education"
          structures={tertiary_education}
          subtitle="Tertiary Education"
        />

        {/* prettier-ignore */}
        <Content data={sample_data_education[1]} structures={generalized_education[0]} subtitle="Secondary Education" />

        {/* prettier-ignore */}
        <Content data={sample_data_education[2]} structures={generalized_education[1]} subtitle="Primary Education" />
      </div>

      <div className="mt-8">
        <Content
          data={sample_data_spoken}
          title="Spoken Languages"
          structures={spoken_languages}
          subtitle="Spoken Languages"
          add_new={true}
        />
      </div>

      <div className="my-8 ">
        <Content
          data={sample_data_hobbies}
          title="Hobbies and Interests"
          structures={hobbies_interests}
          subtitle="Hobbies and Interests"
          add_new={true}
        />
      </div>

      <div className="flex justify-end pr-0 sm:pr-4">
        <button
          className="px-4 py-2 text-xs text-white bg-[#292929] border rounded"
          onClick={() => {
            setPage(2);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
