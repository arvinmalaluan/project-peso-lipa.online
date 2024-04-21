import React, { useContext, useEffect, useState } from "react";
import { ChatListWindow, ConversationWindow, MoreInfoWindow } from "../components/__messenger/__components"; // prettier-ignore
import { SearchNav } from "../components/common/SearchNav";
import generalMessengerContext from "../context/generalMessengerContext";
import { db } from "../utils/firebase.realtime";
import { onValue, ref, set } from "firebase/database";

const GeneralMessenger = (props) => {
  const { activeConvo } = useContext(generalMessengerContext);
  const [fromFb, setFromFb] = useState(null);

  useEffect(() => {
    const reference = ref(db, "chats"); // Replace 'path/to/your/data' with your actual path
    const unsubscribe = onValue(
      reference,
      (snapshot) => {
        const fetchedData = snapshot.val();
        setFromFb((prev) => fetchedData);
      },
      (error) => {
        console.error("Error:", error);
      }
    );

    // Cleanup function to detach the listener on component unmount
    return () => unsubscribe();
  }, []);

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
                  <ChatListWindow data={fromFb && fromFb.rooms} />
                </div>
              </>
            ) : (
              <ChatListWindow data={fromFb && fromFb.rooms} />
            )}
          </div>

          {activeConvo ? (
            <>
              <div className="hidden border-r sm:block sm:col-span-7 md:col-span-8 xl:col-span-6">
                <ConversationWindow />
              </div>

              <div className="col-span-3 border-r h-[calc(100vh - 60px)] hidden xl:block">
                <MoreInfoWindow />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center col-span-9">
              <p className="text-2xl font-semibold">No conversation selected</p>
              <p className="max-w-[350px] text-sm text-gray-500 mt-2 text-center">
                Please choose an existing conversation or start a new one.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralMessenger;
