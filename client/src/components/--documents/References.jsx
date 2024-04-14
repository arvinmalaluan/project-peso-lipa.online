import React, { useContext } from "react";
import seekerResumeContext from "../../context/seekerResumeContext";
import { Content } from "../__documents/__components";
import { sample_data_references } from "../__documents/__input_sample_data";
import { references } from "../__documents/__input_structure";
import { createFetch } from "../../apis/post.api";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import { updateFetch } from "../../apis/patch.api";
import { Modal } from "../__common/__components";

const References = () => {
  const { resume, setPage, updateResume } = useContext(seekerResumeContext);
  const { profile } = useContext(authenticatedContext);

  function createResume() {
    let payload = {};
    const url_ext = "documents/r";

    Object.keys(resume).map((item, index) => {
      payload[item] = resume[item].join("|");
    });

    payload["fkid_profile"] = profile.id;

    createFetch(payload, url_ext)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function closeModal() {
    document.getElementById("general-modal").classList.add("hidden");
  }

  function updateUserResume() {
    const payload = resume;
    const url_ext = `documents/r/${resume.id}`;

    delete payload.fkid_profile;
    delete payload.id;
    delete payload.created_at;
    delete payload.on_update;

    console.log(payload);

    updateFetch(payload, url_ext)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function inputName(event) {
    updateResume({ resume_name: [event.target.value] });
  }

  function updateClicked() {
    document.getElementById("general-modal").classList.remove("hidden");
  }

  return (
    <>
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
          <button
            className="px-4 py-2 text-xs text-white bg-[#292929] border rounded"
            onClick={updateClicked}
          >
            {resume.id ? "Update resume" : "Finish"}
          </button>
        </div>
      </div>

      <div className="hidden" id="general-modal">
        <Modal id="general-modal">
          <p className="mb-1 text-2xl font-semibold">Are you sure?</p>

          <p className="text-sm">
            {resume.id
              ? "Are you sure you want to update this record? This action cannot be undone."
              : "I hereby certify that all information included in my resume is accurate and factual to the best of my knowledge."}
          </p>

          <input
            type="text"
            className="w-full px-4 py-2 mt-4 text-sm bg-gray-100 border rounded-lg"
            placeholder="Resume file name"
            onChange={inputName}
            value={resume.resume_name && resume.resume_name}
          />

          <div className="flex justify-end gap-2 mt-6">
            <button
              className="px-4 py-2 text-sm border rounded-lg hover:border-none hover:text-white hover:bg-primary-700"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 text-sm border rounded-lg ${
                resume.resume_name
                  ? "text-white bg-green-500"
                  : "bg-gray-200 cursor-not-allowed text-gray-400 border"
              }`}
              onClick={resume.id ? updateUserResume : createResume}
            >
              {resume.id ? "Update Changes" : "Proceed"}
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default References;
