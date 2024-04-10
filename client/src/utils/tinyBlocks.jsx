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
    <div className="p-4 border rounded">
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
      <p className="hidden text-xs text-gray-500 sm:block" key={index}>
        {content}
      </p>
    );
  });
};

const AddNewButton = (props) => {
  return (
    <>
      <hr className="mt-2 mb-4" />
      <button className="py-2 text-xs text-white border rounded bg-primary-900">
        Add more
      </button>
    </>
  );
};

const CompatibilityCard = (props) => {
  return (
    <div className="p-4 border rounded">
      <p className="text-xs text-gray-500">UI/UX Designer</p>
      <p className="font-semibold">68% Compatible</p>
    </div>
  );
};

const tinyBlocks = {
  InputWLabel,
  ThreeContentCard,
  RightSideBar,
  SampleData,
  AddNewButton,
  CompatibilityCard,
};

export default tinyBlocks;
