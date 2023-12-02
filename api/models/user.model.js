import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bdiScores: {
      type: Array,
      required: true,
    },
    bdiScoresDates: {
      type: Array,
      required: true,
    },
    scoreCounter: {
      type: Number,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
    },
    feedback: {
      type: String,
      required: true,
      unique: false,
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema);
export const Comment = mongoose.model('Comment', commentSchema);
export default User;

