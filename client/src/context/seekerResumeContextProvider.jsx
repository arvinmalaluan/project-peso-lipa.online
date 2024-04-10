import React, { useReducer, useState } from "react";
import seekerResumeContext from "./seekerResumeContext";

const SeekerResumeContextProvider = ({ children }) => {
  const [resume, updateResume] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      return newEvent;
    },
    {
      fullname: [""],
      contact_number: [""],
      email_address: [""],
      resume_objective: [""],
      tertiary_degree: [""],
      tertiary_institution: [""],
      tertiary_year_grad: [""],
      tertiary_achievements: [""],
      secondary_institution: [""],
      secondary_year_grad: [""],
      secondary_achievements: [""],
      primary_institution: [""],
      primary_year_grad: [""],
      primary_achievements: [""],
      language: [""],
      language_proficiency: [""],
      hobbies_interest: [""],
      skills: [""],
      skills_proficiency: [""],
      ar_reward_name: [""],
      ar_year_received: [""],
      ar_issuer: [""],
      ar_reward_description: [""],
      project_title: [""],
      project_year: [""],
      project_desc: [""],
      we_job_title: [""],
      we_start_date: [""],
      we_end_date: [""],
      we_notable_achievement: [""],
      reference_name: [""],
      reference_relationship_to_you: [""],
      reference_institution: [""],
      reference_contact_info: [""],
    }
  );
  const [page, setPage] = useState(1);

  return (
    <seekerResumeContext.Provider
      value={{ resume, updateResume, page, setPage }}
    >
      {children}
    </seekerResumeContext.Provider>
  );
};

export default SeekerResumeContextProvider;
