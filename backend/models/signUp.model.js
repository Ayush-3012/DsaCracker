import mongoose from "mongoose";

const UserSchema = {
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};

const User = new mongoose.model("User", UserSchema);

export default User;
