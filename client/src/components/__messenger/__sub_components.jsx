import { useContext } from "react";
import svgExports from "../../assets/svg/exports";
import generalMessengerContext from "../../context/generalMessengerContext";

export const ChatListFormat = (props) => {
  const { setActiveConvo } = useContext(generalMessengerContext);

  function updateActiveConvo() {
    setActiveConvo("id_pke1-154");
  }

  return (
    <div
      className="flex items-center gap-2 py-2 pl-3 rounded hover:bg-gray-100 "
      onClick={updateActiveConvo}
    >
      <img
        className="w-10 h-10 rounded-full"
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
        alt=""
      />
      <div className="pr-4 truncate dark:text-white w-100">
        <p className="font-[500]">Arvin Malaluan</p>
        <div className="relative flex items-center gap-1 w-100">
          <p className="overflow-hidden text-xs text-gray-500 truncate w-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae aperiam dolores delectus quae accusantium, labore quam
            voluptas quibusdam nihil! Iste.
          </p>
          <span className="mr-4 text-xs text-gray-500">10hr</span>
          <span className="w-3.5 h-3.5 absolute top-[-10px] right-[-8px] bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
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

export const ChatFormat = (props) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <div>
        <img
          className="hidden rounded-full w-7 h-7"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
          alt=""
        />
      </div>
      <p className="px-4 py-2 text-xs bg-gray-100 rounded-full">hello</p>
    </div>
  );
};
