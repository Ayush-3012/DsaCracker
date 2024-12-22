// PostList.js

import { useContext, useEffect } from "react";
import Post from "./Post";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const PostList = () => {
  const { posts, setPosts } = useContext(AppContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [setPosts]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="px-4 flex flex-col justify-center">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
