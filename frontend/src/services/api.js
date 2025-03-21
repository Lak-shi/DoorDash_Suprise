// src/services/api.js

const API_BASE_URL = 'http://localhost:8000/api';

/**
 * Get meal recommendations based on user preferences
 * @param {Object} preferences - User preferences object
 * @param {string} preferences.vibe - User's mood/vibe
 * @param {string} preferences.craving - User's specific craving
 * @param {Array} preferences.restrictions - User's dietary restrictions
 * @param {boolean} shuffle - Whether to shuffle recommendations
 * @returns {Promise} Promise resolving to recommendations object
 */
export const getRecommendations = async (preferences, shuffle = false) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recommendations?shuffle=${shuffle}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferences),
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};

/**
 * Health check for API
 * @returns {Promise} Promise resolving to health status
 */
export const checkApiHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Health Check Failed:', error);
    return { status: 'offline' };
  }
};