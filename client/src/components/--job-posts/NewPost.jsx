import React from "react";
import SideNavRecru from "../SideNavRecru";
import InputWithNoIcon from "../common/input-box/InputWithNoIcon";
import DatePicker from "../common/input-box/DatePicker";
import Select from "../common/input-box/Select";
import TextArea from "../common/input-box/TextArea";
import svgExports from "../../assets/svg/exports";

const NewPost = () => {
  return (
    <div className="flex w-full h-screen">
      <SideNavRecru />

      <div className="w-full h-screen overflow-y-scroll">
        <div className="w-[700px] m-auto">
          <div className="py-4">
            <a
              href=""
              className="flex items-center gap-2 mb-4 text-sm text-darkBackground-500 hover:text-secondary-900"
            >
              <div>
                <svgExports.LongArrow />
              </div>
              <span>Back</span>
            </a>
            <p className="mb-1 text-2xl">Post a job on PESO App</p>
            <p className="mb-4 text-sm text-darkBackground-500">
              The #1 job board for finding jobs and hiring talents.
            </p>
          </div>
          <form action="">
            <InputWithNoIcon
              label="Job Title"
              id="job_title"
              placeholder="e.g. UI/UX Designer"
              is_required={true}
            />

            <Select />

            <InputWithNoIcon
              label="Required Experience"
              id="required_experience"
              placeholder="e.g. 2 years of experience in UI/UX Design"
              is_required={true}
            />

            <InputWithNoIcon
              label="Required Education"
              id="required_education"
              placeholder="e.g. Bachelor's Degree"
              is_required={true}
            />

            <TextArea
              label="Job Description"
              id="job-description"
              placeholder="e.g. In a UI/UX design role, responsibilities encompass creating intuitive interfaces, conducting user research, and collaborating with cross-functional teams. Designers develop wireframes, prototypes, and design specifications while ensuring consistency and adherence to design principles. They iterate on designs based on feedback, stay updated with industry trends, and may contribute to front-end development efforts. The role offers the chance to craft user-friendly experiences, engage in creative problem-solving, and enjoy flexible work arrangements."
              rows={10}
            />

            <InputWithNoIcon
              label="Email Address"
              id="email_address"
              placeholder="e.g. contact_hr@gmail.com"
              is_required={true}
            />

            <DatePicker
              label="Application Deadline"
              id="deadline"
              is_required={true}
            />

            <TextArea
              label="Required Skills"
              id="required-skills"
              placeholder="e.g. Candidates for UI/UX design positions need technical proficiency in design tools like Adobe XD or Figma, along with a deep understanding of design principles. They must excel in user research to gather insights and possess strong communication skills for collaboration and presenting ideas. Creativity and innovation are essential for crafting user-centered designs that meet business objectives. A portfolio showcasing relevant projects is crucial to demonstrate their capabilities. Additionally, familiarity with front-end development and domain-specific knowledge can be advantageous."
              rows={10}
            />

            <TextArea
              label="Qualifications"
              id="qualifications"
              placeholder="e.g. Candidates for UI/UX design roles typically need a relevant bachelor's degree or equivalent experience, proficiency in design tools like Adobe XD or Figma, a strong understanding of design principles, and excellent communication skills. Optional qualifications may include front-end development knowledge and domain-specific understanding. Creativity, problem-solving abilities, and a commitment to continuous learning are also essential."
              rows={10}
            />

            <TextArea
              label="Responsibilities"
              id="responsibilities"
              placeholder="e.g. In a UI/UX design role, responsibilities include crafting user-friendly interfaces, conducting user research, and collaborating with teams. Designers create wireframes, prototypes, and specifications, iterate based on feedback, and stay updated with industry trends. They may also assist in front-end development to ensure the final product meets user experience goals."
              rows={10}
            />

            <TextArea
              label="Benefits"
              id="benefits"
              placeholder="e.g. In a UI/UX design role, benefits include the opportunity to contribute to user-friendly products, engage in creative problem-solving, and collaborate with diverse teams. Designers often enjoy flexible work arrangements and opportunities for professional growth. Additionally, they get to see their designs come to life and positively impact user experiences."
              rows={10}
            />

            <InputWithNoIcon
              label="Salary"
              id="salary"
              placeholder="e.g. 1000/day"
              is_required={true}
            />

            <div className="flex justify-end gap-4 pt-4 pb-8">
              <button className="px-4 py-2 text-sm border border-gray-300 rounded">
                Discard
              </button>
              <button className="px-4 py-2 text-sm text-white rounded bg-secondary-900">
                Create Job Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
