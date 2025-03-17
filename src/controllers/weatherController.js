const Weather = require('../models/Weather');

// Función para insertar datos del clima en la base de datos
const addWeatherData = async (city, temperature, description) => {
  try {
    const newWeather = new Weather({
      city,
      temperature,
      description,
    });

    await newWeather.save();
    console.log('Weather data saved to database');
  } catch (err) {
    console.error('Error saving weather data:', err.message);
  }
};

module.exports = {
  addWeatherData,
};