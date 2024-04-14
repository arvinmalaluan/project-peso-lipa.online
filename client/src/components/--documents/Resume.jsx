import React, { useContext, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import References from "./References";
import WorkRelatedInformation from "./WorkRelatedInformation";
import seekerResumeContext from "../../context/seekerResumeContext";
import { deleteFetch } from "../../apis/delete.api";
import { Modal } from "../__common/__components";

const Resume = () => {
  const { page, resume } = useContext(seekerResumeContext);
  const [allowDelete, setAllowDelete] = useState(false);

  function handleChange() {
    setAllowDelete((prev) => !prev);
  }

  function deleteResume() {
    const url_ext = `documents/${resume.id}`;

    deleteFetch(url_ext)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function openModal() {
    document.getElementById("delete-modal").classList.remove("hidden");
  }

  function closeModal() {
    document.getElementById("delete-modal").classList.add("hidden");
  }

  return (
    <>
      {resume.id && (
        <>
          <div className="mt-4 mb-8 border rounded">
            <p className="px-4 py-2 text-xl font-semibold bg-gray-100 border-b">
              Resume Information
            </p>

            <div className="p-4">
              <p className="flex gap-2 mt-1 text-sm">
                <span className="font-[500]">Resume name:</span>
                <span>{resume.resume_name[0]}</span>
              </p>
              <p className="flex gap-2 text-sm">
                <span className="font-[500]">Created at:</span>
                <span>{resume.created_at}</span>
              </p>
              <p className="flex gap-2 text-sm">
                <span className="font-[500]">Last update:</span>
                <span>{resume.on_update}</span>
              </p>

              <div className="mt-8">
                <div className="flex items-start">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    checked={allowDelete}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="text-sm text-gray-900 ms-2 "
                  >
                    I understand that deleting my resume information will result
                    in its permanent removal from the system.
                  </label>
                </div>
              </div>

              <button
                className={`px-6 py-2 mt-4 text-sm rounded ${
                  allowDelete
                    ? "text-white bg-primary-900"
                    : "text-gray-500 bg-gray-100 cursor-not-allowed"
                }`}
                onClick={openModal}
              >
                Proceed
              </button>
            </div>
          </div>

          <div id="delete-modal" className="hidden">
            <Modal id="delete-modal">
              <p className="mb-1 text-2xl font-semibold">Are you sure?</p>

              <p className="text-sm">
                {resume.id
                  ? "Are you sure you want to update this record? This action cannot be undone."
                  : "I hereby certify that all information included in my resume is accurate and factual to the best of my knowledge."}
              </p>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  className="px-4 py-2 text-sm bg-gray-100 border rounded-lg"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className={`px-4 py-2 text-sm border rounded-lg bg-primary-700 text-white`}
                  onClick={deleteResume}
                >
                  Yes, I want to delete this resume.
                </button>
              </div>
            </Modal>
          </div>
        </>
      )}

      {page == 1 && <PersonalInformation />}
      {page == 2 && <WorkRelatedInformation />}
      {page == 3 && <References />}
    </>
  );
};

export default Resume;
