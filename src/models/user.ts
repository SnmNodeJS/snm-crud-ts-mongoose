import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 32
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
      required: true,
      unique: true,
      maxlength: 32,
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 32
    }
  },
  { timestamps: true}
)

const User = mongoose.model("User", userSchema);

export default User; 