import React, { useContext, useEffect, useState } from "react";
import svgExports from "../assets/svg/exports";
import TimeLine from "../components/ui-kits/Timeline";
import { SearchNav } from "../components/common/SearchNav";
import { ModalForNewPost, Post, RecentActivity, RecentPost, } from "../components/__community/__components"; // prettier-ignore
import { get, limitToLast, onChildAdded, orderByChild, query, ref } from "firebase/database"; // prettier-ignore
import authenticatedContext from "../context/authentication/authenticatedContext";
import { community_db } from "../utils/firebase.realtime";

const GeneralCommunity = (props) => {
  const [createNew, setCreateNew] = useState(false);
  const { profile } = useContext(authenticatedContext);
  const [myPosts, setMyPosts] = useState(null);

  const createNewPost = () => {
    setCreateNew((prev) => true);
  };

  const closeCreateNewPost = () => {
    setCreateNew((prev) => false);
  };

  useEffect(() => {
    setMyPosts([]); // Clear messages on route change

    const myPostRef = ref(
      community_db,
      `community/user_posts/user_${profile.id}`
    );

    // Fetch existing messages with get (initial load)
    get(query(myPostRef))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const my_posts_ = [];
          snapshot.forEach((childSnapshot) => {
            my_posts_.push(childSnapshot.val());
          });
          setMyPosts(my_posts_);
        }
      })
      .catch((error) => console.log(error));

    // Listen for new messages with onChildAdded
    const unsubscribe = onChildAdded(myPostRef, (snapshot) => {
      const newMyPost = snapshot.val();
      setMyPosts((prevPosts) => [...prevPosts, newMyPost]);
    });

    return () => {
      unsubscribe(); // Cleanup subscription on unmount
    };
  }, [profile.id]);

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setPosts([]); // Clear messages on route change
    const postRef = ref(community_db, `community/posts`);

    // Fetch existing messages with get (initial load)
    get(query(postRef))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const posts_modified = [];
          for (const child in snapshot.val()) {
            const post_item = { ...snapshot.val()[child], key: child };
            posts_modified.push(post_item);
          }
          setPosts(posts_modified);
        }
      })
      .catch((error) => console.log(error));

    // Listen for new messages with onChildAdded
    const unsubscribe = onChildAdded(postRef, (snapshot) => {
      const newPost = { ...snapshot.val(), key: snapshot.key };

      setPosts((prev) => [...prev, newPost]);
    });

    return () => {
      unsubscribe(); // Cleanup subscription on unmount
    };
  }, [profile.id]);

  return (
    <>
      <div className="w-full h-screen overflow-y-scroll">
        <SearchNav onOpen={props.onOpen} shown={props.shown} />

        <div className="grid h-[calc(100vh - 59px)] grid-cols-7 gap-4">
          <div className="hidden sm:block sm:col-span-3 lg:col-span-3 xl:col-span-2 md:col-span-3">
            <div className="sticky top-[65px] h-[calc(100vh - 59px)] pt-4 pl-8 pr-4 overflow-y-scroll no-scrollbar">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">My Recent Posts</p>
                <button
                  className="text-xs font-medium underline text-secondary-900"
                  onClick={createNewPost}
                >
                  New Post
                </button>
              </div>
              <input
                type="text"
                placeholder="Search your posts here"
                className="w-full px-4 py-2 mt-3 text-xs bg-gray-100 rounded-full outline-none "
              />
              <div className="flex flex-col gap-2 mt-4">
                {myPosts &&
                  myPosts.map((item, index) => {
                    return <RecentPost key={index} data={item} />;
                  })}
              </div>

              <p className="flex gap-2 mt-4 mb-8 text-xs text-secondary-500">
                <svgExports.LongArrow />
                <span>More</span>
              </p>

              <p className="text-sm font-semibold">Recent Activity</p>
              {profile.id && <RecentActivity activity={2} id={profile.id} />}

              <p className="block mt-8 text-sm font-semibold xl:hidden">
                Hot in Community
              </p>
              <div className="block xl:hidden">
                <TimeLine />
              </div>
            </div>
          </div>

          <div className="col-span-7 px-4 sm:col-span-4 lg:col-span-4 xl:col-span-3 sm:pl-0 md:col-span-4 sm:pr-8 xl:pr-0 h-100">
            <div className="flex flex-col-reverse gap-2 my-4">
              {posts &&
                posts.map((post, index) => {
                  return <Post datum={post} key={index} />;
                })}
            </div>
          </div>

          <div className="hidden col-span-2 h-100 xl:block">
            <div className="h-[calc(100vh - 59px)] pt-4 pl-4 pr-8 overflow-y-scroll no-scrollbar">
              <div className="p-4 border rounded-sm">
                <p className="text-xs">
                  Start building connections and meaningful contents to boost
                  your profile.
                </p>
                <button className="w-full mt-4 text-sm rounded-full text-start">
                  Get Started
                </button>
              </div>

              <p className="mt-8 text-sm font-semibold">Hot in Community</p>
              <div className="">
                <TimeLine />
              </div>
            </div>
          </div>
        </div>
      </div>

      {createNew && <ModalForNewPost close_func={closeCreateNewPost} />}
    </>
  );
};

export default GeneralCommunity;
