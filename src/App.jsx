import React, { useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    try {
      // Simple test without external components
      console.log('Searching for:', city);
      setWeather({ city, temp: '25°C', condition: 'Sunny' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', color: 'white' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            🌤️ Weather Forecast
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
            Get current weather and 3-day forecast for any city
          </p>
        </header>

        <div style={{ marginBottom: '2rem' }}>
          <form onSubmit={(e) => {
            e.preventDefault();
            const city = e.target.city.value.trim();
            if (city) handleSearch(city);
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <input
                type="text"
                name="city"
                placeholder="Enter city name..."
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  fontSize: '1rem'
                }}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontSize: '1rem'
                }}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ 
              display: 'inline-block',
              width: '40px',
              height: '40px',
              border: '3px solid rgba(255,255,255,0.3)',
              borderTop: '3px solid white',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{ marginTop: '1rem' }}>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '0.5rem',
            padding: '1rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          </div>
        )}

        {weather && !loading && (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.2)',
            marginBottom: '1rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{weather.city}</h2>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☀️</div>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{weather.temp}</div>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>{weather.condition}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.25rem' }}>Feels Like</div>
                  <div style={{ fontWeight: 'bold' }}>23°C</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.25rem' }}>Humidity</div>
                  <div style={{ fontWeight: 'bold' }}>65%</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.25rem' }}>Wind Speed</div>
                  <div style={{ fontWeight: 'bold' }}>12 km/h</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!weather && !loading && !error && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌍</div>
            <p style={{ fontSize: '1.125rem', opacity: 0.8 }}>
              Enter a city name above to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;