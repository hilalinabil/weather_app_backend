const axios = require("axios");

const getWeatherFromAPI = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  const url = `${baseUrl}?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  try {
    
    console.log("Requesting weather from:", url);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("OpenWeatherMap API error:", error.message);
    throw new Error("Failed to fetch weather data from API");
  }
};

module.exports = { getWeatherFromAPI };
