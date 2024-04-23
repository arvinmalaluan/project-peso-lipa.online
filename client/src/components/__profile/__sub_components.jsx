export const CompatibilityCard = ({ data }) => {
  return (
    <div className="p-4 border rounded">
      <p className="text-xs text-gray-500">{data.job_title}</p>
      <p className="font-semibold">{`${data.percentage} Compatible`}</p>
    </div>
  );
};

export const JobPostedCard = ({ data }) => {
  return (
    <div className="p-4 border rounded">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-500">
            Deadline:{" "}
            <span>
              {data && data.application_deadline
                ? data.application_deadline.split("T")[0]
                : "Not set"}
            </span>{" "}
          </p>
          <p className="mt-1 text-sm font-semibold line-clamp-1">
            {data.job_title}
          </p>
        </div>
        <span
          className={`px-2 py-1 text-xs text-white rounded-full ${
            data && data.status == "closed" ? "bg-primary-900" : "bg-green-900"
          }`}
        >
          {data && data.status ? data.status : "Not set"}
        </span>
      </div>
      <p className="mt-4 text-xs text-gray-500 line-clamp-3">
        {data && data.job_description ? data.job_description : "Not set"}
      </p>
      <p className="mt-4 text-xs text-gray-500">
        <b>{data && data.application_count ? data.application_count : "0"}</b>{" "}
        {`${data.application_count > 1 ? "people" : "person"} applied to this`}
      </p>
    </div>
  );
};
