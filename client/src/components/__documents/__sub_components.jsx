import { useContext } from "react";
import seekerResumeContext from "../../context/seekerResumeContext";

export const InputTag = (props) => {
  const { resume, updateResume } = useContext(seekerResumeContext);

  function handleChange(event) {
    const new_value = event.target.value;

    const cloned_array = [...resume[props.name]];
    cloned_array[props.index] = new_value;

    updateResume({ [props.name]: cloned_array });
  }

  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="w-full px-4 py-2 text-xs border rounded"
      value={resume[props.name][props.index]}
      onChange={handleChange}
      id=""
    />
  );
};

export const SampleDataPTag = (props) => {
  return (
    <p className="hidden text-xs text-gray-500 sm:block">{props.content}</p>
  );
};

export const TextArea = (props) => {
  const { resume, updateResume } = useContext(seekerResumeContext);

  function handleChange(event) {
    const new_value = event.target.value;
    const cloned_array = [...resume[props.name]];
    cloned_array[props.index] = new_value;
    updateResume({ [props.name]: cloned_array });
  }

  return (
    <textarea
      name={props.name}
      rows={props.rows}
      placeholder={props.placeholder}
      className="w-full px-4 py-2 text-xs border rounded resize-none"
      value={resume[props.name][props.index]}
      onChange={handleChange}
      id=""
    />
  );
};

export const AddButton = ({ names }) => {
  const { resume, updateResume } = useContext(seekerResumeContext);

  function ifClicked() {
    names.map((name, index) => {
      updateResume({ [name]: [...resume[name], ""] });
    });
  }
  return (
    <div>
      <hr className="mt-0 mb-4" />
      <button
        className="w-full py-2 text-xs text-white border rounded bg-primary-900"
        onClick={ifClicked}
      >
        Add more
      </button>
    </div>
  );
};

export const RemoveInput = ({ names, index }) => {
  const { resume, updateResume } = useContext(seekerResumeContext);

  function removeInput() {
    names.map((name, names_index) => {
      const cloned_array = [...resume[name]];

      const new_array = cloned_array.filter((data, new_array_index) => {
        return new_array_index !== index;
      });

      updateResume({ [name]: new_array });
    });
  }

  return (
    <div className="flex justify-end w-full">
      <p
        className="text-xs pr-[15px] text-primary-900 hover:underline"
        onClick={removeInput}
      >
        remove
      </p>
    </div>
  );
};
