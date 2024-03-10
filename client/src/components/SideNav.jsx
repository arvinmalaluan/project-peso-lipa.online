import svgExports from "../assets/svg/exports";
import hoverUtils from "../utils/onHover";
import clickUtils from "../utils/onClick";
import useLocationHook from "../hooks/useLocationHook";
import { Link } from "react-router-dom";

const SideNav = () => {
  const MyAList = (props) => {
    return (
      <Link
        to={props.path}
        className={`px-2 py-1 rounded text-sm  hover:bg-gray-200 ${
          useLocationHook(props.path) ? "font-semibold" : "text-gray-500"
        }`}
      >
        {props.name}
      </Link>
    );
  };

  return (
    <div className="w-[260px] h-full relative px-8 py-4 border-r" id="side-bar">
      <div>
        <p className="pb-1 mt-8 text-xs border-b">Navigate to</p>
        <div className="flex flex-col mt-1">
          <MyAList name="Home" path="/home" />
          <MyAList name="Search Job" path="/search-jobs" />
        </div>

        <p className="pb-1 mt-8 text-xs border-b">Manage</p>
        <div className="flex flex-col mt-1">
          <MyAList name="Documents" path="/documents" />
          <MyAList name="Applications" path="/applications" />
          <MyAList name="Profile" path="/profile" />
          <MyAList name="Settings" path="/settings" />
        </div>

        <p className="pb-1 mt-8 text-xs border-b">Interact</p>
        <div className="flex flex-col mt-1">
          <MyAList name="Community" path="/community" />
          <MyAList name="Messenger" path="/messenger" />
        </div>
      </div>

      <div
        className="absolute top-1/2 translate-y-2/4 right-[-25px] w-6 h-6 hidden"
        id="toggle-for-side-r"
        onMouseEnter={hoverUtils.onHoverSide}
        onMouseLeave={hoverUtils.onHoverSideLeave}
        onClick={(event) => clickUtils.onClickSide(event, "toggle-for-side-r")}
      >
        <svgExports.ArrowForSideBarRight />
      </div>

      <div
        className="absolute top-1/2 translate-y-2/4 right-[-25px] w-6 h-6"
        id="toggle-for-side-n"
        onMouseEnter={hoverUtils.onHoverSide}
        onMouseLeave={hoverUtils.onHoverSideLeave}
        onClick={(event) => clickUtils.onClickSide(event, "toggle-for-side-n")}
      >
        <svgExports.ArrowForSideBarNeutral />
      </div>

      <div
        className="absolute top-1/2 translate-y-2/4 right-[-25px] w-6 h-6 hidden"
        id="toggle-for-side-l"
        onMouseEnter={hoverUtils.onHoverSide}
        onMouseLeave={hoverUtils.onHoverSideLeave}
        onClick={(event) => clickUtils.onClickSide(event, "toggle-for-side-l")}
      >
        <svgExports.ArrowForSideBarLeft />
      </div>
    </div>
  );
};

export default SideNav;
