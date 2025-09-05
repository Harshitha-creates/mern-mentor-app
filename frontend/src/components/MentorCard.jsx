import React from 'react';
import { Star, Clock } from 'lucide-react';

const MentorCard = ({ mentor, onFollowToggle, compact = false }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="mentor-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={mentor.avatar} 
            alt={mentor.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
            <p className="text-sm text-gray-500">{mentor.title}</p>
          </div>
        </div>
        
        <button
          onClick={() => onFollowToggle(mentor.id)}
          className={`follow-btn ${mentor.isFollowed ? 'followed' : 'follow'}`}
        >
          {mentor.isFollowed ? 'Followed' : '+ Follow'}
        </button>
      </div>
      
      {!compact && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {mentor.description}
        </p>
      )}
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <Clock size={14} className="text-gray-400" />
          <span className="text-gray-600">{mentor.taskCount} Task</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="rating-stars">
            {renderStars(mentor.rating)}
          </div>
          <span className="font-medium text-gray-900">{mentor.rating}</span>
          <span className="text-gray-500">({mentor.reviewCount} Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;