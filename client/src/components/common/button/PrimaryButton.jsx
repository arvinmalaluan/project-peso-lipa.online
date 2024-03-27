import React from "react";

const PrimaryButton = (props) => {
  return (
    <button
      className="w-full py-2 mt-4 text-white rounded bg-secondary-900"
      onClick={(e) => props.onclick(1)}
    >
      {props.label}
    </button>
  );
};

export default PrimaryButton;
