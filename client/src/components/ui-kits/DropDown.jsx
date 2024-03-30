import React from "react";

const DropDown = (props) => {
  function MyLink(props) {
    return (
      <a
        href={`#${props.action}`}
        aria-current="true"
        class="block w-full px-4 py-1.5 border-gray-200 cursor-pointer hover:bg-secondary-900 hover:text-white text-sm"
      >
        {props.label}
      </a>
    );
  }

  function MyLinkDelete(props) {
    return (
      <a
        href={`#${props.action}`}
        aria-current="true"
        class="block w-full px-4 py-1.5 border-gray-200 cursor-pointer text-primary-900 hover:bg-primary-900 hover:text-white text-sm"
      >
        {props.label}
      </a>
    );
  }

  return (
    <div
      className={
        props.isLastIndex
          ? "absolute border border-gray-300 bg-white overflow-hidden top-[-260px]  z-10 rounded end-0 w-[200px] text-start divide-gray-100"
          : "absolute border border-gray-300 bg-white overflow-hidden   z-10 rounded end-0 w-[200px] text-start divide-gray-100"
      }
    >
      <div className="mb-2">
        <MyLink action="" label="View Candidate" />
        <MyLink action="" label="Review Application" />
        <MyLink action="" label="Download Documents" />
      </div>

      <hr />

      <div className="mt-2 mb-2">
        <MyLink action="" label="Schedule Interview" />
        <MyLink action="" label="Send Message" />
        <MyLink action="" label="Move to next stage" />
      </div>

      <hr />

      <div className="mt-2">
        <MyLinkDelete action="" label="Reject Application" />
      </div>

      {/* <ul>
        <li>View Candidate</li>
        <li>Review Application</li>
        <li>Schedule Interview</li>
        <li>Send Message</li>
        <li>Move to Next Stage</li>
        <li>Reject Application</li>
      </ul> */}
    </div>
  );
};

export default DropDown;
