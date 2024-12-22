import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const usersFile = "./users.json";
const postFile = "./posts.json";

app.get("/", (req, res) => {
  const posts = JSON.parse(fs.readFileSync(postFile, "utf8"));
  res.status(201).json(posts);
});

app.post("/addPost", (req, res) => {
  const { _id, imageUrl, caption, userName, likeCount, comments } = req.body;
  const posts = JSON.parse(fs.readFileSync(postFile, "utf8"));
  posts.push({ _id, userName, imageUrl, likeCount, caption, comments });
  fs.writeFileSync(postFile, JSON.stringify(posts, null, 2));
  res.status(201).json({ message: "Post added successfully" });
});

app.patch("/:postId", (req, res) => {
  const postId = req.params.postId;
  const { likeCount, updateComments } = req.body;

  const posts = JSON.parse(fs.readFileSync(postFile, "utf8"));
  const postToUpdate = posts.find((post) => post._id === postId);
  if (postToUpdate) {
    likeCount ? postToUpdate.likeCount = likeCount : postToUpdate.likeCount;
    updateComments ? postToUpdate.comments = updateComments : postToUpdate.comments;
    fs.writeFileSync(postFile, JSON.stringify(posts, null, 2), "utf8");
    res.status(200).json({
      message: "LikeCount or comments updated successfully",
    });
  } else {
    res.status(401).json({ message: "Post not found" });
  }
});

app.get("/users", (req, res) => {
  const { username } = req.query;
  const users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
  const matchedUsers = users.filter((user) => user.username === username);
  if (matchedUsers) {
    res.status(201).json(matchedUsers);
  } else {
    res.status(400).json({ message: "No such user available" });
  }
});

app.post("/users", (req, res) => {
  const { fullname, username, password } = req.body;

  const users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    res.status(400).json({ message: "Username already exists" });
  } else {
    users.push({ fullname, username, password });
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    res.status(201).json({ message: "User added successfully" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
