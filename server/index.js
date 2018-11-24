//

const logger = require('./modules/logger.js').logger;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { setupPage } = require('./procedures/setupPage');
const { configurePage } = require('./procedures/configurePage');
const { launchPage } = require('./procedures/launchPage');
const { statusPage } = require('./procedures/statusPage');
const { loadInstanceList, loadInstanceData } = require('./procedures/preLoad');

const PORT = 3001;

app.use(bodyParser.json());

//

app.get('/loadInstanceData', async function(req, res) {
  let instance_list = [];

  try {
    instance_list = await loadInstanceData();
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e });
  }

  return res.json(instance_list);
});

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
