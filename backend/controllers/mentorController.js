import Mentor from '../models/Mentor.js';

// Get all mentors with recent mentors
export const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find({ isActive: true }).sort({ createdAt: -1 });
    const recentMentors = await Mentor.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(4);

    // Add isFollowed field (for now, randomly set for demo)
    const mentorsWithFollowStatus = mentors.map(mentor => ({
      ...mentor.toObject(),
      id: mentor._id,
      isFollowed: Math.random() > 0.7 // Random follow status for demo
    }));

    const recentMentorsWithFollowStatus = recentMentors.map(mentor => ({
      ...mentor.toObject(),
      id: mentor._id,
      isFollowed: Math.random() > 0.7 // Random follow status for demo
    }));

    res.json({
      mentors: mentorsWithFollowStatus,
      recentMentors: recentMentorsWithFollowStatus
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search mentors
export const searchMentors = async (req, res) => {
  try {
    const { query, category, sortBy } = req.query;
    
    let searchQuery = { isActive: true };
    
    // Add text search
    if (query) {
      searchQuery.$or = [
        { name: { $regex: query, $options: 'i' } },
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ];
    }
    
    // Add category filter
    if (category) {
      searchQuery.category = category;
    }
    
    let mentorsQuery = Mentor.find(searchQuery);
    
    // Add sorting
    switch (sortBy) {
      case 'Rating':
        mentorsQuery = mentorsQuery.sort({ rating: -1 });
        break;
      case 'Task Count':
        mentorsQuery = mentorsQuery.sort({ taskCount: -1 });
        break;
      case 'Newest':
        mentorsQuery = mentorsQuery.sort({ createdAt: -1 });
        break;
      default: // Popular
        mentorsQuery = mentorsQuery.sort({ reviewCount: -1 });
    }
    
    const mentors = await mentorsQuery;
    
    const mentorsWithFollowStatus = mentors.map(mentor => ({
      ...mentor.toObject(),
      id: mentor._id,
      isFollowed: Math.random() > 0.7 // Random follow status for demo
    }));
    
    res.json(mentorsWithFollowStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle follow mentor
export const toggleFollowMentor = async (req, res) => {
  try {
    const { id } = req.params;
    
    const mentor = await Mentor.findById(id);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    
    // For demo purposes, just toggle the follow status
    // In real app, you'd manage this through user's followedMentors array
    const isFollowed = Math.random() > 0.5;
    
    res.json({ isFollowed });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get mentor by ID
export const getMentorById = async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await Mentor.findById(id);
    
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    
    const mentorWithFollowStatus = {
      ...mentor.toObject(),
      id: mentor._id,
      isFollowed: Math.random() > 0.7 // Random follow status for demo
    };
    
    res.json(mentorWithFollowStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};