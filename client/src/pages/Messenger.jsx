import React from "react";
import SideNav from "../components/SideNav";
import svgExports from "../assets/svg/exports";

const FormatChatList = (props) => {
  return (
    <div class="flex items-center gap-2 hover:bg-gray-100 pl-3 py-2  rounded">
      <img
        class="w-10 h-10 rounded-full"
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
        alt=""
      />
      <div class=" dark:text-white w-100 truncate pr-4">
        <p className="font-[500]">Arvin Malaluan</p>
        <div className="relative flex items-center gap-1 w-100">
          <p className="overflow-hidden text-xs text-gray-500 truncate w-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae aperiam dolores delectus quae accusantium, labore quam
            voluptas quibusdam nihil! Iste.
          </p>
          <span className="mr-4 text-xs text-gray-500">10hr</span>
          <span class="w-3.5 h-3.5 absolute top-[-10px] right-[-8px] bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

const FormatChats = (props) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <div>
        <img
          class="w-7 h-7 rounded-full"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
          alt=""
        />
      </div>
      <p className="px-4 py-2 text-xs bg-gray-100 rounded-full">hello</p>
    </div>
  );
};

const Messenger = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-full ">
        <div className="grid grid-cols-12 max-w-[1200px] m-auto">
          <div className="h-screen col-span-3 border-x">
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

              {/* Conversation Container */}
              <div className="mt-4">
                <FormatChatList />
              </div>
            </div>
          </div>
          <div className="col-span-6 border-r ">
            <div className="flex items-center px-4 py-2 border-b bg-gray-50">
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-2">
                  <img
                    class="w-8 h-8 rounded-full"
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
            <div className="px-4 py-2 overflow-y-scroll h-[calc(100vh-102px)]">
              <FormatChats />
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
          </div>
          <div className="col-span-3 border-r">
            <img
              class="w-[80px] mt-2 h-[80px] mx-auto rounded-full"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
