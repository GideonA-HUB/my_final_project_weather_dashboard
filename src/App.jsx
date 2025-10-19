import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForecastList';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import DemoWeather from './components/DemoWeather';
import { API_KEY, API_BASE_URL } from './config/api';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch current weather
  const fetchCurrentWeather = async (city) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        }
        throw new Error('Failed to fetch weather data. Please try again.');
      }
      
      const data = await response.json();
      
      return {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        condition: data.weather[0].description,
        icon: data.weather[0].icon,
      };
    } catch (error) {
      throw error;
    }
  };

  // Function to fetch 3-day forecast
  const fetchForecast = async (city) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch forecast data.');
      }
      
      const data = await response.json();
      
      // Group forecast by day and get daily max/min temps
      const dailyForecasts = {};
      
      data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toDateString();
        if (!dailyForecasts[date]) {
          dailyForecasts[date] = {
            date: item.dt_txt.split(' ')[0],
            maxTemp: item.main.temp_max,
            minTemp: item.main.temp_min,
            condition: item.weather[0].description,
          };
        } else {
          dailyForecasts[date].maxTemp = Math.max(dailyForecasts[date].maxTemp, item.main.temp_max);
          dailyForecasts[date].minTemp = Math.min(dailyForecasts[date].minTemp, item.main.temp_min);
        }
      });
      
      // Return next 3 days
      return Object.values(dailyForecasts).slice(1, 4);
    } catch (error) {
      throw error;
    }
  };

  // Handle search functionality
  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);
    setForecast([]);

    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchCurrentWeather(city),
        fetchForecast(city)
      ]);
      
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh weather data every 5 minutes
  useEffect(() => {
    if (weather) {
      const interval = setInterval(() => {
        handleSearch(weather.city);
      }, 300000); // 5 minutes

      return () => clearInterval(interval);
    }
  }, [weather]);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🌤️ Weather Forecast
          </h1>
          <p className="text-white/80 text-lg">
            Get current weather and 3-day forecast for any city
          </p>
        </header>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {weather && !loading && (
          <>
            <WeatherCard weather={weather} />
            <ForecastList forecast={forecast} />
          </>
        )}

        {!weather && !loading && !error && (
          <div>
            {API_KEY === 'YOUR_API_KEY_HERE' ? (
              <DemoWeather />
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🌍</div>
                <p className="text-white/80 text-lg">
                  Enter a city name above to get started
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;