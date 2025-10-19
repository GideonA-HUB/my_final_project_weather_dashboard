import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const getWeatherIcon = (condition) => {
    const iconMap = {
      'clear sky': '☀️',
      'few clouds': '🌤️',
      'scattered clouds': '⛅',
      'broken clouds': '☁️',
      'shower rain': '🌦️',
      'rain': '🌧️',
      'thunderstorm': '⛈️',
      'snow': '❄️',
      'mist': '🌫️',
    };
    return iconMap[condition.toLowerCase()] || '🌤️';
  };

  const formatTemperature = (temp) => {
    return Math.round(temp);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{weather.city}</h2>
        <div className="text-6xl mb-4">{getWeatherIcon(weather.condition)}</div>
        <div className="text-5xl font-light text-white mb-2">
          {formatTemperature(weather.temperature)}°C
        </div>
        <p className="text-white/80 text-lg mb-6 capitalize">{weather.condition}</p>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-white/70 text-sm mb-1">Feels Like</div>
            <div className="text-white font-semibold">{formatTemperature(weather.feelsLike)}°C</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-white/70 text-sm mb-1">Humidity</div>
            <div className="text-white font-semibold">{weather.humidity}%</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-white/70 text-sm mb-1">Wind Speed</div>
            <div className="text-white font-semibold">{weather.windSpeed} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
