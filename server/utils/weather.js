const axios = require('axios');
const { query } = require('express');
const key= process.env.WEATHER_KEY

const getWeatherData = async (query) => {
      try {
            console.log(query)
            const resp = await axios.get('https://api.weatherapi.com/v1/current.json',
            {
                  params: {
                    key: key,
                    q: query
                  }
            });
            console.log(resp.data);
            return resp.data;
      } catch (err) {
            console.error(err);
      }
}
module.exports = {
      getWeatherData
}