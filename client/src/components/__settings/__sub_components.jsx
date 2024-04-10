import { useContext } from "react";
import generalSettingsContext from "../../context/generalSettingsContext";

// ! needed props: (id, set, icon, name)
export const TabLink = (props) => {
  const { activeTab, setActiveTab } = useContext(generalSettingsContext);
  const is_active = activeTab === `#${props.id}`;

  function changeHash() {
    setActiveTab((prev) => `#${props.id}`);
  }

  return (
    <div
      className={`pl-2 border-l-2 ${
        is_active ? "border-secondary-900" : "border-white"
      }`}
    >
      <a
        href={`#${props.id}`}
        className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-secondary-800 hover:text-[whitesmoke] ${
          is_active ? "text-white bg-secondary-900" : "text-gray-400"
        }`}
        onClick={changeHash}
      >
        <div className="w-4 h-4">{props.icon}</div>
        <span className="text-sm font-normal">{props.name}</span>
      </a>
    </div>
  );
};

export const InputWithIcon = (props) => {
  const handleChange = (event) => {
    const new_value = event.target.value;
    props.onchange({ [props.name]: new_value });
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 pointer-events-none">{props.icon}</div>
      <input
        type="text"
        id="input-group-1"
        className="bg-gray-50 text-[13px] text-gray-900  w-full p-2 border rounded outline-none"
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export const InputWithLabel = (props) => {
  const handleChange = (event) => {
    const new_value = event.target.value;
    props.onchange({ [props.name]: new_value });
  };

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="s-name" className="mb-1 text-xs font-semibold">
        {props.label}
      </label>
      <input
        type="text"
        className="w-full p-2 text-[13px] text-gray-900 border rounded outline-none bg-gray-50"
        id="s-name"
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export const TextAreaWithLabel = (props) => {
  const handleChange = (event) => {
    const new_value = event.target.value;
    props.onchange({ [props.name]: new_value });
  };

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.id} className="mb-1 text-xs font-semibold">
        {props.label}
      </label>
      <textarea
        name=""
        id={props.id}
        rows="5"
        className="w-full p-2 text-[13px] text-gray-900 border rounded outline-none resize-none bg-gray-50"
        value={props.value}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
