import React from "react";

const DatePicker = (props) => {
  function handleChange(event) {
    props.onchange({ [props.name]: event.target.value });
  }

  function formatDate(dateParam) {
    const date = new Date(dateParam);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

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
          className={`bg-gray-50 border border-gray-300 text-sm rounded  block w-full p-2.5 ${
            props.datum.application_deadline === ""
              ? "text-gray-400"
              : "text-gray-900"
          }`}
          name={props.name}
          onChange={handleChange}
          value={
            props.datum[props.name] ? formatDate(props.datum[props.name]) : ""
          }
          required
        />
      ) : (
        <input
          type="date"
          id={props.id}
          className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded block w-full p-2.5"
          name={props.name}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default DatePicker;
