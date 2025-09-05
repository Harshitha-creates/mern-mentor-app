import express from 'express';
import {
  getAllMentors,
  searchMentors,
  toggleFollowMentor,
  getMentorById
} from '../controllers/mentorController.js';

const router = express.Router();

// GET /api/mentors - Get all mentors
router.get('/', getAllMentors);

// GET /api/mentors/search - Search mentors
router.get('/search', searchMentors);

// GET /api/mentors/:id - Get mentor by ID
router.get('/:id', getMentorById);

// PATCH /api/mentors/:id/follow - Toggle follow mentor
router.patch('/:id/follow', toggleFollowMentor);

export default router;