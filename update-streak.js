const axios = require('axios');

const username = 'codelord-evans';
const token = process.env.GH_TOKEN;

axios.post(`https://github-readme-streak-stats.herokuapp.com/api?user=${username}&token=${token}`)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
