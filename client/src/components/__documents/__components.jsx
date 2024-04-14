import { useContext } from "react";
import {
  AddButton,
  InputTag,
  RemoveInput,
  SampleDataPTag,
  TextArea,
} from "./__sub_components";
import seekerResumeContext from "../../context/seekerResumeContext";

export const ShowSampleData = (props) => {
  return (
    <div
      className={`w-full p-0 sm:p-4 hidden sm:block bg-transparent sm:bg-[#292929] ${
        props.title ? "rounded" : ""
      }`}
    >
      {props.title && (
        <p className="text-sm font-semibold text-black sm:text-base sm:text-white">
          {props.title}
        </p>
      )}

      <p className="mt-5 sm:block hidden font-[500] text-sm text-gray-300">
        Example data
      </p>
      {props.data.map((datum, index) => {
        return <SampleDataPTag content={datum} key={index} />;
      })}
    </div>
  );
};

export const Content = (props) => {
  const { resume } = useContext(seekerResumeContext);

  function extractNames(array) {
    return array.map((item) => item.name);
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <ShowSampleData data={props.data} title={props.title} />

      <div className="w-full px-0 sm:px-4">
        {props.subtitle && <p className="mb-2 text-sm">{props.subtitle}</p>}

        {resume[props.structures[0].name].map((datum, first_index) => {
          return (
            <div
              className="relative flex flex-col gap-2 mb-4"
              key={first_index}
            >
              {props.add_new && (
                <div
                  className={`absolute top-0 end-0 w-[3px] h-full ${
                    resume[props.structures[0].name].length > 1 &&
                    "bg-primary-100"
                  }`}
                ></div>
              )}
              {props.structures.map((input_structure, index) => {
                return (
                  <InputTag
                    {...input_structure}
                    key={index}
                    index={first_index}
                  />
                );
              })}

              {props.textarea_content && (
                <TextArea index={first_index} {...props.textarea_content} />
              )}

              {resume[props.structures[0].name].length > 1 && props.add_new && (
                <RemoveInput
                  index={first_index}
                  names={extractNames(props.structures)}
                />
              )}
            </div>
          );
        })}

        {props.add_new && <AddButton names={extractNames(props.structures)} />}
      </div>
    </div>
  );
};
