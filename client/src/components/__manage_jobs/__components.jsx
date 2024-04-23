import { useNavigate } from "react-router-dom";
import { updateFetch } from "../../apis/patch.api";

export const Dropdown = (props) => {
  const navigate = useNavigate();

  function editPost(id, fk) {
    navigate(`/edit-post/${id}/${fk}`);
  }

  function changeStatus() {
    const copy = props.data;
    copy[props.index].status = props.status === "open" ? "closed" : "open";
    props.set((prev) => copy);

    const url_ext = `jobpost/patch/${props.id}`;
    const payload = { status: props.status === "open" ? "closed" : "open" };

    updateFetch(payload, url_ext)
      .then((data) => {
        if (data.success) {
          alert("success");
        } else {
          alert("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <button
        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        onClick={(e) => editPost(props.id, props.fk)}
      >
        Edit Post
      </button>
      <button className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        View Applicants
      </button>
      <button
        onClick={changeStatus}
        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Mark as {props.status === "closed" ? "Open" : "Closed"}
      </button>
      <button className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        Download
      </button>
    </div>
  );
};

export const DropdownCheckbox = (props) => {
  function handleChange(event, index) {
    const copy = props.data.data;
    copy[index].checked = event.target.checked;
    props.set(copy);
  }

  return (
    <div className="bg-white divide-y divide-gray-100 rounded-lg shadow w-60">
      <ul className="p-3 space-y-1 text-sm ">
        {props.data.data.map((value, index) => {
          return (
            <li key={index}>
              <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                <div className="flex items-center h-5">
                  <input
                    id={`cb-${index}`}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-sm text-blue-600 bg-gray-100 border-gray-300 rounded "
                    checked={value.checked}
                    onChange={(event) => handleChange(event, index)}
                  />
                </div>
                <label
                  htmlFor={`cb-${index}`}
                  className="w-full text-sm font-medium text-gray-900 ms-2"
                >
                  {value.title}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
