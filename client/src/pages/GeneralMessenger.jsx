import React, { useContext } from "react";
import { ChatListWindow, ConversationWindow, MoreInfoWindow } from "../components/__messenger/__components"; // prettier-ignore
import { SearchNav } from "../components/common/SearchNav";
import generalMessengerContext from "../context/generalMessengerContext";

const GeneralMessenger = (props) => {
  const { activeConvo } = useContext(generalMessengerContext);

  return (
    <div className="w-full">
      <SearchNav onOpen={props.onOpen} shown={props.shown} />
      <div>
        <div className="grid w-full grid-cols-12">
          <div className="col-span-12 border-r sm:col-span-5 md:col-span-4 xl:col-span-3">
            {activeConvo ? (
              <>
                <div className="block sm:hidden">
                  <ConversationWindow />
                </div>
                <div className="hidden sm:block">
                  <ChatListWindow />
                </div>
              </>
            ) : (
              <ChatListWindow />
            )}
          </div>

          <div className="hidden border-r sm:block sm:col-span-7 md:col-span-8 xl:col-span-6">
            <ConversationWindow />
          </div>

          <div className="col-span-3 border-r h-[calc(100vh - 60px)] hidden xl:block">
            <MoreInfoWindow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralMessenger;
