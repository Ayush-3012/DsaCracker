/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const { user, setPosts } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchPost = () => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addPost = (newPost) => {
    axios
      .post("http://localhost:5000/addPost", newPost)
      .then(() => {
        console.log("success");
        -fetchPost();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      _id: uuidv4(),
      imageUrl,
      caption,
      userName: user,
      likeCount: 0,
      comments: [],
    };
    addPost(newPost);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center py-4">
      <form
        onSubmit={handleSubmit}
        className="border rounded-md p-4 mb-4 border-black"
      >
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full mb-2 p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full mb-2 p-2 border rounded-md"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
