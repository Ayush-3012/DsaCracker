/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Comment from "../actions/Comment";
import { FaComment, FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoPaperPlaneOutline, IoSaveOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Post = ({ post }) => {
  const [newComment, setNewComment] = useState("");
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [comments, setComments] = useState(post.comments);
  const [liked, setLiked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const { user } = useContext(AppContext);

  const handleLikeCount = () => {
    setLiked(!liked);
    liked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };

  const handleAddComment = () => {
    const comment = {
      username: user,
      text: newComment,
    };

    const updateComments = [...post.comments, comment];
    setComments(updateComments);
    axios
      .patch(`http://localhost:5000/${post._id}`, { updateComments })
      .then(() => console.log("comments updated"))
      .catch((err) => console.log(err));
    setNewComment("");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          text: "Check out this post",
        })
        .then(() => console.log("Shared successfully"))
        .catch((err) => console.error("Error sharing:", err));
    } else {
      console.log("Web Share API not supported");
    }
  };

  axios
    .patch(`http://localhost:5000/${post._id}`, { likeCount })
    .then()
    .catch((err) => console.log(err));

  return (
    <div className="border-2 border-black p-2 my-2 rounded-md flex flex-col gap-1">
      <div className="user-info  p-2">
        <p>{post.userName}</p>
      </div>
      <div className="border-2 rounded-md items-center flex justify-center">
        <img src={post.imageUrl} alt="Post" className="" />
      </div>
      <div className="">
        <div className="flex gap-3">
          <button onClick={() => handleLikeCount()} className="text-2xl">
            {!liked ? (
              <FaRegHeart className="hover:text-red-500" />
            ) : (
              <FaHeart className="text-red-500" />
            )}
          </button>
          <button
            onClick={() => setShowComment(!showComment)}
            className="text-2xl"
          >
            {!showComment ? (
              <FaRegComment className=" hover:text-blue-500" />
            ) : (
              <FaComment className="text-blue-500" />
            )}
          </button>
          <button
            onClick={() => {
              handleShare();
            }}
          >
            <IoPaperPlaneOutline className="text-2xl hover:text-green-500" />
          </button>
          <Link
            to={post.imageUrl}
            target="_blank"
            download
            className="text-2xl"
          >
            <IoSaveOutline className="hover:text-yellow-500" />
          </Link>
        </div>
        <p>{likeCount} Likes</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="">{post.caption}</p>
        {showComment && (
          <div className="">
            <div>
              {comments?.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 rounded-md"
              />
              <button
                onClick={handleAddComment}
                className="bg-blue-500 px-2 text-white rounded-md"
              >
                Comment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
