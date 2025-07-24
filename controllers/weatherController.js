const { getWeatherFromAPI } = require("../services/weatherAPI");

const getWeather = async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const weatherData = await getWeatherFromAPI(city);
    return res.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather:", error.message);
    return res.status(500).json({ error: "Failed to fetch weather data" });
  }
};

module.exports = { getWeather };
