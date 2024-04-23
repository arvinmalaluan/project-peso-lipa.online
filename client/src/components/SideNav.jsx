import useLocationHook from "../hooks/useLocationHook";
import { Link, useNavigate } from "react-router-dom";
import commonExports from "./common/commonExports";
import { useContext } from "react";
import authenticatedContext from "../context/authentication/authenticatedContext";
import img from "../assets/images/default_image.png";
import generalLoginContext from "../context/authentication/generalLoginContext";

const SideNav = () => {
  const { profile } = useContext(authenticatedContext);
  const { updateAuthenticator } = useContext(generalLoginContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    updateAuthenticator({ isLoggedIn: false, role: null, id: null });
    navigate("/");
  };

  return (
    <div
      className="w-[260px] h-full relative flex justify-between flex-col  border-r"
      id="side-bar"
    >
      <div>
        <div className="flex items-start gap-2 px-6 py-4 mb-4">
          <img
            className="w-[40px] h-[40px] rounded-full aspect-square object-cover object-center"
            src={profile && profile.image ? profile.image : img}
            alt="Rounded avatar"
          />
          <div>
            <p className="font-semibold text-secondary-900">
              {profile && profile.name ? profile.name : "Unset"}
            </p>
            <p className="text-xs text-[darkgray]">Set status</p>
          </div>
        </div>

        <div className="px-6">
          <p className="pb-1 mx-2 text-[darkgray] text-xs border-b">
            Navigate to
          </p>
          <div className="flex flex-col mt-1">
            <commonExports.MyAList name="Home" path="/" />
            <commonExports.MyAList name="Search Job" path="/search-jobs" />
          </div>

          <p className="pb-1 mx-2 text-[darkgray] text-xs border-b mt-6">
            Manage
          </p>
          <div className="flex flex-col mt-1">
            <Link
              to="/documents"
              className={`px-2 hidden lg:block py-1 rounded text-sm hover:bg-gray-200 ${
                useLocationHook("/documents")
                  ? "font-semibold"
                  : "text-gray-500"
              }`}
            >
              Documents
            </Link>

            <details className="block px-2 text-sm lg:hidden">
              <summary
                className={`py-1 list-none ${
                  useLocationHook("/documents")
                    ? "font-semibold"
                    : "text-gray-500"
                }`}
              >
                Documents
              </summary>
              <div className="flex flex-col">
                <commonExports.MyAList name="Resume" path="/documents#resume" />
                <commonExports.MyAList name="TOR" path="/documents#tor" />
                <commonExports.MyAList name="PSA" path="/documents#psa" />
                <commonExports.MyAList name="NBI" path="/documents#nbi" />
              </div>
            </details>
            <commonExports.MyAList name="Applications" path="/applications" />
            <commonExports.MyAList name="Profile" path="/profile" />

            <Link
              to="/settings"
              className={`px-2 hidden md:block py-1 rounded text-sm hover:bg-gray-200 ${
                useLocationHook("/settings") ? "font-semibold" : "text-gray-500"
              }`}
            >
              Settings
            </Link>

            <details className="block px-2 text-sm md:hidden">
              <summary
                className={`py-1 list-none ${
                  useLocationHook("/settings")
                    ? "font-semibold"
                    : "text-gray-500"
                }`}
              >
                Settings
              </summary>
              <div className="flex flex-col">
                <commonExports.MyAList
                  name="Public Profile"
                  path="/settings#public-profile"
                />
                <commonExports.MyAList
                  name="Account"
                  path="/settings#account"
                />
                <commonExports.MyAList
                  name="Appearance"
                  path="/settings#appearance"
                />
                <commonExports.MyAList
                  name="Notifications"
                  path="/settings#notifications"
                />
              </div>
            </details>
          </div>

          <p className="pb-1 mx-2 text-[darkgray] text-xs border-b mt-6">
            Interact
          </p>
          <div className="flex flex-col mt-1">
            <commonExports.MyAList name="Community" path="/community" />
            <commonExports.MyAList name="Messenger" path="/messenger" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default SideNav;
