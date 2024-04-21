import { CompatibilityCard, JobPostedCard } from "./__sub_components";
import { sample_compatibility_scores } from "./__dummy_data";
import { useNavigate } from "react-router-dom";

export const ProfileFirstGridSystem = ({ role }) => {
  return (
    <div
      className={
        role === 2
          ? "grid grid-cols-2 gap-2 py-2 md:grid-cols-3"
          : "grid grid-cols-1 gap-2 py-2 md:grid-cols-2"
      }
    >
      {sample_compatibility_scores.map((datum, index) => {
        if (index < 5) {
          return role === 2 ? (
            <CompatibilityCard data={datum} key={index} />
          ) : (
            <JobPostedCard data={datum} key={index} />
          );
        }
      })}
      {sample_compatibility_scores.length > 5 && (
        <div className="flex items-center justify-center border border-dashed">
          <p className="py-2 text-sm text-gray-500">See more</p>
        </div>
      )}
    </div>
  );
};

export const ProfileCommunityPosts = (props) => {
  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/community/post/${props.data.key}`);
  };

  return (
    <div className="p-4 border rounded h-[116px]" onClick={openPost}>
      <div className="flex items-end justify-between">
        <span className="px-2 py-1 text-xs bg-gray-100 border rounded-full">
          Public
        </span>
      </div>

      <p className="mt-2 text-xs line-clamp-3">
        {props.data && props.data.content ? props.data.content : "loading ..."}
      </p>
    </div>
  );
};
