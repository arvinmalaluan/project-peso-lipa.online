import { useContext } from "react";
import svgExports from "../../assets/svg/exports";
import { ChatFormat, ChatListFormat } from "./__sub_components";
import generalMessengerContext from "../../context/generalMessengerContext";

export const ChatListWindow = (props) => {
  return (
    <>
      <div className="px-2 py-2">
        <div className="flex items-center justify-between px-2 mb-2">
          <p className="font-[500] ">Messages</p>
          <button className="p-1 border rounded-full">
            <div className="w-4 h-4 ">
              <svgExports.AddButton />
            </div>
          </button>
        </div>
        <div className="px-2">
          <input
            type="text"
            className="w-full px-3 py-2 text-xs bg-gray-100 rounded-full outline-none"
            placeholder="Search here"
          />
        </div>
      </div>
      {/* Conversation Container */}
      <div className="h-[calc(100vh-149px)] mt-2 px-2 pb-4 bg-gray-50 overflow-scroll">
        <ChatListFormat />
      </div>
    </>
  );
};

export const ConversationWindow = (props) => {
  const { setActiveConvo } = useContext(generalMessengerContext);

  function goBack() {
    setActiveConvo(null);
  }

  return (
    <>
      <div className="flex items-center px-4 py-2 border-b bg-gray-50">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 p-2 mr-2 text-secondary-900"
              onClick={goBack}
            >
              <svgExports.BackArrow />
            </button>
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

      {/* Chats */}
      <div className="px-4 py-2 overflow-y-scroll h-[calc(100vh-162px)]">
        <ChatFormat />
      </div>

      <div className="flex items-center gap-2 px-4 py-2 border-t bg-gray-50 w-100">
        <svgExports.GIFIcon />
        <svgExports.EmojiIcon />
        <svgExports.ImageIcon />
        <input
          type="text"
          placeholder="Start typing here"
          className="w-full px-4 py-2 text-xs bg-gray-100 rounded-full outline-none"
        />
        <svgExports.SendIcon />
      </div>
    </>
  );
};

export const MoreInfoWindow = (props) => {
  return (
    <>
      <img
        className="w-[80px] mt-2 h-[80px] mx-auto rounded-full"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Bordered avatar"
      />

      <div>
        <p className="font-[500] text-center mt-2">Arvin Malaluan</p>
        <p className="text-xs text-center text-gray-500">Active Now</p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
              <svgExports.NotifOffIcon />
            </div>
            <span className="mt-1 text-xs text-gray-500">Unmute</span>
          </div>

          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
              <svgExports.SearchIcon />
            </div>
            <span className="mt-1 text-xs text-gray-500">Search</span>
          </div>
        </div>
      </div>
    </>
  );
};
