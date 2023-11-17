import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
  submitFeedback,
  submitScore,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.post('/feedback', submitFeedback);
router.post('/score', submitScore);

export default router;
