import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateFetch } from "../../apis/patch.api";

const DropDown = (props) => {
  const navigate = useNavigate();

  function openChats() {
    navigate(`/messenger?id=${props.id}`);
  }

  function moveToTheNextStage() {
    let next_stage = "";

    switch (props.status) {
      case "application-received":
        next_stage = "reference-check";
        break;
      case "reference-check":
        next_stage = "resume-screening";
        break;
      case "resume-screening":
        next_stage = "phone-screening";
        break;
      case "phone-screening":
        next_stage = "offer-extended";
        break;
      case "offer-extended":
        next_stage = "interview-scheduled";
        break;
      case "interview-scheduled":
        next_stage = "interview-accepted";
        break;
      case "interview-accepted":
        next_stage = "interview-conducted";
        break;
      case "interview-conducted":
        next_stage = "onboarding";
        break;
    }

    const payload = { status: next_stage };
    const url_ext = `apply/${props.app_id}`;
    const copy = props.data;
    copy[props.index]["status"] = next_stage;

    updateFetch(payload, url_ext)
      .then((data) => {
        if (data.success) {
          props.setData(copy);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const reject = () => {
    props.setOpenConfirm((prev) => true);
  };

  function rejectConfirm() {
    if (props.app_id) {
      const next_stage = "rejected";

      const payload = { status: next_stage };
      const url_ext = `apply/${props.app_id}`;
      const copy = props.data;
      copy[props.index]["status"] = next_stage;

      updateFetch(payload, url_ext)
        .then((data) => {
          if (data.success) {
            props.setData(copy);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function MyLink(props) {
    return (
      <a
        href={`#${props.action}`}
        aria-current="true"
        className="block w-full px-4 py-1.5 border-gray-200 cursor-pointer hover:bg-secondary-900 hover:text-white text-sm"
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
        className="block w-full px-4 py-1.5 border-gray-200 cursor-pointer text-primary-900 hover:bg-primary-900 hover:text-white text-sm"
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
        <MyLink action="" label="View Profile" />
        <MyLink action="" label="View Resume" />
        <MyLink action="" label="Download Documents" />
      </div>

      <hr />

      <div className="mt-2 mb-2">
        <div onClick={() => props.setOpenModal((prev) => true)}>
          <MyLink action="" label="Schedule Interview" />
        </div>
        <div onClick={openChats}>
          <MyLink action="" label="Send Message" />
        </div>
        <div onClick={moveToTheNextStage}>
          <MyLink action="" label="Move to next stage" />
        </div>
      </div>

      <hr />

      <div className="mt-2" onClick={reject}>
        <MyLinkDelete action="" label="Reject Application" />
      </div>
    </div>
  );
};

export default DropDown;
