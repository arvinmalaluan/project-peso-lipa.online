import React from "react";
import svgExports from "../assets/svg/exports";

const InputWLabel = (props) => {
  return (
    <div>
      <p className="mb-1 text-xs font-[500]">{props.label}</p>
      <input
        className="w-full px-4 py-2 text-sm border rounded outline-none"
        type={props.label ? props.label : "text"}
      />
    </div>
  );
};

const ThreeContentCard = () => {
  return (
    <div className="p-4 border">
      <p className="text-sm text-gray-500">Engineer</p>
      <p className="font-semibold text-blue-500">90% Compatibility</p>
      <p className="mt-5 text-sm">Explore</p>
    </div>
  );
};

const RightSideBar = (props) => {
  return (
    <div className="">
      <p className="px-4 text-sm font-semibold">{props.title}</p>
      <p className="flex items-center justify-between px-4 py-1 ml-4 text-xs text-gray-500 border-l-4 border-gray-500 bg-gray-50">
        <span>{props.action}</span>
        <span className="w-4 h-4">
          <svgExports.AddButton />
        </span>
      </p>
    </div>
  );
};

const SampleData = (props) => {
  return props.contents.map((content, index) => {
    return (
      <p className="text-xs text-gray-500" key={index}>
        {content}
      </p>
    );
  });
};

const tinyBlocks = {
  InputWLabel,
  ThreeContentCard,
  RightSideBar,
  SampleData,
};

export default tinyBlocks;
