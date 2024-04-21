import React, { useContext, useEffect, useState } from "react";
import { set, get, limitToLast, onChildAdded, orderByChild, push, query, ref, remove, update } from "firebase/database"; // prettier-ignore
import authenticatedContext from "../context/authentication/authenticatedContext";
import { community_db } from "../utils/firebase.realtime";
import svgExports from "../assets/svg/exports";
import { useNavigate, useParams } from "react-router-dom";
import { getFetch } from "../apis/get.api";
import { formatTimeByTimeUnits } from "../components/__community/__functions";
import { CommentSection } from "../components/__community/__components";
import img from "../assets/images/default_image.png";

const ViewCommunityPost = (props) => {
  const { profile } = useContext(authenticatedContext);
  const [isEngaged, setIsEngaged] = useState(null);
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [postContent, setPostContent] = useState(null);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const db_ref = ref(community_db, `community/posts/${id}`);

    get(db_ref)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPostContent({ ...snapshot.val(), key: snapshot.key });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (postContent) {
      const author = postContent.author.split("_")[1];
      const url_ext = `profile/get_id/${author}`;

      getFetch(url_ext)
        .then((data) => {
          setAuthor(data.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [postContent]);

  useEffect(() => {
    if (postContent && postContent.engage) {
      const engage = postContent.engage;
      const user = `user_${profile.id}`;

      for (const item in engage) {
        if (user == item) {
          setIsEngaged(engage[item]);
        }
      }
    } else {
    }
  }, [postContent]);

  const count = () => {
    if (postContent && postContent.engage) {
      const data = postContent.engage;
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

  const createComment = () => {
    if (comment && profile.id) {
      const db_ref = ref(
        community_db,
        `community/posts/${postContent.key}/comments`
      );
      const load = {
        sender: profile && profile.id,
        timestamp: new Date().valueOf(),
        comment: comment,
      };

      push(db_ref, load)
        .then((snapshot) => {
          console.log("success");
          setComment((prev) => "");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const sendComment = (e) => {
    if (e.key == "Enter") {
      createComment();
    }
  };

  const goBack = () => {
    window.history.back();
  };

  const createEngagement = (type) => {
    const db_ref = ref(community_db, `community/posts/${postContent.key}/engage/user_${profile.id}`); // prettier-ignore
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
        if (postContent.key && profile.id) {
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

  return (
    <div className="grid w-full grid-cols-3 h-[calc(100vh-59px)] overflow-hidden">
      {postContent && postContent.imageContent && (
        <div className="relative col-span-2 bg-black">
          <button
            className="absolute z-10 w-8 h-8 p-1 bg-white rounded-full top-4 left-4"
            onClick={goBack}
          >
            <svgExports.CloseIcon />
          </button>

          <img
            src={
              postContent &&
              postContent.imageContent &&
              postContent.imageContent
            }
            className="h-[calc(100vh-59px)] m-auto"
            alt=""
          />
        </div>
      )}

      <div
        className={`flex flex-col px-8 py-2 pt-4 ${
          postContent && postContent.imageContent
            ? "col-span-1 border-l"
            : "col-span-3 mx-auto max-w-[700px] w-[700px]"
        }`}
      >
        <div className=" overflow-y-scroll no-scrollbar h-[calc(100vh-239px)]">
          {postContent && !postContent.imageContent && (
            <button
              onClick={goBack}
              className="flex items-center gap-2 px-4 py-2 mb-8 text-xs text-gray-700 bg-gray-200 rounded-full hover:text-white hover:bg-secondary-900"
            >
              <div className="w-4 h-4">
                <svgExports.BackArrow />
              </div>
              <span>Back</span>
            </button>
          )}

          <div className="flex gap-2">
            <img
              className="h-[40px] w-[40px] rounded-full aspect-square object-cover object-center"
              src={author && author.image ? author.image : img}
              alt=""
            />

            <div>
              {author && (
                <p className="text-medium">
                  {author && author.name == profile.name
                    ? "You"
                    : author.name
                    ? author.name
                    : "Loading ..."}
                </p>
              )}
              <p className="text-xs">
                {postContent && postContent.timestamp
                  ? formatTimeByTimeUnits(postContent.timestamp)
                  : "loading ..."}
              </p>
            </div>
          </div>

          <div>
            <p className="mt-4 text-sm">
              {postContent && postContent.textContent
                ? postContent.textContent
                : "loading ..."}
            </p>
          </div>

          <div className="mt-2 text-xs text-gray-500 ">
            <p>{count()}</p>
          </div>

          <div className="flex justify-around py-2 mt-6 border-t border-b">
            <button
              className={`text-sm  w-full py-2 ${
                isEngaged && isEngaged.type == "like"
                  ? "font-medium bg-gray-100"
                  : ""
              }`}
              onClick={() => createEngagement("like")}
            >
              Like
            </button>
            <button className={`text-sm  w-full py-2`}>Comment</button>
            <button
              className={`text-sm  w-full py-2 ${
                isEngaged && isEngaged.type == "dislike"
                  ? "font-medium bg-gray-100"
                  : ""
              }`}
              onClick={() => createEngagement("dislike")}
            >
              Dislike
            </button>
          </div>

          <div className="my-4">
            <CommentSection uid={postContent && postContent.key} />
          </div>
        </div>

        <div className="flex gap-2 py-4 ">
          <img
            className="h-[40px] w-[40px] rounded-full aspect-square object-cover object-center"
            src={author && author.image ? author.image : img}
            alt=""
          />
          <div className="relative w-full">
            <textarea
              className="w-full p-2 text-sm rounded-lg outline-none resize-none bg-gray-50"
              placeholder="Write a comment"
              rows="5"
              value={comment}
              onChange={(e) => setComment((prev) => e.target.value)}
              onKeyUp={sendComment}
            ></textarea>
            {comment && (
              <button
                className="absolute w-4 h-4 right-4 bottom-6"
                onClick={createComment}
              >
                <svgExports.SendIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCommunityPost;
