import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MentorCard from './MentorCard';

const RecentMentors = ({ mentors, onFollowToggle, loading }) => {
  if (loading) {
    return (
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Mentors</h2>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="min-w-80 bg-gray-200 rounded-xl h-48 animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Mentors</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="flex gap-6 overflow-x-auto pb-4">
        {mentors.map(mentor => (
          <div key={mentor.id} className="min-w-80">
            <MentorCard 
              mentor={mentor} 
              onFollowToggle={onFollowToggle}
              compact={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentMentors;