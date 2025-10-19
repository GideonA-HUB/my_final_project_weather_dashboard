// OpenWeatherMap API Configuration
// Get your free API key at: https://openweathermap.org/api

export const API_KEY = process.env.VITE_OPENWEATHER_API_KEY || 'YOUR_API_KEY_HERE';
export const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Instructions for setting up API key:
// 1. Go to https://openweathermap.org/api
// 2. Sign up for a free account
// 3. Get your API key
// 4. Replace 'YOUR_API_KEY_HERE' with your actual API key
// 5. Or create a .env file in the root directory and add: VITE_OPENWEATHER_API_KEY=your_actual_api_key
