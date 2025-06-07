const express = require('express');
const slackAPI = require('../utils/slackClient');

const router = express.Router();

const CHANNEL_ID = 'C09154DU5Q8';

// Send an instant message
router.post('/send', async (req, res) => {
  const { text } = req.body;
  try {
    const response = await slackAPI.post('/chat.postMessage', {
      channel: CHANNEL_ID,
      text,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Schedule a message (with time validation)
router.post('/schedule', async (req, res) => {
  let { text, post_at } = req.body;

  
  const currentTimestamp = Math.floor(Date.now() / 1000); 
  if (!post_at || post_at <= currentTimestamp) {
    post_at = currentTimestamp + 5 * 60;
  }

  try {
    const response = await slackAPI.post('/chat.scheduleMessage', {
      channel: CHANNEL_ID,
      text,
      post_at,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get message history
router.get('/history', async (req, res) => {
  try {
    const response = await slackAPI.get('/conversations.history', {
      params: { channel: CHANNEL_ID },
    });
    res.json(response.data.messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit a message
router.post('/edit', async (req, res) => {
  const { ts, text } = req.body;
  try {
    const response = await slackAPI.post('/chat.update', {
      channel: CHANNEL_ID,
      ts,
      text,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a message
router.post('/delete', async (req, res) => {
  const { ts } = req.body;
  try {
    const response = await slackAPI.post('/chat.delete', {
      channel: CHANNEL_ID,
      ts,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
