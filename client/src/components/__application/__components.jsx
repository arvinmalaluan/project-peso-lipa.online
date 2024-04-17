import { Link } from "react-router-dom";

export const DropDown = ({ id }) => {
  return (
    <div className="absolute right-0 flex flex-col p-4 w-[200px] bg-white border rounded w-100">
      <Link to={`/post/${id}`} className="p-1 text-start">
        View Job Post
      </Link>
      <Link to="" className="p-1 text-start">
        Contact Company
      </Link>
      <Link to="" className="p-1 text-start">
        Withdraw Application
      </Link>
    </div>
  );
};
