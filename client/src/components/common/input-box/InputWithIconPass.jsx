import React, { useState } from "react";
import svgExports from "../../../assets/svg/exports";

const InputWithIconPass = (props) => {
  const [visibility, setVisibility] = useState("hide");

  function visibilityHandler(value) {
    setVisibility(value);
  }

  return (
    <>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {props.icon}
        </div>

        {visibility === "hide" ? (
          <div
            className="absolute inset-y-0 end-0 flex cursor-pointer items-center pr-3.5"
            id="eye-on"
            onClick={(e) => visibilityHandler("show")}
          >
            <svgExports.Eye />
          </div>
        ) : (
          <div
            className="absolute inset-y-0 end-0 flex cursor-pointer items-center pr-3.5"
            id="eye-off"
            onClick={(e) => visibilityHandler("hide")}
          >
            <svgExports.EyeSlash />
          </div>
        )}

        <input
          type={visibility === "show" ? "text" : "password"}
          id={props.id}
          autoComplete="off"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default InputWithIconPass;
