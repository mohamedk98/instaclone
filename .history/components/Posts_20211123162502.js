import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const DUMMY = [
  {
    id: "1",
    username: "2orsa",
    userImg: "https://via.placeholder.com/150",
    img: "https://via.placeholder.com/150",
    caption: "3goa",
  },
];
function Posts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data.username}
          userImg={post.data.profileImg}
          img={post.data.image}
          caption={post.data.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
