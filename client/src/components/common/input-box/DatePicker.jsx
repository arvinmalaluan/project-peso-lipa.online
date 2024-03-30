import React from "react";

const DatePicker = (props) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      {props.is_required ? (
        <input
          type="date"
          id={props.id}
          className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded  block w-full p-2.5"
          required
        />
      ) : (
        <input
          type="date"
          id={props.id}
          className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded block w-full p-2.5"
        />
      )}
    </div>
  );
};

export default DatePicker;
