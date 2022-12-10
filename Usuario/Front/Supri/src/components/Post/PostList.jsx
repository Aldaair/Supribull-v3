import React, { useState, useEffect } from "react";

import {getPosts} from "../../Services/PostService";
import PostItem from "./PostItem.jsx";

function PostList() {

  const [posts, setPosts] = useState([]);

  const listPosts = async () => {
    try {
      const res = await getPosts();
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.idPublicacion} post={post} listPosts={listPosts}/>
      ))}
    </div>
  );
}

export default PostList;
