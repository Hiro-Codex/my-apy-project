const express = require('express');
const axios = require('axios');
const config = require('config');

const router = express.Router();
const weatherAPI = config.get('weatherAPI');

// Ruta para obtener el clima
router.get('/weather/:location', async (req, res) => {
  const location = req.params.location;

  try {
    const response = await axios.get(`${weatherAPI.url}?key=${weatherAPI.key}&q=${location}`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;