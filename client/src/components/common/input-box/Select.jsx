import React from "react";

const Select = () => {
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
          className="text-gray-400 text-sm w-full h-full  p-2.5 bg-transparent outline-none"
          defaultValue={"-1"}
        >
          <option value="-1" className="hidden">
            e.g. Full-time
          </option>
          <option>Full-time</option>
          <option value="US">Part-time</option>
          <option value="CA">Internship</option>
          <option value="FR">Freelance</option>
          <option value="DE">Contract Employment</option>
          <option value="DE">Temporary Employment</option>
          <option value="DE">Remote Employment</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
