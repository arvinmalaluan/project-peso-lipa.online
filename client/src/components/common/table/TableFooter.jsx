import React, { useEffect } from "react";

const TableFooter = (props) => {
  useEffect(() => {
    const table_body = document.getElementById("tbl-body");
    const tr = table_body.getElementsByTagName("tr");

    const total_count = document.querySelector("#total-count");
    total_count.innerText = tr.length;

    const checkboxes = document.querySelectorAll("#tbl-checkboxes");
    const checkbox_ = document.querySelector("#select-all-cb");

    checkbox_.checked = false;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }, [props.rP, props.cP]);

  const handleSelectChange = (event) => {
    props.setRPP(parseInt(event.target.value));
  };

  function next() {
    if (props.cP != props.npage && props.cP < props.npage) {
      props.setCP((prevCount) => prevCount + 1);
    }
  }

  function prev() {
    if (props.cP != 1) {
      props.setCP((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className="flex justify-between mt-4">
      <p className="text-sm">
        <span id="total-selected">0</span> of <span id="total-count"></span>{" "}
        row(s) selected.
      </p>

      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <p className="text-sm">Rows per page</p>
          <select
            value={props.rP}
            onChange={handleSelectChange}
            className="h-8 px-1 text-xs border border-gray-300 rounded-lg"
            id="rows-per-page"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-8">
          <p className="text-sm">
            Page {props.cP} of {props.npage}
          </p>
          <div className="flex">
            <a
              href="#"
              className="flex items-center justify-center h-8 px-3 text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-lg me-3 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={prev}
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </a>
            <a
              href="#"
              className="flex items-center justify-center h-8 px-3 text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={next}
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
