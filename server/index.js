const logger = require('./modules/logger.js').logger;

const express = require('express');
const app = express();

const PORT = 3001;

const { setupPage } = require('./procedures/setupPage.js');
const { configurePage } = require('./procedures/configurePage.js');
const { launchPage } = require('./procedures/launchPage.js');
const { statusPage } = require('./procedures/statusPage.js');

app.get('/setupPage', async function(req, res) {
  let output = {};

  try {
    output = await setupPage();
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e.stack });
  }

  return res.json(output);
});

app.get('/configurePage', async function(req, res) {
  let output = {};

  try {
    output = await configurePage();
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e.stack });
  }

  return res.json(output);
});

app.get('/launchPage', async function(req, res) {
  let output = {};

  try {
    output = await launchPage();
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e.stack });
  }

  return res.json(output);
});

app.get('/statusPage', async function(req, res) {
  let output = {};

  try {
    output = await statusPage();
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e.stack });
  }

  return res.json(output);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
