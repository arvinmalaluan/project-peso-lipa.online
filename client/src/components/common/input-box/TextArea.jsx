import React from "react";

const TextArea = (props) => {
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
      <textarea
        id={props.id}
        rows={props.rows}
        className="resize-none block p-2.5 w-full text-sm text-justify text-gray-900 bg-gray-50 rounded border border-gray-300"
        placeholder={props.placeholder}
        name={props.name}
        onChange={handleChange}
        value={props.datum[props.name] ? props.datum[props.name] : ""}
      ></textarea>
    </div>
  );
};

export default TextArea;
