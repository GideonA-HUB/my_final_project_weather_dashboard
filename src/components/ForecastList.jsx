import React from 'react';

const ForecastList = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatTemperature = (temp) => {
    return Math.round(temp);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">3-Day Forecast</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-center">
              <div className="text-white/70 text-sm mb-2">{formatDate(day.date)}</div>
              <div className="text-3xl mb-2">{getWeatherIcon(day.condition)}</div>
              <div className="text-white font-semibold text-lg mb-1">
                {formatTemperature(day.maxTemp)}°C / {formatTemperature(day.minTemp)}°C
              </div>
              <div className="text-white/70 text-sm capitalize">{day.condition}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
