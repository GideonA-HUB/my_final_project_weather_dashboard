import React from 'react';
import WeatherCard from './WeatherCard';
import ForecastList from './ForecastList';

const DemoWeather = () => {
  const demoWeather = {
    city: 'London',
    country: 'GB',
    temperature: 15,
    feelsLike: 13,
    humidity: 78,
    windSpeed: 12,
    condition: 'broken clouds',
    icon: '04d',
  };

  const demoForecast = [
    {
      date: '2024-01-20',
      maxTemp: 16,
      minTemp: 8,
      condition: 'light rain',
    },
    {
      date: '2024-01-21',
      maxTemp: 18,
      minTemp: 10,
      condition: 'clear sky',
    },
    {
      date: '2024-01-22',
      maxTemp: 14,
      minTemp: 6,
      condition: 'scattered clouds',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/30 mb-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl">⚠️</div>
          <div className="text-yellow-100">
            <strong>Demo Mode:</strong> This is sample data. To get real weather data, please set up your OpenWeatherMap API key in <code>src/config/api.js</code>
          </div>
        </div>
      </div>
      
      <WeatherCard weather={demoWeather} />
      <ForecastList forecast={demoForecast} />
    </div>
  );
};

export default DemoWeather;
