import {
  Button,
  Modal as CustomModal,
  Datepicker,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useContext, useState } from "react";
import svgExports from "../../assets/svg/exports";
import { useParams } from "react-router-dom";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import { createFetch } from "../../apis/post.api";

export const Modal = ({ children, id }) => {
  function closeModal() {
    document.getElementById(id).classList.add("hidden");
  }

  return (
    <div className="fixed inset-0 z-20">
      <div className="relative flex items-center justify-center w-screen h-screen">
        <div
          className="absolute z-10 w-full h-full bg-black bg-opacity-25 backdrop-blur-sm"
          onClick={closeModal}
        >
          <p>hello</p>
        </div>
        <div className="max-w-[500px] bg-white p-6 rounded-lg z-20">
          <div className="flex items-center justify-end mb-4">
            <div className="w-4 h-4" onClick={closeModal}>
              <svgExports.CloseIcon />
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export const DateTimePicker = ({ openModal, setOpenModal }) => {
  return (
    <>
      <CustomModal show={openModal} onClose={() => setOpenModal(false)}>
        <CustomModal.Header>Set interview</CustomModal.Header>
        <CustomModal.Body>
          <div className="flex gap-2">
            <div className="w-full z-100">
              <p>Date</p>
              <div className="">
                <Datepicker className="absolute w-[459px]" />
              </div>
            </div>

            <div>
              <p>Time</p>
              <div class="relative">
                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="time"
                  id="time"
                  class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  min="09:00"
                  max="18:00"
                  value="00:00"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p>Venue</p>
            <Textarea
              id="email"
              placeholder="Address to the place of interview if onsite"
              rows={5}
            />
          </div>

          <div className="mt-4">
            <p>Reminders</p>
            <Textarea
              id="email"
              placeholder="Reminders like dress code, punctuality, etc."
              rows={5}
            />
          </div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <Button onClick={() => setOpenModal(false)}>Confirm</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Discard
          </Button>
        </CustomModal.Footer>
      </CustomModal>
    </>
  );
};

function RadioList(props) {
  return (
    <li className="list-none ">
      <input
        type="radio"
        name="resume-type"
        id={props.id}
        value={props.value}
        className="hidden peer"
      />
      <label
        htmlFor={props.id}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="block">
          <div className="w-full font-semibold line-clamp-1">{props.type}</div>
          <div className="w-full text-sm">{props.caption}</div>
        </div>
      </label>
    </li>
  );
}

export const ChooseResume = ({ openModal, setOpenModal, data, setApplied }) => {
  const { id } = useParams();
  const { profile } = useContext(authenticatedContext);

  function sendApplication() {
    const selected = document.querySelector(
      'input[name="resume-type"]:checked'
    ).value;

    const payload = {
      fkid_profile: profile.id,
      fkid_job_postings: id,
      fkid_resume: parseInt(selected),
    };
    const url_ext = `apply`;

    createFetch(payload, url_ext)
      .then((data) => {
        setApplied((prev) => true);
      })
      .catch((error) => console.log(error));

    setOpenModal((prev) => false);
  }

  return (
    <>
      <CustomModal show={openModal} onClose={() => setOpenModal(false)}>
        <CustomModal.Header>Almost there!</CustomModal.Header>
        {data && data.id && data.resume != "" ? (
          <>
            <CustomModal.Body>
              <p className="mt-4 text-xl font-semibold">
                Pick resume to submit.
              </p>
              <p className="mt-2 mb-4 text-sm">
                Select the resume that best suits the job you are applying for.
                You can create multiple resumes to highlight your skill sets in
                different job areas
              </p>

              <form className="boxed">
                <div className="grid grid-cols-2 gap-2">
                  {data &&
                    data.resume_data.split(",").map((item, index) => {
                      return (
                        <RadioList
                          key={index}
                          type={item && item.split("|")[1]}
                          caption=""
                          id={`resume_${item && item.split("|")[0]}`}
                          value={item && item.split("|")[0]}
                        />
                      );
                    })}
                </div>
              </form>
            </CustomModal.Body>
            <CustomModal.Footer>
              <Button onClick={sendApplication}>Confirm</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Discard
              </Button>
            </CustomModal.Footer>
          </>
        ) : (
          <>
            <CustomModal.Body>
              <p className="mt-4 text-xl font-semibold">Requirements</p>
              <p className="mb-4 text-sm">
                These documents are necessary for applying to any job posting on
                this platform. You're seeing this message because you may have
                missing requirements or lack the necessary documents.
              </p>
              <div>
                <p className="">{`${data && data.psa ? "✔️" : "❌"} PSA`}</p>
                <p className="">{`${data && data.tor ? "✔️" : "❌"} TOR`}</p>
                <p className="">{`${data && data.nbi ? "✔️" : "❌"} NBI`}</p>
                {/* prettier-ignore */}
                <p className="">{`${data && data.resume_data ? "✔️" : "❌"} Resume`}</p>
              </div>

              <p className="mt-8 text-sm">
                <span className="font-semibold">Warning: </span>
                <span className="text-primary-900">
                  You are not eligible to apply!
                </span>
              </p>
            </CustomModal.Body>
            <CustomModal.Footer>
              <Button onClick={() => setOpenModal(false)}>Understood</Button>
            </CustomModal.Footer>
          </>
        )}
      </CustomModal>
    </>
  );
};
