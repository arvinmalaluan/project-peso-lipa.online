import React from "react";
import { Link } from "react-router-dom";
import useLocationHook from "../../hooks/useLocationHook";

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

const MyAList = (props) => {
  return (
    <Link
      to={props.path}
      className={`px-2 py-1 rounded text-sm  hover:bg-gray-200 ${
        useLocationHook(props.path)
          ? "font-semibold text-secondary-900 bg-gray-100"
          : "text-gray-500"
      }`}
    >
      {props.name}
    </Link>
  );
};

export default {
  TextArea,
  Input,
  MyAList,
};
