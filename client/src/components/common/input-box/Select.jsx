import React from "react";

const Select = (props) => {
  function handleChange(event) {
    props.onchange({ [props.name]: event.target.value });
  }

  return (
    <div className="mb-5 ">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Employment Type
      </label>
      <div className="block w-full pr-2 overflow-hidden border border-gray-300 rounded bg-gray-50">
        <select
          id="countries"
          className={`text-sm w-full h-full  p-2.5 bg-transparent outline-none ${
            props.datum.employment_type === ""
              ? "text-gray-400"
              : "text-gray-900"
          }`}
          value={props.datum[props.name] ? props.datum[props.name] : "-1"}
          onChange={handleChange}
        >
          <option value="-1" className="hidden">
            e.g. Full-time
          </option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="internship">Internship</option>
          <option value="freelance">Freelance</option>
          <option value="contract-employment">Contract Employment</option>
          <option value="temporary-employment">Temporary Employment</option>
          <option value="remote-employment">Remote Employment</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
