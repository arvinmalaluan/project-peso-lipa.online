import React from "react";

const InputWithNoIcon = (props) => {
  function handleChange(event) {
    props.onchange({ [props.name]: event.target.value });
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
          id={props.id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={props.placeholder}
          name={props.name}
          onChange={handleChange}
          value={props.datum[props.name] ? props.datum[props.name] : ""}
          required
        />
      ) : (
        <input
          id={props.id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={props.placeholder}
          name={props.name}
          onChange={handleChange}
          value={props.datum[props.name] ? props.datum[props.name] : ""}
        />
      )}
    </div>
  );
};

export default InputWithNoIcon;
