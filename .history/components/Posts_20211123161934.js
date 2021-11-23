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

  const [posts,setPosts] = useState([])
  useEffect(()=>{
 onSnapshot(query(collection(db,'posts')),orderBy('timestamp','desc'))
  },[])
  return (
    <div>
      {DUMMY.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
