import { Link } from "react-router-dom";
import { deleteFetch } from "../../apis/delete.api";

export const DropDown = ({ id, applications, setApplications, app_id }) => {
  function cancelApplication() {
    const url_ext = `apply/${app_id}`;

    deleteFetch(url_ext)
      .then((data) => {
        const copy = applications;
        const newcopy = copy.filter((data, index) => {
          if (data.application_id !== app_id) {
            return data;
          }
        });

        setApplications((prev) => newcopy);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="absolute z-20 right-0 flex flex-col p-4 w-[200px] bg-white border rounded w-100">
      <Link to={`/post/${id}`} className="p-1 text-start">
        View Job Post
      </Link>
      <Link onClick={cancelApplication} className="p-1 text-start">
        Withdraw Application
      </Link>
    </div>
  );
};
