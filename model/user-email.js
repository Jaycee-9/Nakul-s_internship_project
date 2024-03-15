import mongoose from "mongoose";

const userEmail = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const UserEmail = mongoose.model("Email", userEmail);
export default UserEmail;
