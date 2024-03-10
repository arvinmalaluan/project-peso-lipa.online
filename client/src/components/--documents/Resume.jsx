import React, { useContext } from "react";
import PersonalInformation from "./PersonalInformation";
import References from "./References";
import WorkRelatedInformation from "./WorkRelatedInformation";
import seekerResumeContext from "../../context/seekerResumeContext";

const Resume = () => {
  const { page } = useContext(seekerResumeContext);

  return (
    <>
      {page == 1 && <PersonalInformation />}
      {page == 2 && <WorkRelatedInformation />}
      {page == 3 && <References />}
    </>
  );
};

export default Resume;
