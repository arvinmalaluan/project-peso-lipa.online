import React, { useContext, useEffect, useState } from "react";
import svgExports from "../assets/svg/exports";
import { createFetch } from "../apis/post.api";
import { updateFetch } from "../apis/patch.api";
import { getFetch } from "../apis/get.api";
import seekerResumeContext from "../context/seekerResumeContext";

const InputWLabel = (props) => {
  return (
    <div>
      <p className="mb-1 text-xs font-[500]">{props.label}</p>
      <input
        className="w-full px-4 py-2 text-sm border rounded outline-none"
        type={props.label ? props.label : "text"}
      />
    </div>
  );
};

const ThreeContentCard = () => {
  return (
    <div className="p-4 border rounded">
      <p className="text-sm text-gray-500">Engineer</p>
      <p className="font-semibold text-blue-500">90% Compatibility</p>
      <p className="mt-5 text-sm">Explore</p>
    </div>
  );
};

const RightSideBar = (props) => {
  const [value, setValue] = useState(null);
  const [activeR, setActiveR] = useState(-1);
  const { updateResume, setCancel, setPage } = useContext(seekerResumeContext);

  useEffect(() => {
    setValue((prev) => props.datum);
  }, [props.datum]);

  function pdfToBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      setValue(base64);

      if (props.record_exists) {
        updateRecord(base64);
      } else {
        createRecord(base64);
      }
    };
    reader.onerror = (error) => {
      console.error("Error converting file to Base64:", error);
    };
  }

  function downloadPDF() {
    const pdfDataUrl = `data:application/pdf;base64,${value}`;
    const link = document.createElement("a");
    link.href = pdfDataUrl;
    link.download = "your_pdf_filename.pdf"; // Set your desired filename
    link.click();
  }

  function handleChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      pdfToBase64(selectedFile);
    }
  }

  function editResume(params_id, index) {
    if (params_id != -1) {
      const url_ext = `documents/one/${params_id}`;

      getFetch(url_ext)
        .then((data) => {
          const results = data.results[0];

          let holder = {};

          Object.keys(results).map((item, index) => {
            if (
              item != "created_at" &&
              item != "on_update" &&
              item != "fkid_profile" &&
              item != "id"
            ) {
              holder[item] = results[item].split("|");
            } else {
              holder[item] = results[item];
            }
          });

          updateResume(holder);
          setActiveR((prev) => index);
          setPage((prev) => 1);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCancel((prev) => !prev);
      setActiveR((prev) => index);
      setPage((prev) => 1);
    }
  }

  function deleteFile() {
    setValue((prev) => null);
  }

  function createRecord(base64) {
    const url_ext = "documents/d";
    const payload = {
      [props.name]: base64,
      fkid_profile: props.profile,
    };

    createFetch(payload, url_ext)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateRecord(base64) {
    const url_ext = `documents/d/${props.for_update}`;
    const payload = {
      [props.name]: base64,
    };

    updateFetch(payload, url_ext)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="">
      <p className="px-4 text-sm font-semibold">{props.title}</p>

      <div className="flex flex-col gap-2">
        {props.name == "resume" && props.datum && props.datum !== "" && (
          <>
            {props.datum.map((value, index) => {
              return (
                <label
                  key={index}
                  htmlFor={props.name}
                  className={`flex items-center justify-between gap-4 px-4 py-1 ml-4 text-xs text-gray-500 border-l-4 ${
                    activeR == index
                      ? "border-primary-500 bg-primary-100"
                      : value
                      ? "border-green-500 bg-green-100"
                      : "border-gray-500 bg-gray-50"
                  }`}
                  onClick={() => editResume(value.split("|")[0], index)}
                >
                  <span className="truncate">{value.split("|")[1]}</span>
                  <span className="text-[10px] w-100 flex-grow-0 flex-shrink-0">
                    (Click to view)
                  </span>
                </label>
              );
            })}

            <label
              className={`flex items-center justify-between gap-4 px-4 py-1 ml-4 text-xs text-gray-500 border-l-4 ${
                activeR == -1
                  ? "border-primary-500 bg-primary-100"
                  : "border-gray-500 bg-gray-100"
              }`}
              onClick={() => editResume(-1, -1)}
            >
              <span className="truncate">Create new</span>
            </label>
          </>
        )}

        {props.name == "resume" &&
          (props.datum == null || props.datum == "") && (
            <label
              htmlFor={props.name}
              className={`flex items-center justify-between gap-4 px-4 py-1 ml-4 text-xs text-gray-500 border-l-4 border-gray-500 bg-gray-100`}
            >
              No record found
            </label>
          )}
      </div>

      {props.name != "resume" && (
        <label
          htmlFor={props.name}
          className={`flex items-center justify-between px-4 py-1 ml-4 text-xs text-gray-500 border-l-4 ${
            value
              ? "border-green-500 bg-green-100"
              : "border-gray-500 bg-gray-50"
          }`}
        >
          <span>
            {value && props.name !== "resume" ? "Uploaded" : props.action}
          </span>

          {value && props.name !== "resume" ? (
            "✅"
          ) : (
            <span className="w-4 h-4">
              <svgExports.AddButton />
            </span>
          )}
        </label>
      )}

      {props.name !== "resume" && value && (
        <div className="flex gap-3 px-4 mt-2 text-xs">
          <button
            className="hover:text-blue-700 hover:underline"
            onClick={downloadPDF}
          >
            View
          </button>
          <button
            className="hover:text-blue-700 hover:underline"
            onClick={deleteFile}
          >
            Delete
          </button>
        </div>
      )}

      {(value === null || value === "") && props.name !== "resume" && (
        <input
          type="file"
          className="hidden"
          id={props.name}
          onChange={handleChange}
          accept=".pdf"
        />
      )}
    </div>
  );
};

const SampleData = (props) => {
  return props.contents.map((content, index) => {
    return (
      <p className="hidden text-xs text-gray-500 sm:block" key={index}>
        {content}
      </p>
    );
  });
};

const AddNewButton = (props) => {
  return (
    <>
      <hr className="mt-2 mb-4" />
      <button className="py-2 text-xs text-white border rounded bg-primary-900">
        Add more
      </button>
    </>
  );
};

const CompatibilityCard = (props) => {
  return (
    <div className="p-4 border rounded">
      <p className="text-xs text-gray-500">UI/UX Designer</p>
      <p className="font-semibold">68% Compatible</p>
    </div>
  );
};

const tinyBlocks = {
  InputWLabel,
  ThreeContentCard,
  RightSideBar,
  SampleData,
  AddNewButton,
  CompatibilityCard,
};

export default tinyBlocks;
