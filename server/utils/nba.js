const axios = require('axios');

const BASE_URL = 'https://www.balldontlie.io/api/v1/teams';

const getNbaData = async () => {
      try {
            const resp = await axios.get(BASE_URL);
            console.log(resp.data);
            return resp.data;
      } catch (err) {
            console.error(err);
      }
}
module.exports = {
      getNbaData
}