import { useContext, useEffect, useState } from "react";
import svgExports from "../../assets/svg/exports";
import authenticatedContext from "../../context/authentication/authenticatedContext";
import img from "../../assets/images/default_image.png";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

import { community_db } from "../../utils/firebase.realtime";
import {
  get,
  limitToLast,
  onChildAdded,
  push,
  query,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { formatTimeByTimeUnits } from "./__functions";
import { getFetch } from "../../apis/get.api";

export const RecentPost = (props) => {
  const { profile } = useContext(authenticatedContext);

  function formatTime(timestamp) {
    const currentTime = new Date();
    const delta = (currentTime.getTime() - timestamp) / 1000; // Convert milliseconds to seconds

    if (delta < 60) {
      return `${Math.floor(delta)} s`;
    } else if (delta < 3600) {
      return `${Math.floor(delta / 60)}m`;
    } else if (delta < 86400) {
      return `${Math.floor(delta / 3600)}h`;
    } else if (delta < 604800) {
      return `${Math.floor(delta / 86400)}d`;
    } else if (delta < 31536000) {
      return `${Math.floor(delta / 604800)}w`;
    } else {
      return `${Math.floor(delta / 31536000)}y`;
    }
  }

  return (
    props.data.content && (
      <div className="flex items-center gap-2">
        <img
          className="w-5 h-5 rounded-full"
          src={profile.image ? profile.image : img}
          alt="Rounded avatar"
        />
        <div className="flex items-center w-full gap-1">
          <p className="text-sm font-medium">
            {`${props.data.content.substring(0, 20)}${
              props.data.content.length > 20 ? "..." : ""
            }`}
          </p>
          <p className="font-[400] text-xs text-gray-500">
            {formatTime(props.data.timestamp)}
          </p>
        </div>
      </div>
    )
  );
};

export const Post = (props) => {
  const [author, setAuthor] = useState(null);
  const [viewPost, setViewPost] = useState(false);
  const [isEngaged, setIsEngaged] = useState(null);
  const { profile } = useContext(authenticatedContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.datum.engage) {
      const engage = props.datum.engage;
      const user = `user_${profile.id}`;

      for (const item in engage) {
        if (user == item) {
          setIsEngaged(engage[item]);
        }
      }
    } else {
    }
  }, []);

  useEffect(() => {
    if (props.datum) {
      const author = props.datum.author.split("_")[1];
      const url_ext = `profile/get_id/${author}`;

      getFetch(url_ext)
        .then((data) => {
          setAuthor(data.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.datum]);

  const engage = (type) => {
    const db_ref = ref(community_db, `community/posts/${props.datum.key}/engage/user_${profile.id}`); // prettier-ignore
    const payload = {
      timestamp: new Date().valueOf(),
      type: type,
    };
    if (isEngaged) {
      if (type == isEngaged.type) {
        remove(db_ref)
          .then(() => {
            setIsEngaged((prev) => null);
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
          });
      } else {
        if (props.datum.key && profile.id) {
          update(db_ref, payload)
            .then((snapshot) => {
              setIsEngaged({
                timestamp: new Date().valueOf(),
                type: type,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("error");
        }
      }
    } else {
      set(db_ref, payload)
        .then((snapshot) => {
          setIsEngaged({
            timestamp: new Date().valueOf(),
            type: type,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const count = () => {
    if (props.datum.engage) {
      const data = props.datum.engage;
      let like = 0;
      let dislike = 0;

      for (const item in data) {
        if (data[item].type == "dislike") {
          dislike = +1;
        } else {
          like = +1;
        }
      }

      if (like > dislike) {
        return `${like} ${like > 1 ? "likes" : "like"}`;
      } else if (dislike > like) {
        return `${dislike} ${dislike > 1 ? "dislikes" : "dislike"}`;
      } else {
        return "";
      }
    }
  };

  const countComments = () => {
    if (props.datum.comments) {
      return `${Object.keys(props.datum.comments).length} ${
        Object.keys(props.datum.comments).length > 1 ? "comments" : "comment"
      }`;
    }
  };

  const handleViewPost = () => {
    navigate(`/community/post/${props.datum.key}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="border rounded">
        <div className="flex gap-2 p-4 pb-0">
          <div className="flex-shrink-0">
            <img
              className="object-cover object-center w-8 h-8 rounded-full aspect-square"
              src={author && author.image ? author.image : img}
              alt="Rounded avatar"
            />
          </div>

          <div className="w-full ">
            {author ? (
              <p className="text-sm">
                {author && author.name == profile.name
                  ? "You"
                  : author.name
                  ? author.name
                  : "Loading ..."}
              </p>
            ) : (
              <p className="text-sm">Loading ...</p>
            )}
            <p className="text-xs text-[gray]">
              {props.datum && props.datum.timestamp
                ? formatTimeByTimeUnits(props.datum.timestamp)
                : "Loading"}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="w-4 h-4">
              <svgExports.MoreButton />
            </button>
            <button className="w-4 h-4">
              <svgExports.CloseIcon />
            </button>
          </div>
        </div>

        <p className="px-4 mt-2 text-sm">
          {props.datum && props.datum.textContent
            ? props.datum.textContent
            : "Loading ..."}
        </p>

        <div
          className={`relative`}
          onMouseEnter={() => setViewPost((prev) => true)}
          onMouseLeave={() => setViewPost((prev) => false)}
        >
          <img
            src={
              props.datum && props.datum.imageContent
                ? props.datum.imageContent
                : null
            }
            alt=""
            className={`w-full my-2 max-h-[400px] object-cover object-center ${
              viewPost ? "brightness-50" : ""
            }`}
          />
          {props.datum && props.datum.imageContent && (
            <p
              className={`absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer ${
                viewPost ? "text-white" : "hidden"
              }`}
              onClick={handleViewPost}
            >
              View Post
            </p>
          )}
        </div>

        <div className="flex items-center justify-between px-4 text-xs text-gray-500">
          <p>{count()}</p>
          <p>{countComments()}</p>
        </div>

        <div className="flex items-center gap-3 p-4">
          <button
            className={`flex-shrink-0 w-8 h-8 p-2 rounded-full ${
              isEngaged && isEngaged.type == "like"
                ? "bg-secondary-900 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => engage("like")}
          >
            <svgExports.LikeIcon />
          </button>
          <button
            className={`flex-shrink-0 w-8 h-8 p-2 rounded-full ${
              isEngaged && isEngaged.type == "dislike"
                ? "bg-primary-900 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => engage("dislike")}
          >
            <svgExports.DislikeIcon />
          </button>
          <input
            type="text"
            onClick={handleViewPost}
            placeholder="Comment your thoughts here"
            className="w-full px-4 py-2 text-xs bg-gray-100 rounded-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export const ModalForNewPost = (props) => {
  const { profile } = useContext(authenticatedContext);
  const [payload, setPayload] = useState({ author: profile && `user_${profile.id}`, textContent: "", imageContent: "", lastModified: "" }); // prettier-ignore

  const handleImageProcessing = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPayload((prev) => ({ ...prev, imageContent: e.target.result }));
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleTextChange = (event) => {
    setPayload((prev) => ({ ...prev, textContent: event.target.value }));
  };

  const removeImage = () => {
    setPayload((prev) => ({ ...prev, imageContent: "" }));
  };

  const postEligibility = () => {
    if (payload.imageContent || payload.textContent) {
      return true;
    } else {
      return false;
    }
  };

  const handleCreatePostRequest = () => {
    const unique_key = nanoid(10);

    const user_ref = ref(community_db, `community/user_posts/${profile && `user_${profile.id}`}/${unique_key}`) // prettier-ignore
    const user_data = { timestamp: new Date().valueOf(), content: payload.textContent, uid: unique_key} // prettier-ignore

    const user_posts_ref = ref(community_db, `community/posts`);
    const user_posts_data = {...payload, timestamp: new Date().valueOf(), uid: unique_key} // prettier-ignore

    const activity_log_ref = ref(community_db, `community/activity_log/${profile && `user_${profile.id}`}/${unique_key}`) // prettier-ignore
    const activity_log_data = { timestamp: new Date().valueOf(), uid: unique_key, message: "Successfully created a post" } // prettier-ignore

    try {
      push(user_posts_ref, user_posts_data)
        .then((snapshot) => {
          console.log("success: user_posts");

          set(user_ref, { ...user_data, key: snapshot.key })
            .then((snapshot) => {
              console.log("success: user");
            })
            .catch((error) => {
              console.log(error);
            });

          set(activity_log_ref, { ...activity_log_data, key: snapshot.key })
            .then((snapshot) => {
              console.log("success: user");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });

      props.close_func();
    } catch (error) {
      console.log(error);
      props.close_func();
    }
  };

  return (
    <div className="absolute">
      <div
        className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm"
        onClick={props.close_func}
      ></div>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="bg-white w-[500px] rounded absolute z-30">
          <div className="relative px-4 py-4 border-b">
            <p className="text-center">Create post</p>
            <div
              className="absolute top-0 bottom-0 w-6 h-6 p-1 my-auto bg-gray-200 rounded-full right-4"
              onClick={props.close_func}
            >
              <svgExports.CloseIcon />
            </div>
          </div>

          <div className="p-4">
            <div className="flex gap-3">
              <img
                className="h-[40px] w-[40px] aspect-square object-cover object-center rounded-full overflow-hidden"
                src={profile && profile.image ? profile.image : img}
                alt=""
              />
              <div>
                <p>{profile.name ? profile.name : "Loading ..."}</p>
                <p className="text-xs">Public</p>
              </div>
            </div>

            <textarea
              rows="5"
              className="w-full mt-4 outline-none resize-none"
              placeholder={`Share your story, ${
                profile.name ? profile.name.split(" ")[0] : User
              }`}
              value={payload.textContent}
              onChange={handleTextChange}
            ></textarea>

            {payload.imageContent && (
              <div className="w-full relative max-h-[300px] border rounded">
                <button
                  className="absolute z-10 w-8 h-8 p-1 text-sm bg-white border rounded-full right-3 top-3"
                  onClick={removeImage}
                >
                  <svgExports.CloseIcon />
                </button>
                <div className=" max-h-[300px] overflow-hidden rounded">
                  <img
                    src={payload.imageContent}
                    className="object-cover w-full h-full brightness-75"
                    alt=""
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between p-4 mt-4 border rounded">
              <p className="text-sm">Add to your post</p>
              <label
                htmlFor="add-image-community"
                className="p-1 text-green-500 rounded-full hover:bg-gray-200 w-7 h-7"
              >
                <svgExports.ImageIcon />
              </label>
              <input
                type="file"
                hidden
                id="add-image-community"
                onChange={handleImageProcessing}
              />
            </div>

            <button
              disabled={!postEligibility()}
              onClick={handleCreatePostRequest}
              className={`w-full py-2 mt-4 text-sm rounded ${postEligibility() ? "bg-green-500 text-white" : "bg-gray-100"}`} // prettier-ignore
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RecentActivity = (props) => {
  const { profile } = useContext(authenticatedContext);
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    setActivities([]); // Clear messages on route change
    const myActivityRef = ref(
      community_db,
      `community/activity_log/user_${props.id}`
    );

    // Fetch existing messages with get (initial load)
    get(query(myActivityRef))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const activities_ = [];
          snapshot.forEach((childSnapshot) => {
            activities_.push(childSnapshot.val());
          });
          setActivities(activities_);
        }
      })
      .catch((error) => console.log(error));

    // Listen for new messages with onChildAdded
    const unsubscribe = onChildAdded(myActivityRef, (snapshot) => {
      const newActivity = snapshot.val();
      setActivities((prevPosts) => [...prevPosts, newActivity]);
    });

    return () => {
      unsubscribe(); // Cleanup subscription on unmount
    };
  }, [profile.id]);

  return props.activity > 0 ? (
    <div className="flex flex-col mt-2">
      {activities &&
        activities.map((datum, index) => {
          return (
            <div key={index} className="flex gap-">
              <p className="hover:underline hover:text-blue-500">
                <span className="text-xs font-medium ">{datum.message}. </span>
                <span className="text-xs opacity-70">
                  {formatTimeByTimeUnits(datum.timestamp)}
                </span>
              </p>
            </div>
          );
        })}
    </div>
  ) : (
    <div className="p-4 mt-2 border rounded">
      <p className="text-xs font-medium text-gray-900">
        When you take actions across GitHub, we’ll provide links to that
        activity here.
      </p>
    </div>
  );
};

const CommentFormat = (props) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const url_ext = `profile/get_id/${
      props && props.data && props.data.sender
    }`;

    getFetch(url_ext)
      .then((data) => {
        setAuthor(data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex gap-2">
      <img
        className="h-[40px] w-[40px] rounded-full aspect-square object-cover object-center"
        src={author && author.image ? author.image : img}
        alt=""
      />
      <div className="p-3 bg-gray-100 rounded-xl">
        <p className="text-sm font-semibold">
          {author && author.name ? author.name : "Loading ..."}
        </p>
        <p>
          {props && props.data.comment ? props.data.comment : "Loading ..."}
        </p>
      </div>
    </div>
  );
};

export const CommentSection = (props) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    setComments([]); // Clear messages on route change

    const myPostRef = ref(
      community_db,
      `community/posts/${props.uid}/comments`
    );

    // Fetch existing messages with get (initial load)
    get(myPostRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const fetched_comments = [];
          snapshot.forEach((childSnapshot) => {
            fetched_comments.push(childSnapshot.val());
          });
          setComments(fetched_comments);
        }
      })
      .catch((error) => console.log(error));

    // Listen for new messages with onChildAdded
    const unsubscribe = onChildAdded(myPostRef, (snapshot) => {
      const newComments = snapshot.val();
      setComments((prevPosts) => [...prevPosts, newComments]);
    });

    return () => {
      unsubscribe(); // Cleanup subscription on unmount
    };
  }, [props.uid]);

  return (
    <div className="flex flex-col gap-2">
      {comments &&
        comments.map((comment, index) => {
          return <CommentFormat key={index} data={comment} />;
        })}
    </div>
  );
};
