//
const fs = require('fs').promises;
const logger = require('./modules/logger.js').logger;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { loadInstanceData } = require('./procedures/statusPage');
const { loadInitialData } = require('./procedures/initialLoad');

const PORT = 3001;

app.use(bodyParser.json());

//

app.delete('/Profile/:profile', async function(req, res) {
  const profile_to_delete = decodeURIComponent(req.params.profile);

  // read profile file
  let launch_profiles;
  try {
    const launch_profiles_response = await fs.readFile('./server/data/launch_profiles.json');
    launch_profiles = JSON.parse(launch_profiles_response.toString());
  } catch (e) {
    logger.error('Error loading saved profiles');
    logger.error(e.message);
    logger.error(e.stack);
    return res.status(500).send({ message: `ERROR. message: ${e.message}  stack: ${e.stack}` });
  }

  let updated_profiles;
  try {
    updated_profiles = {
      profiles: [
        ...launch_profiles.profiles.filter(p => {
          return p.profileLabel !== profile_to_delete;
        })
      ]
    };
  } catch (e) {
    logger.error('Error updating profiles');
    logger.error(e.message);
    logger.error(e.stack);
    return res.status(500).send({ message: `ERROR. message: ${e.message}  stack: ${e.stack}` });
  }

  // save profile file
  try {
    await fs.writeFile(
      './server/data/launch_profiles.json',
      JSON.stringify(updated_profiles, null, '\t')
    );
  } catch (e) {
    logger.error('Error saving profiles');
    logger.error(e.message);
    logger.error(e.stack);
    return res.status(500).send({ message: `ERROR. message: ${e.message}  stack: ${e.stack}` });
  }
  return res.status(200).send({ message: 'ok' });
});

app.post('/Profile', async function(req, res) {
  // read profile file
  let launch_profiles;
  try {
    const launch_profiles_response = await fs.readFile('./server/data/launch_profiles.json');
    launch_profiles = JSON.parse(launch_profiles_response.toString());
  } catch (e) {
    logger.error('Error loading saved profiles');
    logger.error(e.message);
    logger.error(e.stack);
    return res.status(500).send({ message: `ERROR. message: ${e.message}  stack: ${e.stack}` });
  }

  // add req.body to array of profiles
  try {
    launch_profiles.profiles.push(req.body);
  } catch (e) {
    logger.error('Error adding sent profile to profiles data array');
    logger.error(e.message);
    logger.error(e.stack);
    return res.status(500).send({ message: `ERROR. message: ${e.message}  stack: ${e.stack}` });
  }

  // save profile file
  try {
    await fs.writeFile('./server/data/launch_profiles.json', JSON.stringify(launch_profiles));
  } catch (e) {
    logger.error('Error saving profiles');
    logger.error(e.message);
    logger.error(e.stack);
    return res.status(500).send({ message: `ERROR. message: ${e.message}  stack: ${e.stack}` });
  }

  // return
  return res.status(200).send({ message: 'ok' });
});

app.post('/Credentials', async function(req, res) {
  // TODO

  // return
  return res.status(200).send({ message: 'ok' });
});

app.get('/loadInitialData', async function(req, res) {
  let instance_data = {};

  try {
    instance_data = await loadInitialData();
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e });
  }

  return res.json(instance_data);
});

app.get('/loadInstanceData', async function(req, res) {
  let instance_data = {};

  try {
    instance_data = await loadInstanceData();
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e });
  }

  return res.json(instance_data);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
