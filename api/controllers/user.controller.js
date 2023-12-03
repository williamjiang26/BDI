import User from '../models/user.model.js';
import { Comment } from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
  res.json({
    message: 'API is working!',
  });
};

// update user
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can update only your account!'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


// delete user
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can delete only your account!'));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
  } catch (error) {
    next(error);
  }
}

// update feedback
export const submitFeedback = async (req, res, next) => {
  const newFeedback = new Comment(req.body);
  try {
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback created successfully' });
  } catch (error) {
    next(error);
  }
}

// update scores
export const submitScore = async (req, res, next) => {
    const { score, time, id, sCounter } = req.body;
    const updatedUser = await User.findByIdAndUpdate({ _id: id },
        {
            $push: {
                bdiScores: score,
                bdiScoresDates: time,
            },
            scoreCounter: sCounter + 1,
        },
        { new: true }
    );

    try {
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
}

//get scores 
export const getScore = async (req, res, next) => {
  const data = await User.findById(req.body)
  try {
    res.status(201).json({data: data});
  } catch (error) {
    next(error);
  }
}
