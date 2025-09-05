import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  taskCount: {
    type: Number,
    default: 0,
    min: 0
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
    default: 0
  },
  reviewCount: {
    type: Number,
    default: 0,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Web Development', '3D Design', 'UI/UX Design', 'Android Development', 'iOS Development', '2D Design']
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  joinedDate: {
    type: Date,
    default: Date.now
  },
  skills: [{
    type: String,
    trim: true
  }],
  experience: {
    type: Number,
    min: 0
  },
  hourlyRate: {
    type: Number,
    min: 0
  }
}, {
  timestamps: true
});

// Virtual for follower count
mentorSchema.virtual('followerCount').get(function() {
  return this.followers.length;
});

// Virtual for checking if followed by specific user
mentorSchema.methods.isFollowedBy = function(userId) {
  return this.followers.includes(userId);
};

export default mongoose.model('Mentor', mentorSchema);