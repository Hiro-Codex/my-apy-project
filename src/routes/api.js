const express = require('express');
const router = express.Router();
const getWeatherData = require('../config/db');
const { addWeatherData } = require('../controllers/weatherController');

// @route   GET api/weather/:city
// @desc    Get weather data for a specific city and save it to the database
// @access  Public
router.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const weatherData = await getWeatherData(city);
    
    // Extraer datos relevantes
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    // Guardar datos en la base de datos
    await addWeatherData(city, temperature, description);

    res.json(weatherData);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;