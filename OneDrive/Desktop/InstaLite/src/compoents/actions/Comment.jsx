/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {
  const { username, text } = comment;

  return (
    <div className="">
      <strong>{username}:</strong> {text}
    </div>
  );
};

export default Comment;
