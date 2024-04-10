export const contact_information = [
  { placeholder: "Fullname", name: "fullname", type: "text" },
  { placeholder: "Contact Number", name: "contact_number", type: "text" },
  { placeholder: "Email Address", name: "email_address", type: "email" },
];

export const textarea_contact_information = {
  name: "resume_objective",
  placeholder: "Resume Objective",
  rows: 10,
};

export const tertiary_education = [
  { placeholder: "College Degree", name: "tertiary_degree", type: "text" },
  {
    placeholder: "Name of Institution",
    name: "tertiary_institution",
    type: "text",
  },
  { placeholder: "Year Graduated", name: "tertiary_year_grad", type: "text" },
  { placeholder: "Achievements", name: "tertiary_achievements", type: "text" },
];

export const generalized_education = [
  [
    {
      placeholder: "Name of Institution",
      name: "secondary_institution",
      type: "text",
    },
    {
      placeholder: "Year Graduated",
      name: "secondary_year_grad",
      type: "text",
    },
    {
      placeholder: "Achievements",
      name: "secondary_achievements",
      type: "text",
    },
  ],
  [
    {
      placeholder: "Name of Institution",
      name: "primary_institution",
      type: "text",
    },
    { placeholder: "Year Graduated", name: "primary_year_grad", type: "text" },
    { placeholder: "Achievements", name: "primary_achievements", type: "text" },
  ],
];

export const spoken_languages = [
  { placeholder: "Language", name: "language", type: "text" },
  { placeholder: "Proficiency", name: "language_proficiency", type: "text" },
];

export const hobbies_interests = [
  {
    placeholder: "Hobbies / Interests",
    name: "hobbies_interest",
    type: "text",
  },
];

export const skills = [
  { placeholder: "Skills", name: "skills", type: "text" },
  { placeholder: "Proficiency", name: "skills_proficiency", type: "text" },
];

export const achievements_rewards = [
  { placeholder: "Reward title", name: "ar_reward_name", type: "text" },
  { placeholder: "Year received", name: "ar_year_received", type: "text" },
  { placeholder: "Issuer/Organization", name: "ar_issuer", type: "text" },
  {
    placeholder: "Description (Optional)",
    name: "ar_reward_description",
    type: "text",
  },
];

export const notable_projects = [
  { placeholder: "Project title", name: "project_title", type: "text" },
  {
    placeholder: "Year published/Year developed",
    name: "project_year",
    type: "text",
  },
];

export const text_area_notable_projects = {
  name: "project_desc",
  placeholder: "Description (Optional)",
  rows: 10,
};

export const work_experiences = [
  { placeholder: "Job Title", name: "we_job_title", type: "text" },
  { placeholder: "Start date", name: "we_start_date", type: "text" },
  { placeholder: "End date", name: "we_end_date", type: "text" },
];

export const text_area_work_experiences = {
  placeholder: "Notable Achievement",
  name: "we_notable_achievement",
  rows: 10,
};

export const references = [
  { placeholder: "Reference name", name: "reference_name", type: "text" },
  {
    placeholder: "Relationship to you",
    name: "reference_relationship_to_you",
    type: "text",
  },
  { placeholder: "Institution", name: "reference_institution", type: "text" },
  {
    placeholder: "Contact Information",
    name: "reference_contact_info",
    type: "text",
  },
];
