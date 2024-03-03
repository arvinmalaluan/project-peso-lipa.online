import React from "react";

const TextArea = (props) => {
  return (
    <textarea
      name={props.name}
      rows={props.rows}
      placeholder={props.placeholder}
      className="w-full px-4 py-2 text-xs border rounded resize-none"
      id=""
    />
  );
};

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="w-full px-4 py-2 text-xs border rounded"
      id=""
    />
  );
};

export default {
  TextArea,
  Input,
};
