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
    profilePicture: {
      type: String,
      default:
        'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
  },
  { timestamps: true }
);

const feedbackSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    feedback: {
      type: String,
      required: true,
      unique: true,
    }
  }
)

const scoreSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    score: {
      type: Number,
      required: true,
      unique: true,
    }
  }
)

const User = mongoose.model('User', userSchema);
export const Feedback = mongoose.model('Feedback', feedbackSchema);
export const Score = mongoose.model('Score', scoreSchema);
export default User;

