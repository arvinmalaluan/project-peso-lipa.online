import svgExports from "../../assets/svg/exports";

export const SearchNav = (props) => {
  return (
    <div
      className={
        props.shown
          ? "flex items-center justify-between w-full col-span-12 px-4 sm:px-8 py-3 bg-white border-b"
          : "sticky top-0 z-10 flex items-center justify-between w-full col-span-12 px-4 sm:px-8 py-3 bg-white border-b"
      }
    >
      <div className="w-[50%] xl:w-full lg:hidden">
        <button
          className="w-8 h-8 p-1 text-white rounded lg:hidden no-border bg-secondary-900"
          onClick={props.onOpen}
        >
          <svgExports.BurgerIcon />
        </button>
      </div>

      <input
        type="text"
        className="hidden w-full px-4 py-2 text-xs border rounded-full outline-none lg:block"
        placeholder="Search here"
      />

      <div className="flex justify-end w-full gap-2 ">
        <input
          type="text"
          className="hidden w-full px-4 py-2 text-xs border rounded-full outline-none sm:block lg:hidden"
          placeholder="Search here"
        />
        <div className="flex-shrink-0 block w-8 h-8 rounded-full sm:hidden bg-gray-50"></div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50"></div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50"></div>
      </div>
    </div>
  );
};
