import { useContext, useEffect, useState } from "react";
import svgExports from "../../assets/svg/exports";
import { ChatFormat, ChatListFormat } from "./__sub_components";
import generalMessengerContext from "../../context/generalMessengerContext";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import { getFetch } from "../../apis/get.api";
import img from "../../assets/images/default_image.png";
import { db } from "../../utils/firebase.realtime";
import {
  child,
  get,
  onChildAdded,
  push,
  ref,
  set,
  update,
} from "firebase/database";

export const ChatListWindow = (props) => {
  const [users, setUsers] = useState(null);
  const [temp, setTemp] = useState([]);

  const { setActiveConvo } = useContext(generalMessengerContext);
  const { profile } = useContext(authenticatedContext);

  useEffect(() => {
    const url_ext = "profile/all";
    getFetch(url_ext)
      .then((data) => {
        setUsers((prev) => data.results);
        setTemp((prev) => data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function searchValue(event) {
    const search_value = event.target.value;
    const div = document.getElementById("search");
    const copy = users;

    const filtered = copy.filter((item, index) => {
      return item.name.toLowerCase().includes(search_value.toLowerCase());
    });

    if (search_value.length > 0) {
      div.classList.remove("hidden");
      setTemp((prev) => filtered);
    } else {
      div.classList.add("hidden");
    }
  }

  function ChatContainer({ data }) {
    function openChats() {
      const dbref = ref(db);
      const route = `rooms_${data.id > profile.id ? data.id : profile.id}_${data.id < profile.id ? data.id : profile.id}`; // prettier-ignore
      const div = document.getElementById("search");
      const input = document.getElementById("search-user");

      get(child(dbref, `chats/rooms/${route}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const load = data;
            load["room_exists"] = true;
            load["route"] = route;
            setActiveConvo(load);

            div.classList.add("hidden");
            input.value = "";
          } else {
            const load = data;
            load["room_exists"] = false;
            load["route"] = route;
            setActiveConvo(load);

            div.classList.add("hidden");
            input.value = "";
          }
        })
        .catch((error) => console.log(error));

      console.log(route);
    }

    return (
      <div className="flex gap-2 p-2" onClick={openChats}>
        <div>
          <img
            src={data.image ? data.image : img}
            alt=""
            height={36}
            width={36}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm font-[500]">
            {data.name ? data.name : "Loading ..."}
          </p>
          <p className="text-xs text-gray-500">
            {data.location ? data.location : "Loading ..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="px-2 py-2">
        <div className="flex items-center justify-between px-2 mb-2">
          <p className="font-[500] ">Messages</p>
        </div>
        <div className="relative px-2">
          <input
            type="text"
            className="w-full px-3 py-2 text-xs bg-gray-100 rounded-full outline-none"
            placeholder="Search here"
            id="search-user"
            onChange={searchValue}
          />

          <div
            className="hidden absolute bg-white w-[93%] z-10 top-[36px] drop-shadow-md"
            id="search"
          >
            <div className="p-2">
              {temp &&
                temp.map((item, index) => {
                  return <ChatContainer data={item} key={index} />;
                })}
            </div>

            <div className="px-8 py-2 text-center h-[250px] hidden">
              <p className="mb-3 text-xl font-semibold">Results</p>
              <p className="text-sm">Nothing found</p>
              <p className="mt-1 text-xs text-gray-500">
                We couldn't find any matches for "adfadfadf". Try checking for
                typos or using complete words.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[calc(100vh-149px)] mt-2 px-2 pb-4 bg-gray-50 overflow-y-scroll no-scrollbar">
        <ChatListFormat />
      </div>
    </>
  );
};

export const ConversationWindow = (props) => {
  const { setActiveConvo, activeConvo } = useContext(generalMessengerContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function goBack() {
    setActiveConvo(null);
  }

  const handleChange = (event) => {
    setMessage((prevMessage) => event.target.value);
  };

  console.log(messages);

  function createNewMesage() {
    const users = activeConvo.route.split("_");
    const chatRef = ref(db, `chats/chatlist`);
    const convoRef = ref(db, `chats/rooms/${activeConvo.route}`);

    const newMessage = {
      message: message,
      timestamp: new Date().valueOf(),
      sender: activeConvo.id == users[1] ? users[2] : users[1],
      room: activeConvo.route,
    };

    const newRoomLoad = {
      last_message: message,
      last_update: new Date().valueOf(),
      party_one: users[1],
      party_two: users[2],
    };

    push(chatRef, newMessage)
      .then((snapshot) => {
        // console.log("Message added successfully:", snapshot.key);
      })
      .catch((error) => {
        console.error("Error adding message:", error);
      });

    if (activeConvo.room_exists === false) {
      set(convoRef, newRoomLoad)
        .then((snapshot) => {
          // console.log("Message added successfully:", snapshot);
          setMessage((prev) => "");
        })
        .catch((error) => {
          console.error("Error adding message:", error);
        });
    } else {
      update(convoRef, newRoomLoad);
      setMessage((prev) => "");
    }
  }

  const reference = ref(db, "chats/chatlist");

  const handleChildAdded = (snapshot) => {
    const newData = snapshot.val();
    setMessages([...messages, newData]);

    console.log(snapshot.val());
  };

  useEffect(() => {
    const unsubscribe = onChildAdded(reference, handleChildAdded);

    return () => unsubscribe();
  }, []); // Dependency array ensures listener updates on data change

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
              <p className="text-sm font-semibold">
                {activeConvo && activeConvo.name}
              </p>
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
      <div className="px-4 py-2 overflow-y-scroll h-[calc(100vh-162px)] flex flex-col justify-end">
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
          id="message-box"
          value={message}
          onChange={handleChange}
        />

        <button onClick={createNewMesage}>
          <svgExports.SendIcon />
        </button>
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
