import React from "react";

const TextArea = (props) => {
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
      ></textarea>
    </div>
  );
};

export default TextArea;
