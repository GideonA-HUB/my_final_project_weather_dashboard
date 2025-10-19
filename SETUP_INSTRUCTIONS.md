# Weather Forecast App Setup Instructions

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Get OpenWeatherMap API Key**
   - Go to [OpenWeatherMap API](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key

3. **Configure API Key**
   
   **Option 1: Environment Variable (Recommended)**
   - Create a `.env` file in the root directory
   - Add: `VITE_OPENWEATHER_API_KEY=your_actual_api_key_here`
   
   **Option 2: Direct Configuration**
   - Open `src/config/api.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key

4. **Install TailwindCSS Dependencies**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

## Features

- ✅ Search for weather by city name
- ✅ Current weather display with temperature, condition, and icon
- ✅ Additional details: humidity, wind speed, "feels like" temperature
- ✅ 3-day forecast
- ✅ Mobile-friendly responsive design
- ✅ Loading states and error handling
- ✅ Auto-refresh every 5 minutes

## Deployment

For deployment to Vercel:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variable: `VITE_OPENWEATHER_API_KEY`
   - Deploy automatically

## Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx      # City search input
│   ├── WeatherCard.jsx    # Current weather display
│   ├── ForecastList.jsx   # 3-day forecast
│   ├── ErrorMessage.jsx   # Error handling
│   └── LoadingSpinner.jsx # Loading state
├── config/
│   └── api.js            # API configuration
├── App.jsx               # Main application
├── main.jsx             # Entry point
└── index.css            # TailwindCSS styles
```
