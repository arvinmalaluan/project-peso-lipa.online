const textAreaProps_cinfo = {
  name: "resume_objective",
  placeholder: "Resume Objective",
  rows: 10,
};

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
};
