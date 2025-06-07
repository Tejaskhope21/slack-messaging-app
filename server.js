const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const slackRoutes = require('./routes/slack');

const app = express();
app.use(bodyParser.json());

app.use('/slack', slackRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
