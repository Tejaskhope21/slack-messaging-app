const axios = require('axios');

const slackAPI = axios.create({
  baseURL: 'https://slack.com/api',
  headers: {
    Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

module.exports = slackAPI;
