import { useContext, useEffect, useState } from "react";
import svgExports from "../../assets/svg/exports";
import generalMessengerContext from "../../context/generalMessengerContext";
import { getFetch } from "../../apis/get.api";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import img from "../../assets/images/default_image.png";

export const ChatListFormat = ({ datum }) => {
  const { setActiveConvo, activeConvo } = useContext(generalMessengerContext);
  const { profile } = useContext(authenticatedContext);
  const [theirProf, setTheirProf] = useState(null);

  function updateActiveConvo() {
    const route = `rooms_${datum.party_one}_${datum.party_two}`; // prettier-ignore
    const load = theirProf;
    load["room_exists"] = true;
    load["route"] = route;

    setActiveConvo((prev) => load);
    console.log();
  }

  function formatTime(timestamp) {
    const currentTime = new Date();
    const delta = (currentTime.getTime() - timestamp) / 1000; // Convert milliseconds to seconds

    if (delta < 60) {
      return `${Math.floor(delta)} s`;
    } else if (delta < 3600) {
      return `${Math.floor(delta / 60)} m`;
    } else if (delta < 86400) {
      return `${Math.floor(delta / 3600)} h`;
    } else if (delta < 604800) {
      return `${Math.floor(delta / 86400)} d`;
    } else if (delta < 31536000) {
      return `${Math.floor(delta / 604800)} w`;
    } else {
      return `${Math.floor(delta / 31536000)} y`;
    }
  }

  useEffect(() => {
    const url_ext = `profile/get_id/${
      profile.id == datum.party_one ? datum.party_two : datum.party_one
    }`;

    getFetch(url_ext)
      .then((data) => {
        setTheirProf((prev) => data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="flex items-center gap-2 py-2 pl-3 rounded hover:bg-gray-100 "
      onClick={updateActiveConvo}
    >
      <img
        className="object-cover object-center w-10 h-10 rounded-full aspect-square"
        src={theirProf && theirProf.image ? theirProf.image : img}
        alt=""
      />
      <div className="w-full pr-4 truncate dark:text-white w-100">
        <p className="font-[500]">
          {theirProf ? theirProf.name : "loading ..."}
        </p>
        <div className="relative flex items-center gap-1 w-100">
          <p
            className={`overflow-hidden text-xs truncate w-100 ${
              datum && datum.status == "unread" && datum.sender != profile.id
                ? "text-black font-[500]"
                : "text-gray-500 font-normal"
            }`}
          >
            {`${datum && datum.sender == profile.id ? "You: " : ""} ${
              datum ? datum.last_message : "loading ..."
            }`}
          </p>
          <span className="mr-4 text-xs text-gray-500">
            {datum ? formatTime(datum.last_update) : "loading ..."}
          </span>
          {datum.status == "unread" && datum.sender != profile.id && (
            <span className="w-3.5 h-3.5 absolute top-[-10px] right-[-4px] bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export const ChatHeader = (props) => {
  return (
    <div className="flex items-center px-4 py-2 border-b bg-gray-50">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bordered avatar"
          />
          <div>
            <p className="text-sm font-semibold">Arvin C. Malaluan</p>
            <p className="text-xs text-gray-500">Busy</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-1 rounded-full">
            <div className="w-4 h-4 ">
              <svgExports.Phone />
            </div>
          </button>

          <button className="p-1 rounded-full">
            <div className="w-4 h-4 ">
              <svgExports.VideoCall />
            </div>
          </button>

          <button className="p-1 border rounded-full">
            <div className="w-4 h-4 ">
              <svgExports.MoreButton />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const ChatFormat = ({ datum, profile }) => {
  return (
    <div
      className={`flex items-center mb-2 ${
        datum.sender == profile ? "justify-end" : "justify-start"
      }`}
    >
      <div>
        <img
          className="hidden rounded-full w-7 h-7"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
          alt=""
        />
      </div>
      <p
        className={`px-4 py-2 text-xs rounded-full ${
          datum.sender == profile ? "bg-blue-500 text-white" : "bg-gray-100"
        }`}
      >
        {datum.message}
      </p>
    </div>
  );
};
