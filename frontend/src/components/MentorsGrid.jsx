import React from 'react';
import MentorCard from './MentorCard';

const MentorsGrid = ({ mentors, onFollowToggle, loading }) => {
  if (loading) {
    return (
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-xl h-64 animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map(mentor => (
          <MentorCard 
            key={mentor.id}
            mentor={mentor} 
            onFollowToggle={onFollowToggle}
          />
        ))}
      </div>
      
      {mentors.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No mentors found matching your criteria.</p>
        </div>
      )}
    </section>
  );
};

export default MentorsGrid;