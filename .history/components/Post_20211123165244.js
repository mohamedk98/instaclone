import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";

function Post({ id, username, userImg, img, caption }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    return onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img className="object-cover w-full" src={img} alt="" />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-3">
          <HeartIcon className="commentBtn" />
          <ChatIcon className="commentBtn" />
          <PaperAirplaneIcon className="commentBtn" />
        </div>
        <BookmarkIcon className="commentBtn" />
      </div>

      <p className="p-5 truncate ">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div>
          {comments.map(comment =>(
            <div key={comment.id}>
              <img src={comment.userImage}/>
            </div>
          ))}
        </div>
      )}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add Comment..."
        />
        <button
          className="font-semibold text-blue-400"
          disabled={!comment.trim()}
          onClick={sendComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
