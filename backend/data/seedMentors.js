import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Mentor from '../models/Mentor.js';

dotenv.config();

const mentors = [
  {
    name: 'Jessica Jane',
    title: 'Web Developer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web Development and have experience in React, Node.js, and modern web technologies.",
    taskCount: 40,
    rating: 4.7,
    reviewCount: 750,
    category: 'Web Development',
    skills: ['React', 'Node.js', 'JavaScript', 'MongoDB'],
    experience: 5,
    hourlyRate: 75
  },
  {
    name: 'Abraham Lincoln',
    title: '3D Design',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Abraham Lincoln. I am a professional 3D Designer with expertise in Blender, Cinema 4D, and architectural visualization.",
    taskCount: 32,
    rating: 4.9,
    reviewCount: 510,
    category: '3D Design',
    skills: ['Blender', 'Cinema 4D', '3D Modeling', 'Animation'],
    experience: 8,
    hourlyRate: 90
  },
  {
    name: 'Curious George',
    title: 'UI/UX Design',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Curious George. I am a UI/UX Designer at Google with experience in creating intuitive user experiences and modern design systems.",
    taskCount: 40,
    rating: 4.7,
    reviewCount: 750,
    category: 'UI/UX Design',
    skills: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
    experience: 6,
    hourlyRate: 80
  },
  {
    name: 'Emma Thompson',
    title: 'iOS Developer',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Emma Thompson. I am a senior iOS Developer at Apple with 8+ years of experience in Swift and SwiftUI development.",
    taskCount: 28,
    rating: 4.8,
    reviewCount: 420,
    category: 'iOS Development',
    skills: ['Swift', 'SwiftUI', 'iOS', 'Xcode'],
    experience: 8,
    hourlyRate: 95
  },
  {
    name: 'Alex Stanton',
    title: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI/UX Design with expertise in Figma, Sketch, and user research methodologies.",
    taskCount: 60,
    rating: 4.9,
    reviewCount: 970,
    category: 'UI/UX Design',
    skills: ['Figma', 'Adobe XD', 'User Testing', 'Design Systems'],
    experience: 7,
    hourlyRate: 85
  },
  {
    name: 'Antoine Griezmann',
    title: 'Android Developer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Antoine Griezmann. I'm an Android Developer at Google Company with extensive experience in Kotlin, Java, and modern Android development.",
    taskCount: 50,
    rating: 4.8,
    reviewCount: 830,
    category: 'Android Development',
    skills: ['Kotlin', 'Java', 'Android Studio', 'Firebase'],
    experience: 6,
    hourlyRate: 88
  },
  {
    name: 'Anna White',
    title: '3D Design',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Anna White. I'm a professional 3D Designer at Blender Company with expertise in 3D modeling, animation, and architectural visualization.",
    taskCount: 60,
    rating: 4.8,
    reviewCount: 670,
    category: '3D Design',
    skills: ['Blender', 'Maya', '3D Animation', 'Rendering'],
    experience: 9,
    hourlyRate: 92
  },
  {
    name: 'Richard Kyle',
    title: '2D Design',
    avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop Company specializing in digital illustration, branding, and visual identity design.",
    taskCount: 60,
    rating: 4.7,
    reviewCount: 730,
    category: 'UI/UX Design',
    skills: ['Photoshop', 'Illustrator', 'Branding', 'Digital Art'],
    experience: 7,
    hourlyRate: 70
  },
  {
    name: 'Julia Phillips',
    title: 'iOS Developer',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    description: "Hi, I'm Julia Phillips. I'm a senior manager at Apple Company with deep expertise in iOS development, Swift programming, and mobile app architecture.",
    taskCount: 60,
    rating: 4.9,
    reviewCount: 910,
    category: 'iOS Development',
    skills: ['Swift', 'Objective-C', 'iOS Architecture', 'Team Leadership'],
    experience: 10,
    hourlyRate: 110
  }
];

const seedMentors = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing mentors
    await Mentor.deleteMany({});
    console.log('Cleared existing mentors');
    
    // Insert new mentors
    await Mentor.insertMany(mentors);
    console.log('Mentors seeded successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding mentors:', error);
    process.exit(1);
  }
};

seedMentors();