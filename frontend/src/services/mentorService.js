// API base URL
const API_BASE_URL = 'http://localhost:5000/api';

export const mentorService = {
  // Get all mentors
  async getAllMentors() {
    try {
      const response = await fetch(`${API_BASE_URL}/mentors`);
      if (!response.ok) {
        throw new Error('Failed to fetch mentors');
      }
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error('Error fetching mentors:', error);
      throw error;
    }
  },

  // Toggle follow status
  async toggleFollow(mentorId) {
    try {
      const response = await fetch(`${API_BASE_URL}/mentors/${mentorId}/follow`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to toggle follow status');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error toggling follow:', error);
      throw error;
    }
  },

  // Search mentors
  async searchMentors(query, category, sortBy) {
    try {
      const params = new URLSearchParams();
      if (query) params.append('query', query);
      if (category) params.append('category', category);
      if (sortBy) params.append('sortBy', sortBy);
      
      const response = await fetch(`${API_BASE_URL}/mentors/search?${params}`);
      if (!response.ok) {
        throw new Error('Failed to search mentors');
      }
      
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error('Error searching mentors:', error);
      throw error;
    }
  }
};