export const TextWithIcon = (props) => {
  return (
    <div className="flex flex-col items-start mb-6">
      <p className="pb-1 pr-4 mb-3 font-semibold text-gray-700 border-b-2 border-primary-900">
        {props.label}
      </p>
      <p className="text-sm text-justify text-gray-500">{props.data}</p>
    </div>
  );
};

export const FormatText = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 border rounded h-[102px]">
      <p className="pb-1 mb-2 text-xs font-semibold border-b">{props.label}</p>
      <p className="text-sm text-center">{props.data}</p>
    </div>
  );
};

export const FormatProfileText = (props) => {
  return (
    <div
      className={` ${
        props.title || props.bio
          ? "text-black"
          : "text-gray-500 hover:text-secondary-900 hover:underline cursor-pointer"
      } flex items-center gap-2 mb-2`}
    >
      {props.icon && <div className="flex-shrink-0 w-5 h-5">{props.icon}</div>}
      <p
        className={`${
          props.title || props.bio
            ? "font-semibold mb-2"
            : "text-sm line-clamp-1 "
        }`}
      >
        {props.name ? props.name : "Not set"}
      </p>
    </div>
  );
};
