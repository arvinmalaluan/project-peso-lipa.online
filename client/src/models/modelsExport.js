// ---------- ---------- ---------- ---------- Text Area ---------- ---------- ---------- ----------
const textAreaProps_cinfo = {
  name: "resume_objective",
  placeholder: "Resume Objective",
  rows: 10,
};

const textAreaProps_projects = {
  placeholder: "Project Overview",
  name: "project_overview",
  rows: 10,
};

// ---------- ---------- ---------- ---------- Input Props ---------- ---------- ---------- ----------
const inputProps_cinfo = [
  { placeholder: "Fullname", name: "fullname", type: "text" },
  { placeholder: "Contact Number", name: "contact_number", type: "text" },
  { placeholder: "Email Address", name: "email_address", type: "email" },
];

const inputProps_teduc = [
  { placeholder: "College Degree", name: "college_degree", type: "text" },
  {
    placeholder: "Name of Institution",
    name: "name_of_institution",
    type: "text",
  },
  { placeholder: "Year Graduated", name: "year_graduated", type: "text" },
  { placeholder: "Achievements", name: "achievements", type: "text" },
];

const inputProps_geduc = [
  {
    placeholder: "Name of Institution",
    name: "name_of_institution",
    type: "text",
  },
  { placeholder: "Year Graduated", name: "year_graduated", type: "text" },
  { placeholder: "Achievements", name: "achievements", type: "text" },
];

const inputProps_spoken = [
  { placeholder: "Language", name: "languages", type: "text" },
  { placeholder: "Proficiency", name: "proficiency", type: "text" },
];

const inputProps_hbbies = [
  { placeholder: "Hobbies and Interests", name: "hobbies", type: "text" },
];

const inputProps_achievements = [
  { placeholder: "Reward title", name: "reward_name", type: "text" },
  { placeholder: "Year received", name: "year_received", type: "text" },
  { placeholder: "Issuer/Organization", name: "issuer", type: "text" },
  {
    placeholder: "Description (Optional)",
    name: "reward_description",
    type: "text",
  },
];

const inputProps_references = [
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

const inputProps_projects = [
  { placeholder: "Project title", name: "project_title", type: "text" },
  {
    placeholder: "Year published/Year developed",
    name: "project_year",
    type: "text",
  },
];

const textAreaProps_skills = {
  name: "skills",
  placeholder: "Skills",
  rows: 10,
};

// ---------- ---------- ---------- ---------- Example Payloads ---------- ---------- ---------- ----------
const sampleDataForCInfo = [
  "Fullname: Hello",
  "Contact Number: 09196383586",
  "Email Address: peso-net.lipe@gmail.com",
  "Resume Objective: To get rich",
];
const sampleDataForTEduc = [
  "College Degree: Bachelor of Science in Information Technology",
  "Name of Institution: Batangas State University",
  "Year Graduated: 2024",
  "Achievements: Cum Laude",
];
const sampleDataForGEduc = [
  [
    "Name of Institution: University of Batangas",
    "Year Graduated: 2020",
    "Achievements: n/a",
  ],
  [
    "Name of Institution: Simlong Batangas City",
    "Year Graduated: 2014",
    "Achievements: Valedictorian",
  ],
];
const sampleDataForSpoken = ["Language: Tagalog", "Proficiency: Basic"];
const sampleDataForHbbies = ["Hobbies and Interests: Reading"];
const sampleDataForAchievements = [
  "Reward title: Cum Laude",
  "Year received: 2024",
  "Issuer/Organization: Batangas State University",
  "Description: n/a",
];
const sampleDataForReferences = [
  "Reference name: Arvin Malaluan",
  "Relationship to you: Colleague",
  "Institution: Batangas State University",
  "Contact Information: 09196383586",
];
const sampleDataForProjects = [
  "Project Title: Project PESO-NET.online",
  "Year Published/Year Developed: 2023 - 2024",
  "Project Overview: An automated job portal that uses data analytics to prescribe job positions based on your skillsets.",
];
const sampleDataForSkills = [
  "Skills: With a versatile skill set encompassing proficiency in diverse programming languages and expertise in full-stack development, I excel in designing and implementing scalable solutions. My keen problem-solving abilities, attention to detail, and commitment to staying abreast of industry trends make me a valuable asset in delivering high-quality software solutions within dynamic and collaborative team environments.",
];

export default {
  textAreaProps_cinfo,
  inputProps_cinfo,
  inputProps_teduc,
  inputProps_geduc,
  sampleDataForCInfo,
  sampleDataForTEduc,
  sampleDataForGEduc,
  inputProps_spoken,
  sampleDataForSpoken,
  inputProps_hbbies,
  sampleDataForHbbies,
  textAreaProps_skills,
  sampleDataForSkills,
  inputProps_achievements,
  sampleDataForAchievements,
  inputProps_projects,
  textAreaProps_projects,
  sampleDataForProjects,
  inputProps_references,
  sampleDataForReferences,
};
