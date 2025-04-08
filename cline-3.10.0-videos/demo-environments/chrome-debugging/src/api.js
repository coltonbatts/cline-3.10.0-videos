import axios from 'axios';

// Intentional API issue: incorrect base URL (missing http://)
const API_BASE_URL = 'localhost:3001';

// Intentional API issue: incorrect headers
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Missing Authorization header
    // Incorrect header name (should be 'Accept')
    'Accept-Type': 'application/json',
  },
});

// Intentional API issue: incorrect error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Missing proper error handling
    console.log('API Error:', error);
    // Should return Promise.reject(error) but doesn't
  }
);

// Intentional API issue: malformed request
export const fetchDashboardData = async () => {
  try {
    // Missing leading slash in URL
    const response = await api.get('api/dashboard');
    
    // Intentional data processing error
    const processedData = response.data.map(item => {
      // Accessing non-existent property
      return {
        id: item.id,
        name: item.name,
        value: item.stats.value,
        trend: item.trend_direction
      };
    });
    
    return processedData;
  } catch (error) {
    console.error('Failed to fetch dashboard data');
    // Returning empty array instead of proper error handling
    return [];
  }
};

// Intentional API issue: incorrect HTTP method
export const saveUserSettings = async (settings) => {
  try {
    // Should be POST or PUT, not GET
    const response = await api.get('/api/settings', settings);
    return response.data;
  } catch (error) {
    console.error('Failed to save user settings');
    return null;
  }
};

// Intentional API issue: race condition with multiple calls
export const fetchUserProfile = async (userId) => {
  // Making multiple calls without cancellation token
  const profileResponse = api.get(`/api/users/${userId}`);
  const settingsResponse = api.get(`/api/users/${userId}/settings`);
  const activityResponse = api.get(`/api/users/${userId}/activity`);
  
  try {
    // Not using Promise.all correctly
    const profile = await profileResponse;
    const settings = await settingsResponse;
    const activity = await activityResponse;
    
    return {
      ...profile.data,
      settings: settings.data,
      recentActivity: activity.data
    };
  } catch (error) {
    console.error('Failed to fetch user profile');
    return null;
  }
};

// Intentional API issue: CORS problem simulation
export const fetchExternalData = async () => {
  try {
    // Direct call to external API without proxy
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch external data');
    return null;
  }
};

// Intentional API issue: incorrect data format
export const updateDashboardItem = async (itemId, data) => {
  try {
    // Sending data in incorrect format
    const response = await api.put(`/api/dashboard/${itemId}`, JSON.stringify(data));
    return response.data;
  } catch (error) {
    console.error(`Failed to update dashboard item ${itemId}`);
    return null;
  }
};

export default api;
